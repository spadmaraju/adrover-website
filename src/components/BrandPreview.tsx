import { useState } from "react";
import { BrandText } from "./BrandText";
export function BrandPreview() {
  const [brand, setBrand] = useState("");
  return (
    <section
      className="wrap"
      aria-label="Preview your brand on interior screens"
    >
      <div className="brand-bar">
        <label htmlFor="brand-name">Picture your brand here</label>
        <input
          id="brand-name"
          maxLength={24}
          placeholder="Type your business name"
          autoComplete="organization"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
        <small>Preview only. Nothing is uploaded or published.</small>
      </div>
      <div className="media-grid">
        <article className="media-card">
          <div className="art">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1000"
              height="680"
              viewBox="0 0 1000 680"
            >
              <title>Digital advertising screen inside a cab</title>
              <desc>
                Original concept illustration from the rear passenger seat. A
                screen on the left front passenger headrest faces the rear
                bench. The driver position is on the right.
              </desc>
              <defs>
                <linearGradient id="cab-sky" x2="0" y2="1">
                  <stop stopColor="#C6D0AE"></stop>
                  <stop offset="1" stopColor="#829571"></stop>
                </linearGradient>
                <linearGradient id="cab-seat" x2="1" y2="1">
                  <stop stopColor="#4A5C48"></stop>
                  <stop offset="1" stopColor="#15271A"></stop>
                </linearGradient>
              </defs>
              <rect width="1000" height="680" fill="#223D2B"></rect>
              <path
                d="M116 58Q510 8 879 58L921 373H78Z"
                fill="url(#cab-sky)"
              ></path>
              <g fill="#76906D" opacity=".62">
                <path d="M112 332V181H177V128H235V265H282V197H356V336ZM682 333V173H745V110H796V211H878V335Z"></path>
              </g>
              <g fill="#CED6B1" stroke="#8FA07A" strokeWidth="2">
                <path d="M431 309V184H448V166H464V184H480V221H531V184H548V166H564V184H580V309H544V274Q507 211 468 274V309Z"></path>
                <path d="M434 165V148Q446 128 461 148V165ZM533 165V148Q547 128 561 148V165Z"></path>
              </g>
              <path d="M429 311H609L737 393H279Z" fill="#6D7F5C"></path>
              <path
                d="M509 324V344M509 360V384"
                stroke="#DBD8A8"
                strokeWidth="5"
              ></path>
              <path d="M0 0H1000V72Q495 8 0 80Z" fill="#142B1C"></path>
              <path
                d="M0 75 137 37 83 370 0 482ZM1000 75 860 37 919 370 1000 482Z"
                fill="#1E3424"
              ></path>
              <path
                d="M23 369Q500 316 974 369L1000 477H0Z"
                fill="#112A1B"
              ></path>
              <path d="M502 55V104" stroke="#203724" strokeWidth="9"></path>
              <rect
                x="447"
                y="100"
                width="110"
                height="34"
                rx="10"
                fill="#233B27"
              ></rect>
              <circle
                cx="758"
                cy="389"
                r="54"
                fill="none"
                stroke="#091C10"
                strokeWidth="16"
              ></circle>
              <path
                d="M758 386V435M716 368L756 391L799 368"
                fill="none"
                stroke="#091C10"
                strokeWidth="10"
              ></path>
              <g fill="url(#cab-seat)" stroke="#6D7C5C" strokeWidth="3">
                <path d="M54 680 88 424Q93 382 137 382H346Q384 382 391 426L431 680Z"></path>
                <rect x="155" y="244" width="174" height="157" rx="45"></rect>
                <path d="M580 680 613 424Q621 382 659 382H871Q910 382 917 426L958 680Z"></path>
                <rect x="680" y="244" width="174" height="157" rx="45"></rect>
              </g>
              <path
                d="M111 662 134 438M337 269H182M707 269H824M887 439L920 662"
                fill="none"
                stroke="#8A9675"
                strokeWidth="2"
                opacity=".45"
              ></path>
              <path
                d="M208 393V424M276 393V424"
                stroke="#B3BDA0"
                strokeWidth="8"
              ></path>
              <rect
                x="93"
                y="416"
                width="356"
                height="211"
                rx="19"
                fill="#09190F"
                stroke="#8D9F77"
                strokeWidth="3"
              ></rect>
              <rect
                x="107"
                y="430"
                width="328"
                height="181"
                rx="9"
                fill="#FFD21C"
              ></rect>
              <g fontFamily="Arial,Helvetica,sans-serif" fill="#102619">
                <text
                  x="126"
                  y="460"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="2"
                >
                  HELLO, HYDERABAD.
                </text>
                <BrandText
                  x={124}
                  y={508}
                  fontSize={31}
                  maxWidth={290}
                  label={brand}
                />
                <text x="126" y="539" fontSize="14">
                  A little ride. A bigger possibility.
                </text>
                <rect
                  x="125"
                  y="559"
                  width="95"
                  height="29"
                  rx="15"
                  fill="#087A45"
                ></rect>
                <text
                  x="144"
                  y="579"
                  fontSize="14"
                  fontWeight="700"
                  fill="#F8F7F1"
                >
                  adrover.
                </text>
                <path
                  d="M354 574H411M397 560L411 574L397 588"
                  fill="none"
                  stroke="#087A45"
                  strokeWidth="4"
                ></path>
              </g>
              <circle cx="271" cy="619" r="3" fill="#087A45"></circle>
            </svg>
          </div>
          <div className="media-info">
            <div className="eyebrow">Cab cabin / passenger-facing screen</div>
            <h2>Inside cabs. Close to the journey.</h2>
            <p>
              Put your message on an in-cab screen, facing passengers during
              their ride.
            </p>
          </div>
        </article>
        <article className="media-card">
          <div className="art">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1000"
              height="680"
              viewBox="0 0 1000 680"
            >
              <title>Digital advertising screen inside a bus</title>
              <desc>
                Original concept illustration of a bus passenger cabin. Rows of
                seats face a digital display mounted above the front aisle. This
                is an interior screen, not an exterior advertisement.
              </desc>
              <defs>
                <linearGradient id="bus-cabin" x2="0" y2="1">
                  <stop stopColor="#D3D8BC"></stop>
                  <stop offset="1" stopColor="#91A280"></stop>
                </linearGradient>
                <linearGradient id="bus-seat" x2="1" y2="1">
                  <stop stopColor="#438866"></stop>
                  <stop offset="1" stopColor="#153D29"></stop>
                </linearGradient>
                <linearGradient id="bus-glass" x2="0" y2="1">
                  <stop stopColor="#C5D3B2"></stop>
                  <stop offset="1" stopColor="#7D9A72"></stop>
                </linearGradient>
              </defs>
              <rect width="1000" height="680" fill="url(#bus-cabin)"></rect>
              <path d="M0 0H1000L721 130H279Z" fill="#E8E8D1"></path>
              <path
                d="M0 0 279 130 205 680H0ZM1000 0 721 130 795 680H1000Z"
                fill="#586F52"
              ></path>
              <path
                d="M302 134H698L764 428H235Z"
                fill="url(#bus-glass)"
                stroke="#486647"
                strokeWidth="6"
              ></path>
              <g fill="#8AA27C" opacity=".65">
                <path d="M256 354V233H312V197H345V306H385V262H426V367ZM575 360V248H623V185H652V285H716V358Z"></path>
              </g>
              <path
                d="M443 354V297H455V280H466V297H481V314H519V297H534V280H545V297H557V354H527V339Q500 311 474 339V354Z"
                fill="#D7D9B6"
              ></path>
              <path d="M445 365H555L660 431H342Z" fill="#748766"></path>
              <path
                d="M500 375V388M500 405V422"
                stroke="#E3DDA5"
                strokeWidth="5"
              ></path>
              <path
                d="M0 61 238 158 206 338 0 337ZM0 376 200 355 175 511 0 558Z"
                fill="url(#bus-glass)"
                stroke="#314B34"
                strokeWidth="9"
              ></path>
              <path
                d="M1000 61 762 158 794 338 1000 337ZM1000 376 800 355 825 511 1000 558Z"
                fill="url(#bus-glass)"
                stroke="#314B34"
                strokeWidth="9"
              ></path>
              <path
                d="M64 113V335M143 144V335M939 113V335M859 144V335"
                stroke="#52714E"
                strokeWidth="5"
              ></path>
              <path
                d="M0 268H216M784 268H1000"
                stroke="#D5DFC0"
                strokeWidth="5"
                opacity=".7"
              ></path>
              <path d="M332 430H668L797 680H203Z" fill="#4C6348"></path>
              <path
                d="M461 435 421 680M539 435 579 680"
                stroke="#7B8F67"
                strokeWidth="3"
              ></path>
              <path
                d="M122 37 354 138M878 37 646 138"
                stroke="#FFFFFF"
                strokeWidth="10"
                opacity=".7"
              ></path>
              <path
                d="M193 119 128 680M807 119 872 680"
                stroke="#D5AE25"
                strokeWidth="9"
              ></path>
              <path
                d="M214 168H337M663 168H786"
                stroke="#D5AE25"
                strokeWidth="8"
              ></path>
              <path
                d="M326 166V197M674 166V197"
                stroke="#D5AE25"
                strokeWidth="7"
              ></path>
              <path
                d="M325 197Q302 219 325 226Q348 219 325 197ZM675 197Q652 219 675 226Q698 219 675 197Z"
                fill="none"
                stroke="#D5AE25"
                strokeWidth="6"
              ></path>
              <path
                d="M452 78V116M548 78V116"
                stroke="#465B3F"
                strokeWidth="9"
              ></path>
              <rect
                x="337"
                y="107"
                width="326"
                height="197"
                rx="17"
                fill="#0D2115"
                stroke="#82966F"
                strokeWidth="3"
              ></rect>
              <rect
                x="350"
                y="121"
                width="300"
                height="167"
                rx="8"
                fill="#FFD21C"
              ></rect>
              <g fontFamily="Arial,Helvetica,sans-serif" fill="#102619">
                <text
                  x="368"
                  y="151"
                  fontSize="11"
                  fontWeight="700"
                  letterSpacing="1.7"
                >
                  ALONG FOR THE JOURNEY.
                </text>
                <BrandText
                  x={367}
                  y={196}
                  fontSize={29}
                  maxWidth={265}
                  label={brand}
                />
                <text x="369" y="225" fontSize="13">
                  Seen inside. Remembered outside.
                </text>
                <text
                  x="368"
                  y="266"
                  fontSize="18"
                  fontWeight="700"
                  fill="#087A45"
                >
                  adrover.
                </text>
                <path
                  d="M592 254H629M617 242L629 254L617 266"
                  fill="none"
                  stroke="#087A45"
                  strokeWidth="4"
                ></path>
              </g>
              <g fill="url(#bus-seat)" stroke="#88A17B" strokeWidth="3">
                <rect x="243" y="365" width="151" height="148" rx="23"></rect>
                <rect x="607" y="365" width="151" height="148" rx="23"></rect>
                <rect x="163" y="458" width="214" height="206" rx="30"></rect>
                <rect x="624" y="458" width="214" height="206" rx="30"></rect>
                <rect x="49" y="570" width="289" height="203" rx="37"></rect>
                <rect x="663" y="570" width="289" height="203" rx="37"></rect>
              </g>
              <g stroke="#C3CCA7" strokeWidth="7" fill="none">
                <path d="M265 383H373M628 383H737M192 481H346M655 481H810M85 598H299M704 598H914"></path>
              </g>
              <path
                d="M399 509 384 680M602 509 616 680"
                stroke="#CCAB2D"
                strokeWidth="6"
              ></path>
            </svg>
          </div>
          <div className="media-info">
            <div className="eyebrow">Bus cabin / passenger-facing screen</div>
            <h2>Inside buses. Part of the commute.</h2>
            <p>
              Bring your message to passenger-facing screens within the bus
              cabin.
            </p>
          </div>
        </article>
      </div>
      <p className="caption">
        Original interior illustrations. Screen positioning is conceptual and
        subject to fleet approval. No exterior or rooftop advertising is shown.
      </p>
      <div className="value-strip">
        <span>Hyderabad-focused</span>
        <span>Two interior screen formats</span>
        <span>Flexible campaign planning</span>
      </div>
    </section>
  );
}
