import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`navbar ${show ? "show" : "hide"}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          🍀 <span>Emerald Visa & Tours</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <li>Company</li>
          <li>Information</li>
          <li>Services</li>
          <li>Tracking ID</li>
          <li className="nav-cta">Book Trip</li>
        </ul>

        {/* Burger */}
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
