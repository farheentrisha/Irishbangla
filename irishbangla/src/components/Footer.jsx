import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:info@irishbangla.com">info@irishbangla.com</a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801788-687091">(+880) 1788-687091</a>
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Location 1 */}
        <div className="footer-col">
          <h4>Irish Bangla – Dhaka</h4>
          <p>
            3rd Floor, Road: 11, House: 76/A <br />
            Banani, Dhaka
          </p>
          <a className="location-link" href="#">
            <FaMapMarkerAlt /> View Location
          </a>
        </div>

        {/* Location 2 */}
        <div className="footer-col">
          <h4>Irish Bangla – Dublin</h4>
          <p>
            North Wall Quay, <br />
            Dublin 1, Ireland
          </p>
          <a className="location-link" href="#">
            <FaMapMarkerAlt /> View Location
          </a>
        </div>

        {/* Payments */}
        <div className="footer-col">
          <h4>We Accept</h4>
          <div className="payment-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/BKash_Logo.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Nagad_Logo.png" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Irish Bangla. All Rights Reserved.
      </div>
    </footer>
  );
}
