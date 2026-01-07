import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < lastScrollY);
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

        {/* Menu */}
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>

          <li className="nav-item">Company</li>
          <li className="nav-item">Information</li>

          {/* SERVICES DROPDOWN */}
          <li
            className="nav-item services"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾

            {servicesOpen && (
              <div className="mega-menu">
                <div className="mega-item">Visa Consultancy</div>
                <div className="mega-item">Cross-Border Visa Processing</div>
                <div className="mega-item">Visa Processing in Bangladesh</div>
                <div className="mega-item">E-Visa Processing</div>
                <div className="mega-item">Express Consultation</div>
                <div className="mega-item">Document Legalization</div>
              </div>
            )}
          </li>

          {/* TRACKING INPUT */}
          <li className="tracking-box">
            <input
              type="text"
              placeholder="Tracking ID"
            />
            <button> <FaSearch /></button>
          </li>

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
