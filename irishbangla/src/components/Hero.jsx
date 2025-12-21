import { useState, useEffect } from "react";
import "../styles/Hero.css";

import cliffs from "../assets/hero/cliffs.jpg";
import titanic from "../assets/hero/belfest.jpg";
import dublin from "../assets/hero/other.jpg";

const slides = [
  {
    image: cliffs,
    title: "Explore Ireland",
    subtitle: "Your trusted partner for Ireland",
    desc: "Discover the Cliffs of Moher...",
  },
  {
    image: titanic,
    title: "Visit Titanic Belfast",
    subtitle: "History meets innovation",
    desc: "Experience Ireland’s heritage...",
  },
  {
    image: dublin,
    title: "Study, Work & Travel",
    subtitle: "Your Irish journey starts here",
    desc: "Tour packages, study & work visa guidance...",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay" />

          <div className="hero-content">
            <p className="subtitle">{slide.subtitle}</p>
            <h1>{slide.title}</h1>
            <p className="desc">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* DOT CONTROLS */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}