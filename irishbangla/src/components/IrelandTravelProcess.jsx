import "../styles/irelandTravel.css";

export default function IrelandTravelProcess() {
  return (
    <main className="ireland-visa-page">

      {/* HERO */}
      <section className="visa-hero">
        <h1>Ireland Visa from Bangladesh</h1>
        <p>
          Complete Visa Processing Support with Personalized Guidance
        </p>
      </section>

      {/* INTRO */}
      <section className="visa-section">
        <h2>
          <span>Ireland Visa</span> | We Process Ireland Visa from Bangladesh
        </h2>

        <p>
          It is not easy to get an Ireland visa from Bangladesh due to the remote
          location of its embassy. Currently, all Bangladeshi nationals must
          process their visa applications through the Embassy of Ireland in
          New Delhi.
        </p>

        <p className="highlight-box">
          Our team offers an end-to-end solution to make the process easy.
          Simply submit your passport and documents at our Dhaka office —
          we forward them to the Embassy of Ireland, New Delhi, and manage the
          process on your behalf.
        </p>
      </section>

      {/* PROCESS */}
      <section className="visa-section soft-bg">
        <h2>Process of Ireland Visa Application</h2>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Online Application</h3>
            <p>
              All Bangladeshi applicants must complete the official Irish
              Online Visa Application Form through INIS.
            </p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Summary & Documents</h3>
            <p>
              After submission, a summary application sheet is generated.
              This must be submitted along with your passport and supporting
              documents.
            </p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Embassy Processing</h3>
            <p>
              We forward your documents securely to the Embassy of Ireland in
              New Delhi and continuously track the application.
            </p>
          </div>
        </div>
      </section>

      {/* VISA CATEGORIES */}
      <section className="visa-section">
        <h2>Visa Categories of Ireland</h2>

        <div className="category-grid">
          <div className="category-card">
            <h3>Short Stay Visa (Less than 90 Days)</h3>
            <p>
              Business, Conference, Tourist, Visit Family/Friends, Transit,
              Exam, Internship, Join Ship, Medical Treatment, Training,
              Tournament and more.
            </p>
          </div>

          <div className="category-card">
            <h3>Long Stay Visa (More than 90 Days)</h3>
            <p>
              Employment Visa, Scientific Researcher Visa, Join Family Visa
              and related categories.
            </p>
          </div>

          <div className="category-card highlight-card">
            <h3>Student Visa</h3>
            <p>
              We provide comprehensive admission and visa support for Irish
              student visas from Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="visa-section soft-bg">
        <h2>Common Supporting Documents</h2>

        <ul className="doc-list">
          <li>Original passport with all previous passports</li>
          <li>Online visa application summary page</li>
          <li>Two recent passport-size photographs (35mm × 45mm)</li>
          <li>Cover letter explaining purpose, duration and expenses</li>
          <li>Invitation letter (if applicable)</li>
          <li>NOC / Forwarding letter from employer</li>
          <li>Trade license or business registration documents</li>
          <li>Flight itinerary and accommodation proof</li>
          <li>Medical & travel insurance</li>
          <li>Bank statements for last 6 months</li>
        </ul>

        <p className="note">
          ⚠️ All documents must be in English or translated and notarized.
        </p>
      </section>

      {/* FINANCIAL */}
      <section className="visa-section">
        <h2>Employment & Financial Documents</h2>

        <div className="info-box">
          <p>
            Salary statements or pay slips for the last 6 months, duly signed
            by the employer, are required.
          </p>
          <p>
            Income Tax Return or Tax Certificate (English or notarized
            translation) is strongly recommended.
          </p>
          <p>
            Marriage certificate and children’s birth certificates may be
            provided where applicable.
          </p>
        </div>
      </section>

      {/* FEES & TIME */}
      <section className="visa-section soft-bg">
        <h2>Fees & Processing Time</h2>

        <p>
          Visa fees vary depending on visa category and level of assistance.
          Please contact our team for exact fees and charges.
        </p>

        <div className="timeline-grid">
          <div>Visit Visa: ~20 working days</div>
          <div>Study Visa: ~6 weeks</div>
          <div>Business Visa: 3–7 working days</div>
          <div>Critical Skills Employment: ~10 working days</div>
        </div>
      </section>

      {/* REFUSAL */}
      <section className="visa-cta">
        <h2>Irish Visa Refused?</h2>
        <p>
          Don’t worry. We assist with refusal analysis and appeal preparation
          for Irish visas.
        </p>
        <button className="primary-btn">Talk to a Visa Expert</button>
      </section>

    </main>
  );
}
