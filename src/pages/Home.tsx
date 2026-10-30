import { BrandPreview } from "../components/BrandPreview";
export function Home() {
  return (
    <>
      <section className="page-hero wrap">
        <div className="eyebrow">
          Hyderabad businesses. Meet your next audience.
        </div>
        <svg className="route-doodle" viewBox="0 0 170 210" aria-hidden="true">
          <path d="M-25 200C140 200 2 2 103 24S66 128 160 120"></path>
          <circle
            cx="103"
            cy="24"
            r="6"
            fill="#ffd21c"
            stroke="#087a45"
          ></circle>
        </svg>
        <svg
          className="route-doodle right"
          viewBox="0 0 170 210"
          aria-hidden="true"
        >
          <path d="M-25 200C140 200 2 2 103 24S66 128 160 120"></path>
          <circle
            cx="103"
            cy="24"
            r="6"
            fill="#ffd21c"
            stroke="#087a45"
          ></circle>
        </svg>
        <h1>
          Your brand.
          <br />
          <em>Their daily route.</em>
        </h1>
        <p className="lead">
          Digital ads on passenger-facing screens{" "}
          <strong>inside cabs and buses.</strong>
          <br />
          Make your business part of the Hyderabad commute.
        </p>
        <div className="actions">
          <a className="button " href="pricing.html#planner">
            Plan Your Campaign
          </a>
          <a className="text-link" href="advertising.html">
            Explore the screen placements →
          </a>
        </div>
      </section>
      <BrandPreview />
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Simple to get moving</div>
            <h2>From your idea to their everyday journey.</h2>
          </div>
        </div>
        <div className="three">
          <article className="step">
            <h3>
              <span className="n">01</span>Share your goal
            </h3>
            <p>
              Tell us what you want to promote, who you want to reach and your
              preferred dates.
            </p>
          </article>
          <article className="step">
            <h3>
              <span className="n">02</span>Shape the campaign
            </h3>
            <p>
              Choose available vehicles and creative. We confirm requirements,
              pricing and delivery assumptions.
            </p>
          </article>
          <article className="step">
            <h3>
              <span className="n">03</span>Get moving
            </h3>
            <p>
              After approval and confirmation, your ad runs on the agreed
              interior screens.
            </p>
          </article>
        </div>
        <div style={{ marginTop: "23px" }}>
          <a className="text-link" href="how-it-works.html">
            See the complete campaign process →
          </a>
        </div>
      </section>
      <section className="wrap section tight">
        <div className="teaser">
          <div>
            <div className="eyebrow">A clear starting point</div>
            <h2>A campaign that starts with your plans.</h2>
            <p>
              Explore vehicle count, duration and estimated plays with our
              illustrative calculator. The team confirms the final quotation.
            </p>
          </div>
          <a className="button " href="pricing.html#planner">
            Explore an Estimate
          </a>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">The essentials</div>
            <h2>Know what you are planning.</h2>
          </div>
        </div>
        <div className="faq-grid">
          <article className="faq-card">
            <h3>Can I use both cabs and buses?</h3>
            <p>
              Yes, you can enquire about a combination of interior screen
              placements. The mix, available vehicles and dates are confirmed
              before booking.
            </p>
          </article>
          <article className="faq-card">
            <h3>Where in Hyderabad will my campaign run?</h3>
            <p>
              Adrover is focused on Hyderabad. Available areas and vehicles
              depend on your campaign dates; route-level targeting is not
              guaranteed.
            </p>
          </article>
        </div>
      </section>
      <section className="wrap section tight">
        <div className="cta">
          <div>
            <div className="eyebrow">Your brand. Their daily route.</div>
            <h2>Put your business in the next journey.</h2>
            <p>
              Start a conversation about screens inside Hyderabad cabs and
              buses.
            </p>
          </div>
          <a className="button yellow" href="pricing.html#planner">
            Plan Your Campaign
          </a>
        </div>
      </section>
    </>
  );
}
