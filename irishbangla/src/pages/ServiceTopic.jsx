import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaClock, FaGlobeEurope, FaShieldAlt } from "react-icons/fa";
import { getServiceTopic, serviceTopics } from "../data/serviceTopics";
import { usePreloadedImage } from "../hooks/usePreloadedImage";
import "../styles/ServicePages.css";

import imgCliffs from "../assets/hero/cliffs.jpg";
import imgDublin from "../assets/hero/dublin.jpg";
import imgWild from "../assets/hero/wild.jpg";
import imgWild2 from "../assets/hero/wild2.jpg";
import imgHidden from "../assets/hero/hidden.jpg";
import imgAncient from "../assets/hero/ancient.jpg";
import imgOther from "../assets/hero/other.jpg";
import imgNorthern from "../assets/hero/northern.jpg";
import imgSummer from "../assets/hero/summer.jpg";
import imgMood1 from "../assets/hero/mood1.jpg";
import imgMood2 from "../assets/hero/mood2.jpg";
import imgMood3 from "../assets/hero/mood3.jpg";
import imgRainy from "../assets/hero/rainy.jpg";
import imgBelfast from "../assets/hero/belfest.jpg";

const SERVICE_GALLERY = {
  "visa-consultancy": [imgCliffs, imgWild, imgNorthern, imgSummer],
  "cross-border-visa-processing": [imgWild2, imgNorthern, imgHidden, imgBelfast],
  "visa-application-support": [imgDublin, imgRainy, imgMood2, imgOther],
  "e-visa-processing": [imgHidden, imgSummer, imgMood1, imgWild],
  "express-consultation": [imgAncient, imgCliffs, imgWild2, imgMood1],
  "document-legalization": [imgAncient, imgNorthern, imgMood3, imgSummer],
};

