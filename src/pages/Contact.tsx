import { EnquiryForm } from "../components/EnquiryForm";
export function Contact() {
  return (
    <>
      <section className="page-hero wrap">
        <div className="eyebrow">Contact / start a conversation</div>
        <h1>
          Tell us what you are
          <br />
          <em>moving toward.</em>
        </h1>
        <p className="lead">
          A new business. A fresh launch. A local offer. Share your goal and
          explore a campaign on screens inside Hyderabad cabs and buses.
        </p>
      </section>
      <section className="wrap">
        <div className="split">
          <div>
            <div className="eyebrow">Choose your conversation</div>
            <h2>
              Let us talk about
              <br />
              your next campaign.
            </h2>
            <p className="muted">
              Verified contact channels will be added here. The placeholders
              below are intentional; they are not working contact links.
            </p>
            <div className="contacts">
              <article className="contact-card">
                <span className="pending">CONTACT PENDING</span>
                <h3>WhatsApp</h3>
                <span className="placeholder">
                  [Add verified WhatsApp number]
                </span>
                <p>For a campaign conversation and initial requirements.</p>
              </article>
              <article className="contact-card">
                <span className="pending">CONTACT PENDING</span>
                <h3>Call Adrover</h3>
                <span className="placeholder">[Add business phone number]</span>
                <p>Business hours: [to be confirmed].</p>
              </article>
              <article className="contact-card">
                <span className="pending">CONTACT PENDING</span>
                <h3>Business email</h3>
                <span className="placeholder">
                  [Add verified business email]
                </span>
                <p>
                  For campaign briefs, creative requirements and quotations.
                </p>
              </article>
              <article className="contact-card">
                <span className="pending">HYDERABAD FOCUS</span>
                <h3>Service city</h3>
                <span className="placeholder">Hyderabad, Telangana, India</span>
                <p>Office / meeting address: [to be added].</p>
              </article>
            </div>
            <div className="callout" style={{ marginTop: "23px" }}>
              <strong>Prefer to plan first?</strong>
              <br />
              Explore an illustrative cost and playback estimate, then bring
              those numbers into your enquiry.
              <br />
              <a
                className="text-link"
                href="pricing.html#planner"
                style={{ marginTop: "11px" }}
              >
                Open the campaign planner →
              </a>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">What happens next</div>
            <h2>A useful conversation starts with your goal.</h2>
          </div>
        </div>
        <div className="three">
          <article className="step">
            <h3>
              <span className="n">01</span>Understand the brief
            </h3>
            <p>
              The team reviews your objective, preferred formats, dates and
              creative requirements.
            </p>
          </article>
          <article className="step">
            <h3>
              <span className="n">02</span>Confirm the options
            </h3>
            <p>
              Available inventory, screen specifications and campaign
              assumptions are discussed.
            </p>
          </article>
          <article className="step">
            <h3>
              <span className="n">03</span>Review the quotation
            </h3>
            <p>
              You receive the agreed scope and commercial terms before a
              campaign is confirmed.
            </p>
          </article>
        </div>
      </section>
      <section className="wrap section tight" id="launch-notes">
        <div className="launch">
          <h3>Before this design goes live</h3>
          <p>
            Replace the contact placeholders, confirm business hours and
            address, publish Privacy and Terms, and approve the enquiry-delivery
            and consent process. Pricing, creative specifications, inventory and
            reporting commitments also need business sign-off. No live response
            time, fleet size or delivery guarantee is claimed in these designs.
          </p>
        </div>
      </section>
    </>
  );
}
