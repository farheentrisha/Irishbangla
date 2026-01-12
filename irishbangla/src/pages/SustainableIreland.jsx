import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/sustainableIreland.css";

import imgLocal from "../assets/hero/cliffs.jpg";
import imgTravel from "../assets/hero/belfest.jpg";
import imgNature1 from "../assets/hero/other.jpg";
import imgNature2 from "../assets/hero/cliffs.jpg";
import imgNature3 from "../assets/hero/belfest.jpg";

export default function SustainableIreland() {
  return (
    <>
      <Navbar />

      {/* SECTION 1 */}
      <section className="editorial-section">
        <div className="editorial-grid">
          <div className="editorial-text">
            <h2>Live like a local</h2>

            <p className="dropcap">
              One of the best things you can do to stay sustainable is also one
              of the simplest: eat local. Ireland is famed for its exceptional
              food and drink culture, rooted deeply in community and tradition.
            </p>

            <p>
              Support local cafés, family-run restaurants and farmers’ markets.
              Not only does this reduce food miles, it gives you an authentic
              taste of Irish life. A locally guided food tour is a great way to
              combine sightseeing with sustainability.
            </p>

            <p>
              Choosing local guides also helps preserve culture, heritage and
              livelihoods — while giving you insights no guidebook can match.
            </p>
          </div>

          <div className="editorial-image">
            <img src={imgLocal} alt="Local life in Ireland" />
          </div>
        </div>
      </section>

      {/* SECTION 2 (REVERSED) */}
      <section className="editorial-section alt">
        <div className="editorial-grid reverse">
          <div className="editorial-image">
            <img src={imgTravel} alt="Sustainable travel Ireland" />
          </div>

          <div className="editorial-text">
            <h2>Travel mindfully</h2>

            <p className="dropcap">
              Getting around Ireland sustainably is easier than ever. The
              country offers reliable public transport, scenic train journeys
              and cycle-friendly cities.
            </p>

            <p>
              Opt for trains and buses instead of cars where possible. If you do
              drive, consider car-sharing or electric vehicles to reduce your
              carbon footprint.
            </p>

            <p>
              Walking routes, greenways and coastal paths allow you to explore
              Ireland slowly — and experience its landscapes more deeply.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – COLLAGE */}
      <section className="editorial-section">
        <div className="editorial-grid">
          <div className="editorial-text">
            <h2>Protect what you love</h2>

            <p className="dropcap">
              Ireland’s natural beauty is its greatest treasure — from rugged
              coastlines to rolling green hills. Protecting it is everyone’s
              responsibility.
            </p>

            <p>
              Follow the principles of Leave No Trace: take your rubbish with
              you, respect wildlife, and stay on marked paths.
            </p>

            <p>
              Reduce, reuse and recycle wherever possible, and be mindful of
              water and energy usage — even during short stays.
            </p>
          </div>

          <div className="image-collage">
            <img src={imgNature1} />
            <img src={imgNature2} />
            <img src={imgNature3} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
