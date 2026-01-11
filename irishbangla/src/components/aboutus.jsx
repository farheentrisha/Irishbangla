// AboutUs.jsx
import '../styles/AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-bg-blob blob-1" />
      <div className="about-bg-blob blob-2" />

      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <span className="about-badge">About Irish Bangla</span>
          <h2>
            Travel Without Borders,
            <span> Experience Without Limits</span>
          </h2>
          <p>
            Connecting Bangladesh and the world with trusted, affordable and unforgettable travel experiences.
          </p>
        </div>

        {/* Content */}
        <div className="about-grid">
          <div className="about-card about-story">
            <h3>Who We Are</h3>
            <p>
              <strong>Irish Bangla Tours & Travels</strong> is a leading travel brand headquartered in Dhaka with an international office in Dublin. We offer complete inbound and outbound travel solutions including air ticketing, visa processing, hotel bookings, curated tour packages and Umrah services.
            </p>
            <p>
              Through strong domestic and global partnerships, we ensure seamless support for our travelers at every step — at home and abroad.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <h4>Global Presence</h4>
              <p>Operations in Bangladesh and Ireland serving international travelers.</p>
            </div>
            <div className="feature-card">
              <h4>All‑in‑One Service</h4>
              <p>Flights, hotels, visas, tours and Umrah under one roof.</p>
            </div>
            <div className="feature-card">
              <h4>Trusted Network</h4>
              <p>Strong domestic and international travel partners.</p>
            </div>
            <div className="feature-card">
              <h4>Value Focused</h4>
              <p>Premium experiences at transparent and reasonable pricing.</p>
            </div>
          </div>
        </div>


        {/* Vision & Mission */}
        <div className="about-vm">
          <div className="vm-card">
            <h3>Our Vision</h3>
            <p>
              To become a trusted global travel leader through quality, commitment and diversified services.
            </p>
          </div>
          <div className="vm-card">
            <h3>Our Mission</h3>
            <p>
              To deliver honest, customer‑centric travel solutions by understanding each traveler’s needs and providing the best service at a reasonable price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

