# Adrover website

A complete React + TypeScript conversion of the supplied Adrover designs, using Vite.
All seven pages are included, with the original responsive styling, illustrations and content.
This project is a separate copy; the original design folder is unchanged.

## Run locally

Install [Node.js](https://nodejs.org/) 24 LTS (minimum supported: 22.12) and open a terminal in this folder:

```powershell
cd C:\Users\251739\Downloads\Adrover-react-typescript
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://127.0.0.1:5173`).
Do not double-click the HTML files: React/TypeScript must be served by Vite or built first.

```powershell
npm run typecheck
npm run build
npm run preview
```

The production output is `dist`. The preview URL is normally `http://127.0.0.1:4173`.

## Pages and source

| URL                 | React source                | Purpose                                  |
| ------------------- | --------------------------- | ---------------------------------------- |
| `index.html` or `/` | `src/pages/Home.tsx`        | Home and live brand preview              |
| `advertising.html`  | `src/pages/Advertising.tsx` | Cab and bus placements                   |
| `how-it-works.html` | `src/pages/HowItWorks.tsx`  | Process and downloadable checklist       |
| `pricing.html`      | `src/pages/Pricing.tsx`     | Validated illustrative calculator        |
| `contact.html`      | `src/pages/Contact.tsx`     | Campaign handoff and local enquiry draft |
| `review.html`       | `src/pages/Review.tsx`      | Five downloadable desktop page images    |
| `references.html`   | `src/pages/References.tsx`  | Original design-reference notes          |

`src/components` contains the shared layout and interactive components.
`src/lib/campaign.ts` is the shared typed calculation and query-string validation.
`src/styles.css` preserves the supplied responsive design.
`public/assets` contains the rebranded SVG illustrations.
`public/page-images` contains newly generated Adrover screenshots, including smaller previews.
Design review and reference pages are linked in the footer.

Each root HTML file is a small entry point for the same React application, not an embedded legacy page.
Vite emits all seven HTML entry points. Normal relative links preserve the original URLs,
query parameters and section anchors. `base: "./"` makes bundled assets work at both the
domain root and any repository subpath. No SPA rewrite, custom 404 redirect, router dependency,
hard-coded username or repository name is needed. Direct loads and refreshes work on GitHub Pages.

## Publish to your personal GitHub Pages

Nothing has been uploaded or deployed for you. Use the following steps when ready.

1. Sign in to your personal [GitHub](https://github.com/) account. Create a new **public**
   repository, for example `adrover-website`. For the terminal steps below, leave the new
   repository empty (do not initialize a README, license or gitignore).
   Public repositories can use GitHub Pages on GitHub Free; private-repository availability
   depends on your plan.
2. Install [Git](https://git-scm.com/) if needed. In this project folder run the commands below,
   replacing `YOUR-USERNAME` and `YOUR-REPOSITORY` with your actual values.
   The `.gitignore` excludes dependencies, build output, test output and local environment files.
   Commit the source, `package-lock.json`, `public` assets and `.github` folder.

   ```powershell
   git init
   git add .
   git commit -m "Add Adrover React TypeScript website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. In the repository, open **Settings > Pages > Build and deployment**.
   Set **Source** to **GitHub Actions**. Enable Actions if GitHub asks.
4. Open **Actions > Deploy Adrover to GitHub Pages**. If the initial push ran before Pages
   was enabled, use **Run workflow** on `main` or rerun the failed deployment.
5. Wait for the build and deploy jobs to succeed. The workflow installs locked dependencies
   with `npm ci`, checks TypeScript, builds all pages and deploys `dist`.
6. Open the URL shown in **Settings > Pages** or the deployment job:
   `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.
   Other pages work directly, for example
   `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/pricing.html`.
   If your repository is named `YOUR-USERNAME.github.io`, the site is at
   `https://YOUR-USERNAME.github.io/` instead. Neither setup requires a code change.
7. For updates, edit the source, run `npm run build`, commit and push to `main`.
   The workflow deploys again automatically. If you choose a different default branch,
   update `on.push.branches` in `.github/workflows/deploy-pages.yml`.

You can alternatively publish this folder with GitHub Desktop to a new personal repository.
Include hidden `.github` and `.gitignore` files, then follow the Pages settings above.
Do not upload `node_modules` or rely on GitHub rendering source HTML from the repository view.
GitHub Pages serves the deployed build, not the TypeScript source.

## Browser checks and page image updates

```powershell
npx playwright install chromium
npm run build
npm test
npm run format:check
```

Tests serve the built site under `/adrover-test/` to exercise GitHub-style repository paths.
They cover all seven pages and refreshes, desktop/mobile layouts, long brand labels,
calculator validation and safe numeric bounds, query handoff, invalid query values,
local draft/checklist downloads, PNG downloads and mobile navigation.
The tests use ports 4173 and the screenshot script uses 4174; stop conflicting local servers first.
No tests submit enquiries or contact outside services.

After changing page design or text, refresh the review gallery images:

```powershell
npm run build
npm run screenshots
npm run build
npm test
```

Commit the regenerated `public/page-images` files. The second build copies the new images
into `dist`. The screenshot script starts and stops its own local preview server.
Use `npm run format` to format source and configuration.

## Deliberate limitations before a business launch

- The calculator assumes INR 0.25 per play. It is an illustration, not a quotation or
  reservation. Tax, fees, availability and delivery commitments are not calculated.
- Contact fields download a local text draft only. Nothing is sent, uploaded or stored on a
  backend. The site has no admin login, payment integration or video-upload capability.
- Verified phone, WhatsApp, email, address and business hours remain explicit placeholders.
  Add real, approved details and publish Privacy and Terms before a business launch.
- Confirm pricing, screen specifications, creative rules, fleet availability and reporting.
  The references page preserves supplied research notes; it is not a new verification of
  external claims or an endorsement by those companies.
- The project uses only bundled local assets and system fonts. Review your rights to all
  supplied content before making your GitHub repository public. No license grant is
  invented for your business materials.