/** Six distinct hues — no repeated greens/oranges between services */
const SERVICE_THEME = {
  "visa-consultancy": { accent: "#10b981", hue: "#0a5c4d", label: "Consultancy" },
  "cross-border-visa-processing": { accent: "#3b82f6", hue: "#1e3a8a", label: "Cross-border" },
  "visa-application-support": { accent: "#0891b2", hue: "#164e63", label: "Full support" },
  "e-visa-processing": { accent: "#8b5cf6", hue: "#5b21b6", label: "Digital" },
  "express-consultation": { accent: "#eab308", hue: "#713f12", label: "Express", lightBtn: true },
  "document-legalization": { accent: "#e11d48", hue: "#881337", label: "Legalisation" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ServiceTable({ table }) {
  return (
    <div className="svc-table-wrap" role="region" aria-label={table?.caption || "Table"}>
      {table.caption && <p className="svc-table-caption">{table.caption}</p>}
      <table className="svc-table">
        <thead>
          <tr>
            {table.columns.map((c) => (
              <th scope="col" key={c}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProcessTimeline({ steps }) {
  return (
    <ol className="svc-process">
      {steps.map((step, i) => (
        <li key={i}>
          <span className="svc-process-marker" aria-hidden="true">
            {i + 1}
          </span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  );
}

function SectionContent({ section }) {
  return (
    <>
      {section.paragraphs?.map((p, i) => (
        <p className="svc-p" key={i}>
          {p}
        </p>
      ))}

      {section.bullets && (
        <ul className="svc-checklist">
          {section.bullets.map((b, idx) => (
            <li key={idx}>
              <FaCheck aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {section.numbered && <ProcessTimeline steps={section.numbered} />}

      {section.table && <ServiceTable table={section.table} />}

      {section.callout && (
        <div className="svc-callout" role="note">
          <strong>{section.callout.title}</strong>
          <p>{section.callout.text}</p>
        </div>
      )}

      {section.note && <p className="svc-note">{section.note}</p>}
    </>
  );
}

function ServiceRail({ activeSlug }) {
  return (
    <nav className="svc-rail" aria-label="Browse services">
      <div className="svc-rail-track">
        {serviceTopics.map((t) => {
          const Icon = t.icon;
          const active = t.slug === activeSlug;
          const theme = SERVICE_THEME[t.slug] ?? SERVICE_THEME["visa-consultancy"];
          return (
            <Link
              key={t.slug}
              to={`/services/${t.slug}`}
              className={`svc-rail-card${active ? " is-active" : ""}`}
              style={
                active
                  ? { "--card-accent": theme.accent, "--card-hue": theme.hue }
                  : undefined
              }
            >
              <span className="svc-rail-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="svc-rail-title">{t.title}</span>
              <span className="svc-rail-desc">{t.menuDescription}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default function ServiceTopic() {
  const { service } = useParams();

  const current = useMemo(() => getServiceTopic(service), [service]);
  const heroReady = usePreloadedImage(current?.heroImage);
  const theme = SERVICE_THEME[service] ?? SERVICE_THEME["visa-consultancy"];
  const gallery = SERVICE_GALLERY[service] ?? SERVICE_GALLERY["visa-consultancy"];

  if (!current) {
    return (
      <main className="svc-page">
        <div className="svc-page-bg" aria-hidden="true" />
        <div className="svc-wrap svc-notfound">
          <p className="svc-eyebrow">Services</p>
          <h1>Service not found</h1>
          <p className="svc-lead">Pick a service below to continue.</p>
          <ServiceRail activeSlug={service} />
        </div>
      </main>
    );
  }

  const Icon = current.icon;
  const overview = current.sections[0];
  const benefits = overview?.bullets?.slice(0, 4) ?? [];
  const related = serviceTopics.filter((t) => t.slug !== current.slug).slice(0, 3);

  return (
    <main
      className={`svc-page${theme.lightBtn ? " svc-page--light-accent" : ""}`}
      style={{ "--svc-accent": theme.accent, "--svc-hue": theme.hue }}
    >
      <div className="svc-page-bg" aria-hidden="true" />

      <div className="svc-top">
      {/* ── Split cinematic hero ── */}
      <header className="svc-hero">
        <div className="svc-hero-visual">
          {!heroReady && <div className="svc-hero-img-placeholder" aria-hidden="true" />}
          <img
            src={current.heroImage}
            alt=""
            className={`svc-hero-img${heroReady ? " is-ready" : ""}`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="svc-hero-visual-scrim" aria-hidden="true" />
          <span className="svc-hero-badge">{theme.label}</span>
        </div>

        <div className="svc-hero-panel">
          <div className="svc-hero-panel-inner">
            <p className="svc-eyebrow">Emerald Visa &amp; Tours</p>
            <div className="svc-hero-icon-row">
              <span className="svc-hero-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="svc-hero-tag">{current.menuDescription}</span>
            </div>
            <h1>{current.title}</h1>
            <p className="svc-hero-lead">{current.lead}</p>

            <div className="svc-hero-stats">
              <div className="svc-stat">
                <FaShieldAlt aria-hidden />
                <span>
                  <strong>Expert-led</strong>
                  Embassy-aligned strategy
                </span>
              </div>
              <div className="svc-stat">
                <FaGlobeEurope aria-hidden />
                <span>
                  <strong>Global</strong>
                  Clients worldwide
                </span>
              </div>
              <div className="svc-stat">
                <FaClock aria-hidden />
                <span>
                  <strong>{current.sections.length} guides</strong>
                  On this page
                </span>
              </div>
            </div>

            <div className="svc-hero-actions">
              <Link to="/book-trip" className="svc-btn svc-btn--primary">
                Book consultation
                <FaArrowRight aria-hidden />
              </Link>
              <a href="#svc-sections" className="svc-btn svc-btn--outline">
                Explore details
              </a>
            </div>
          </div>
        </div>
      </header>

        <div className="svc-rail-wrap">
          <ServiceRail activeSlug={current.slug} />
        </div>
      </div>

      {/* ── Benefit cards ── */}
      {benefits.length > 0 && (
        <section className="svc-benefits" aria-label="Key benefits">
          <div className="svc-wrap">
            <div className="svc-benefits-grid">
              {benefits.map((item, i) => {
                const [title, ...rest] = item.split(" — ");
                return (
                  <Motion.article
                    key={item}
                    className="svc-benefit-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                  >
                    <span className="svc-benefit-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    {rest.length > 0 && <p>{rest.join(" — ")}</p>}
                  </Motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Sticky section nav ── */}
      {current.toc?.length > 0 && (
        <div className="svc-sticky-nav">
          <div className="svc-sticky-nav-inner">
            <span className="svc-sticky-label">Jump to</span>
            <nav aria-label="Page sections">
              {current.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ── Magazine sections ── */}
      <div className="svc-sections" id="svc-sections">
        <div className="svc-wrap svc-sections-inner">
          {current.sections.map((sec, idx) => {
            const flip = idx % 2 === 1;
            const image = gallery[idx % gallery.length];

            return (
              <Motion.article
                key={sec.id}
                id={sec.id}
                className={`svc-section-block${flip ? " svc-section-block--flip" : ""}`}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={fadeUp}
              >
                <div className="svc-section-copy">
                  <span className="svc-section-index">{String(idx + 1).padStart(2, "0")}</span>
                  <h2>{sec.heading}</h2>
                  <SectionContent section={sec} />
                </div>

                <figure className="svc-section-media">
                  <img src={image} alt="" loading="lazy" decoding="async" />
                  <figcaption className="svc-section-media-cap">
                    {current.toc?.[idx]?.label ?? sec.heading}
                  </figcaption>
                </figure>
              </Motion.article>
            );
          })}
        </div>
      </div>

      {/* ── Related services ── */}
      <section className="svc-related" aria-labelledby="svc-related-title">
        <div className="svc-wrap">
          <div className="svc-related-head">
            <p className="svc-eyebrow svc-eyebrow--dark">More services</p>
            <h2 id="svc-related-title">You might also need</h2>
          </div>
          <div className="svc-related-grid">
            {related.map((t) => {
              const RelIcon = t.icon;
              const relTheme = SERVICE_THEME[t.slug] ?? SERVICE_THEME["visa-consultancy"];
              return (
                <Link
                  key={t.slug}
                  to={`/services/${t.slug}`}
                  className="svc-related-card"
                  style={{ "--card-accent": relTheme.accent, "--card-hue": relTheme.hue }}
                >
                  <div className="svc-related-img">
                    <img src={t.heroImage} alt="" loading="lazy" />
                    <span className="svc-related-icon" aria-hidden="true">
                      <RelIcon />
                    </span>
                  </div>
                  <div className="svc-related-body">
                    <h3>{t.title}</h3>
                    <p>{t.menuDescription}</p>
                    <span className="svc-related-link">
                      View service <FaArrowRight aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="svc-cta-band">
        <div className="svc-cta-band-bg" aria-hidden="true" />
        <div className="svc-wrap svc-cta-band-inner">
          <div>
            <p className="svc-cta-kicker">Start your application</p>
            <h2>Ready for {current.title.toLowerCase()}?</h2>
            <p>Tell us your destination and timeline — we&apos;ll respond with a clear plan.</p>
          </div>
          <Link to="/book-trip" className="svc-btn svc-btn--light">
            Book consultation
            <FaArrowRight aria-hidden />
          </Link>
        </div>
      </section>

      <div className="svc-wrap">
        <section className="svc-disclaimer" role="note" aria-label="Disclaimer">
          <span className="svc-disclaimer-icon" aria-hidden="true">
            ⚠
          </span>
          <div>
            <strong>Disclaimer</strong>
            <p>
              Visa requirements, fees, and processing times change without notice. Always confirm
              current rules with official embassy sources before applying.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
