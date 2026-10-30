import { chromium } from "@playwright/test";
import { preview } from "vite";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const pages = [
  ["Home", "index", "01-Home"],
  ["Advertising", "advertising", "02-Advertising"],
  ["How It Works", "how-it-works", "03-How-It-Works"],
  ["Pricing", "pricing", "04-Pricing"],
  ["Contact", "contact", "05-Contact"],
];
const output = resolve("public", "page-images");
await mkdir(output, { recursive: true });
const server = await preview({
  base: "/",
  preview: { host: "127.0.0.1", port: 4174, strictPort: true, open: false },
});
let browser;
try {
  browser = await chromium.launch();
  const manifest = [];
  for (const scale of [1, 0.5]) {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: scale,
    });
    const page = await context.newPage();
    for (const [label, slug, name] of pages) {
      await page.goto(`http://127.0.0.1:4174/${slug}.html`, {
        waitUntil: "networkidle",
      });
      await page.locator("main h1").waitFor();
      await page.evaluate(() => document.fonts.ready);
      const filename = `Adrover-${name}${scale === 1 ? "" : "-preview"}.png`;
      const image = await page.screenshot({
        path: resolve(output, filename),
        fullPage: true,
        animations: "disabled",
      });
      if (scale === 1)
        manifest.push({
          page: label,
          file: `${slug}.html`,
          image: filename,
          width: image.readUInt32BE(16),
          height: image.readUInt32BE(20),
        });
      console.log(`Generated ${filename}`);
    }
    await context.close();
  }
  await writeFile(
    resolve(output, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
} finally {
  await browser?.close();
  await new Promise((resolve, reject) =>
    server.httpServer.close((error) => (error ? reject(error) : resolve())),
  );
}
