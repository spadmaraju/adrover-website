import { CampaignPlanner } from "../components/CampaignPlanner";
export function Pricing() {
  return (
    <>
      <section className="page-hero wrap">
        <div className="eyebrow">Pricing / plan with clarity</div>
        <h1>
          Start with a possibility.
          <br />
          <em>Confirm it with a quote.</em>
        </h1>
        <p className="lead">
          Explore an example budget for screens inside cabs and buses. All
          figures below are illustrative until Adrover confirms its commercial
          model.
        </p>
      </section>
      <CampaignPlanner />
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Understand the unit</div>
            <h2>Ad plays are not audience counts.</h2>
          </div>
        </div>
        <div className="three">
          <article className="soft-card">
            <span className="symbol" aria-hidden="true">
              01
            </span>
            <h3>One playback event</h3>
            <p>
              An ad play means the creative is played on a display. It is not
              automatically a unique viewer.
            </p>
          </article>
          <article className="soft-card">
            <span className="symbol" aria-hidden="true">
              02
            </span>
            <h3>An estimate, not a promise</h3>
            <p>
              Planned volume depends on vehicle schedules, screen availability,
              rotation and technical conditions.
            </p>
          </article>
          <article className="soft-card">
            <span className="symbol" aria-hidden="true">
              03
            </span>
            <h3>A written confirmation</h3>
            <p>
              Confirm the rate, playback definition and any delivery commitment
              before a campaign begins.
            </p>
          </article>
        </div>
      </section>
      <section className="wrap section tight">
        <div className="split">
          <div>
            <div className="eyebrow">Your final quote should answer</div>
            <h2>
              Know what you are
              <br />
              agreeing to.
            </h2>
            <ul className="check-list">
              <li>Cab/bus mix, vehicle count and campaign dates.</li>
              <li>Rate, charging unit, taxes and any additional fees.</li>
              <li>
                Creative requirements and whether production support is
                included.
              </li>
              <li>Payment schedule and change/cancellation terms.</li>
              <li>Planned plays, reporting scope and interruption handling.</li>
            </ul>
          </div>
          <div className="dark-panel">
            <div className="eyebrow">Why the final quote can differ</div>
            <h2>
              Every campaign has
              <br />
              its own moving parts.
            </h2>
            <p>
              The available inventory, chosen format, dates, creative
              requirements and agreed delivery scope affect a campaign
              quotation.
            </p>
            <p>
              Tell us your priorities. The calculator starts the conversation;
              it does not reserve vehicles or lock a price.
            </p>
            <a className="button yellow small" href="contact.html">
              Talk Through My Requirements
            </a>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Pricing questions</div>
            <h2>Clear numbers need clear assumptions.</h2>
          </div>
        </div>
        <div className="faq-grid">
          <article className="faq-card">
            <h3>Is ₹0.25 your confirmed selling price?</h3>
            <p>
              No. It is the illustrative rate used in this design, not a
              published commercial commitment. Adrover must confirm its actual
              rates.
            </p>
          </article>
          <article className="faq-card">
            <h3>Does selecting both formats double the vehicle count?</h3>
            <p>
              No. The count is the combined total across cabs and buses. The
              actual split is agreed with the team.
            </p>
          </article>
          <article className="faq-card">
            <h3>Are there minimum spends or fixed packages?</h3>
            <p>
              No minimum or package has been finalized in this design. Ask the
              team about the requirements for your preferred dates and formats.
            </p>
          </article>
          <article className="faq-card">
            <h3>Is the estimated cost inclusive of tax?</h3>
            <p>
              Tax is not calculated here. Applicable taxes and whether quoted
              rates are inclusive or exclusive must be confirmed in the final
              quotation.
            </p>
          </article>
        </div>
      </section>
      <section className="wrap section tight">
        <div className="cta">
          <div>
            <div className="eyebrow">Your brand. Their daily route.</div>
            <h2>A useful estimate. A better conversation.</h2>
            <p>
              Review your campaign idea with Adrover before making a commitment.
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
