import { useLayoutEffect, type ReactNode } from "react";

const navigation = [
  ["index.html", "Home"],
  ["advertising.html", "Advertising"],
  ["how-it-works.html", "How It Works"],
  ["pricing.html", "Pricing"],
  ["contact.html", "Contact"],
] as const;

function Logo() {
  return (
    <a className="logo" href="index.html" aria-label="Adrover home">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M0 37 14 2h12l14 35H28L20 14 12 37Z" fill="#ffd21c" />
        <path d="M18 25h4l3 8H15Z" fill="#101814" />
      </svg>
      <span>
        adrover<i>.</i>
      </span>
    </a>
  );
}

export function Layout({
  currentPage,
  children,
}: {
  currentPage: string;
  children: ReactNode;
}) {
  useLayoutEffect(() => {
    // The initial fragment lookup can run before React mounts the section.
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: "instant" });
  }, []);

  const links = navigation.map(([href, label]) => (
    <a
      key={href}
      href={href}
      aria-current={currentPage === href ? "page" : undefined}
    >
      {label}
    </a>
  ));
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav wrap">
        <Logo />
        <nav className="links" aria-label="Main navigation">
          {links}
        </nav>
        <a className="button yellow small" href="pricing.html#planner">
          Plan Your Campaign
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu &#9776;</summary>
          <nav aria-label="Mobile navigation">{links}</nav>
        </details>
      </header>
      <main id="main">{children}</main>
      <footer>
        <div className="wrap">
          <div className="footer-main">
            <div>
              <Logo />
              <p>
                Brands Move People.
                <br />
                Digital screens inside cabs and buses. Hyderabad, first.
              </p>
            </div>
            <nav className="footer-links" aria-label="Footer navigation">
              {links}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Adrover. All rights reserved.</span>
            <span>
              <a
                href="review.html"
                aria-current={
                  currentPage === "review.html" ? "page" : undefined
                }
              >
                Design review
              </a>{" "}
              &middot;{" "}
              <a
                href="references.html"
                aria-current={
                  currentPage === "references.html" ? "page" : undefined
                }
              >
                References
              </a>
            </span>
            <span>
              Design preview &middot;{" "}
              <a href="contact.html#launch-notes">
                Contact details, Privacy and Terms: pending confirmation
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
