import { expect, test, type Download } from "@playwright/test";
import { readFile } from "node:fs/promises";

const pages = [
  "index",
  "advertising",
  "how-it-works",
  "pricing",
  "contact",
  "review",
  "references",
];

async function downloadedText(download: Download) {
  const path = await download.path();
  if (!path) throw new Error("Download did not produce a local file.");
  return readFile(path, "utf8");
}

for (const slug of pages) {
  test(`${slug}: direct load, refresh, assets, branding and responsive layout`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`);
    });
    await page.goto(`${slug}.html`);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Adrover/);
    await expect(page.locator("header .logo")).toHaveText("adrover.");
    await expect(page.locator("body")).not.toContainText(/\badrove\b/i);
    await page.reload();
    await expect(page.locator("main h1")).toBeVisible();
    await expect
      .poll(() =>
        page
          .locator("img")
          .evaluateAll((images) =>
            images.every(
              (image) =>
                image instanceof HTMLImageElement &&
                image.complete &&
                image.naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const internalLinks = await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links
          .map((link) => (link as HTMLAnchorElement).href)
          .filter((href) => href.startsWith(location.origin)),
      );
    expect(
      internalLinks.every((href) =>
        new URL(href).pathname.startsWith("/adrover-test/"),
      ),
    ).toBe(true);
    if (
      ["index", "advertising", "how-it-works", "pricing", "contact"].includes(
        slug,
      )
    ) {
      await expect(
        page.locator(`header .links a[href="${slug}.html"]`),
      ).toHaveAttribute("aria-current", "page");
    }
    expect(errors).toEqual([]);
  });
}

test("home brand preview updates both screens, fits long labels and resets", async ({
  page,
}) => {
  await page.goto("index.html");
  await page.locator("#brand-name").fill("WWWWWWWWWWWWWWWWWWWWWWWW");
  await expect(page.locator(".live-brand")).toHaveText([
    "WWWWWWWWWWWWWWWWWWWWWWWW",
    "WWWWWWWWWWWWWWWWWWWWWWWW",
  ]);
  for (const text of await page.locator(".live-brand").all()) {
    expect(Number(await text.getAttribute("textLength"))).toBeGreaterThan(0);
    expect(
      await text.evaluate(
        (node) =>
          (node as SVGTextElement).getComputedTextLength() <=
          Number(node.getAttribute("data-max-width")) + 1,
      ),
    ).toBe(true);
  }
  await page.locator("#brand-name").fill("Local Cafe");
  await expect(page.locator(".live-brand")).toHaveText([
    "Local Cafe",
    "Local Cafe",
  ]);
  await expect(page.locator(".live-brand").first()).not.toHaveAttribute(
    "textLength",
  );
  await page.locator("#brand-name").fill("   ");
  await expect(page.locator(".live-brand")).toHaveText([
    "YOUR BRAND",
    "YOUR BRAND",
  ]);
});

test("calculator validates inputs and hands campaign to contact under repository subpath", async ({
  page,
}) => {
  await page.goto("pricing.html#planner");
  await expect(page.locator("#total-cost")).toHaveText("\u20b92,500");
  await expect(page.locator("#total-plays")).toHaveText("10,000");
  for (const value of ["", "0", "-1", "1.5", "9007199254740991"]) {
    await page.locator("#vehicle-count").fill(value);
    await expect(page.locator("#pricing-error")).toBeVisible();
    await expect(page.locator("#pricing-result")).toBeHidden();
    await expect(page.locator("#continue-enquiry")).toBeDisabled();
  }
  await page.locator("#vehicle-count").fill("12");
  await page.locator("#campaign-days").fill("7");
  await page.locator("#daily-plays").fill("25");
  await page.locator("#vehicle-type").selectOption("Cabs");
  await expect(page.locator("#total-plays")).toHaveText("2,100");
  await expect(page.locator("#total-cost")).toHaveText("\u20b9525");
  await page.locator("#continue-enquiry").click();
  await expect(page).toHaveURL(
    /\/adrover-test\/contact\.html\?vehicles=12&days=7&dailyPlays=25&type=Cabs/,
  );
  await expect(page.locator("#incoming-campaign")).toContainText(
    "12 vehicles, 7 days, 25 plays/vehicle/day",
  );
  await expect(page.locator("#preferred-format")).toHaveValue("Cabs");
  await page.reload();
  await expect(page.locator("#incoming-campaign")).toContainText(
    "2,100 estimated plays",
  );
  await page.locator("#preferred-format").selectOption("Buses");
  await expect(page.locator("#incoming-campaign")).toContainText(
    "Updated format: Buses",
  );
  await expect(page.locator("#incoming-campaign")).toContainText("\u20b9525");
});

test("contact rejects malformed campaign links without blocking a new draft", async ({
  page,
}) => {
  for (const query of [
    "vehicles=1",
    "vehicles=-1&days=10&dailyPlays=50&type=Both",
    "vehicles=1&days=1&dailyPlays=1&type=Train",
  ]) {
    await page.goto(`contact.html?${query}`);
    await expect(page.locator("#incoming-error")).toContainText(
      "The campaign link could not be used",
    );
    await expect(page.locator("#incoming-campaign")).toBeHidden();
    await expect(page.locator("#preferred-format")).toHaveValue("Both");
    await expect(page.locator("#enquiry-form")).toBeVisible();
  }
  await page.goto("contact.html");
  await expect(page.locator("#incoming-error")).toBeHidden();
  await expect(page.locator("#incoming-campaign")).toBeHidden();
});

test("enquiry validates required fields and saves only a local branded draft", async ({
  page,
}) => {
  const submissions: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") submissions.push(request.url());
  });
  await page.goto("contact.html?vehicles=20&days=10&dailyPlays=50&type=Both");
  await page.getByRole("button", { name: "Save My Enquiry Draft" }).click();
  expect(
    await page
      .locator("#contact-name")
      .evaluate((node) => (node as HTMLInputElement).validity.valueMissing),
  ).toBe(true);
  await page.locator("#contact-name").fill("   ");
  await page.locator("#business-name").fill("Cafe");
  await page.locator("#work-email").fill("owner@example.com");
  await page.locator("#campaign-goal").selectOption("Introduce my business");
  await page.getByRole("button", { name: "Save My Enquiry Draft" }).click();
  await expect(page.locator("#enquiry-status")).toContainText(
    "not just spaces",
  );
  await page.locator("#contact-name").fill("Asha");
  await page.locator("#preferred-format").selectOption("Buses");
  await page.locator("#campaign-message").fill("A local launch");
  const pending = page.waitForEvent("download");
  await page.getByRole("button", { name: "Save My Enquiry Draft" }).click();
  const download = await pending;
  expect(download.suggestedFilename()).toBe("Adrover-enquiry-draft.txt");
  const text = await downloadedText(download);
  expect(text).toContain("ADROVER / CAMPAIGN ENQUIRY DRAFT");
  expect(text).toContain("Name: Asha");
  expect(text).toContain("Interior screen format: Buses");
  expect(text).toContain("10,000 plays");
  expect(text).toContain("Nothing has been submitted or sent.");
  expect(text).not.toMatch(/\badrove\b/i);
  await expect(page.locator("#enquiry-status")).toContainText(
    "Nothing has been sent to Adrover.",
  );
  expect(submissions).toEqual([]);
});

test("creative checklist downloads with Adrover name and original guidance", async ({
  page,
}) => {
  await page.goto("how-it-works.html#creative");
  const pending = page.waitForEvent("download");
  await page.locator("#download-checklist").click();
  const download = await pending;
  expect(download.suggestedFilename()).toBe("Adrover-creative-checklist.txt");
  const text = await downloadedText(download);
  expect(text).toContain("ADROVER / INTERIOR SCREEN CREATIVE CHECKLIST");
  expect(text).toContain(
    "Do not assume a universal 30-second rule or a final rate.",
  );
  await expect(page.locator("#checklist-status")).toHaveText(
    "Checklist download requested.",
  );
});

test("review gallery downloads rebranded PNGs and opens each page", async ({
  page,
  request,
}) => {
  await page.goto("review.html");
  const links = page.getByRole("link", { name: "Download Full PNG" });
  await expect(links).toHaveCount(5);
  for (const link of await links.all()) {
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^page-images\/Adrover-/);
    const response = await request.get(href!);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/png");
  }
  const pending = page.waitForEvent("download");
  await links.first().click();
  expect((await pending).suggestedFilename()).toBe("Adrover-01-Home.png");
  for (const [index, slug] of pages.slice(0, 5).entries()) {
    await page.goto("review.html");
    await page.getByRole("link", { name: "Open Page" }).nth(index).click();
    expect(new URL(page.url()).pathname).toBe(`/adrover-test/${slug}.html`);
    await expect(page.locator("main h1")).toBeVisible();
  }
});

test("repository landing URL and direct section anchors work", async ({
  page,
}) => {
  await page.goto("./");
  await expect(page.locator("#brand-name")).toBeVisible();
  for (const [slug, id] of [
    ["pricing", "planner"],
    ["how-it-works", "creative"],
    ["contact", "launch-notes"],
  ]) {
    await page.goto(`${slug}.html#${id}`);
    await expect(page.locator(`#${id}`)).toBeInViewport();
    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeGreaterThan(0);
    await page.reload();
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test("mobile navigation and 320px layout remain usable", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  for (const slug of pages) {
    await page.goto(`${slug}.html`);
    await expect(page.locator("main h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  await page.getByLabel("Open navigation").click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Pricing" })
    .click();
  await expect(page.locator("#planner")).toBeVisible();
});
