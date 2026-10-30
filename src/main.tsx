import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Advertising } from "./pages/Advertising";
import { HowItWorks } from "./pages/HowItWorks";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Review } from "./pages/Review";
import { References } from "./pages/References";
import "./styles.css";

const pages = {
  "index.html": Home,
  "advertising.html": Advertising,
  "how-it-works.html": HowItWorks,
  "pricing.html": Pricing,
  "contact.html": Contact,
  "review.html": Review,
  "references.html": References,
};

const filename = window.location.pathname.split("/").pop() || "index.html";
const Page = Object.hasOwn(pages, filename)
  ? pages[filename as keyof typeof pages]
  : null;
const root = document.getElementById("root");
if (!root) throw new Error("The page is missing its React root.");

createRoot(root).render(
  <StrictMode>
    <Layout currentPage={filename}>
      {Page ? (
        <Page />
      ) : (
        <section className="wrap section">
          <h1>Page not found</h1>
          <a className="button" href="index.html">
            Return home
          </a>
        </section>
      )}
    </Layout>
  </StrictMode>,
);
