import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🍀 <span>Emerald Visa & Tours</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Ireland Tours</li>
        <li>Visa Services</li>
        <li>Contact</li>
      </ul>

      <button className="quote-btn">Request Consultation</button>
    </nav>
  );
}
