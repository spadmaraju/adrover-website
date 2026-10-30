import { useState } from "react";
import {
  calculate,
  campaignQuery,
  isPositiveInteger,
  moneyFormat,
  numberFormat,
} from "../lib/campaign";
import { VehicleOptions } from "./VehicleOptions";

export function CampaignPlanner() {
  const [type, setType] = useState("Both");
  const [vehicles, setVehicles] = useState("20");
  const [days, setDays] = useState("10");
  const [dailyPlays, setDailyPlays] = useState("50");
  const result = calculate(vehicles, days, dailyPlays, type);
  const estimate = result.ok ? result.estimate : null;
  const fields = [
    {
      id: "vehicle-count",
      label: "Total number of vehicles",
      value: vehicles,
      set: setVehicles,
      hint: "For both formats, this is the combined total.",
    },
    {
      id: "campaign-days",
      label: "Campaign duration in days",
      value: days,
      set: setDays,
    },
    {
      id: "daily-plays",
      label: "Plays per vehicle per day",
      value: dailyPlays,
      set: setDailyPlays,
      hint: "A planning assumption, not promised inventory.",
    },
  ];
  return (
    <section className="wrap" id="planner">
      <div className="planner-bg">
        <div className="planner-heading">
          <h2>Build your campaign estimate</h2>
          <span className="tag">
            ILLUSTRATIVE &middot; NOT A PUBLISHED RATE CARD
          </span>
        </div>
        <div className="ticket">
          <div className="config">
            <div className="fields">
              <div className="field">
                <label htmlFor="vehicle-type">Vehicle format</label>
                <select
                  id="vehicle-type"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <VehicleOptions />
                </select>
              </div>
              {fields.map((field) => (
                <div className="field" key={field.id}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input
                    id={field.id}
                    type="number"
                    min="1"
                    step="1"
                    value={field.value}
                    onChange={(event) => field.set(event.target.value)}
                    aria-invalid={!isPositiveInteger(field.value)}
                    aria-describedby="pricing-error"
                  />
                  {field.hint && <small>{field.hint}</small>}
                </div>
              ))}
            </div>
            <div className="formula" id="estimate-formula" hidden={!estimate}>
              {estimate &&
                `${estimate.vehicles} vehicles x ${estimate.days} days x ${estimate.dailyPlays} plays/day = ${numberFormat.format(estimate.plays)} estimated plays`}
            </div>
            <p className="fine">
              This example assumes the same &#8377;0.25 rate per play for both
              vehicle types. Actual rates and delivery assumptions must be
              confirmed.
            </p>
            <p
              id="pricing-error"
              className="error"
              role="alert"
              tabIndex={-1}
              hidden={result.ok}
            >
              {!result.ok && result.error}
            </p>
          </div>
          <div className="receipt">
            <div
              id="pricing-result"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              hidden={!estimate}
            >
              <div className="eyebrow">Your illustrative campaign</div>
              <div className="price" id="total-cost">
                {estimate && moneyFormat.format(estimate.cost)}
              </div>
              <div className="sub">At an assumed &#8377;0.25 per ad play</div>
              <div className="plays">
                <strong id="total-plays">
                  {estimate && numberFormat.format(estimate.plays)}
                </strong>
                <br />
                <span className="sub">estimated playback events</span>
              </div>
            </div>
            <button
              className="button dark"
              id="continue-enquiry"
              type="button"
              disabled={!estimate}
              onClick={() => {
                if (estimate)
                  window.location.assign(
                    `contact.html?${campaignQuery(estimate)}`,
                  );
              }}
            >
              Discuss This Estimate
            </button>
            <p className="fine">
              Review these numbers with the team before booking. No payment is
              collected here.
            </p>
          </div>
        </div>
        <p className="fine">
          No taxes or additional charges are calculated in this example. Whether
          taxes, creative production, installation or other fees apply must be
          confirmed in the quotation.
        </p>
      </div>
    </section>
  );
}
