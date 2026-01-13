import "../styles/contact.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { useState, forwardRef } from "react";

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "8801973180723";

    const text = `
📌 *New Consultation Booking*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Appointment Date: ${formData.date}

📝 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-wrapper" ref={ref}>
      <div className="contact-container">
        {/* LEFT PANEL */}
        <div className="contact-left">
          <p className="contact-tag">Contact Us</p>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-desc">
            Reach us anytime for guidance on universities, visas, applications,
            scholarships, and more. Our advisors respond within 24 hours.
          </p>

          <div className="contact-info">
            <p>📍 House 76/A, Road 11, Banani, Dhaka 1213</p>
            <p>📞 +880 1725-982743</p>
            <p>📧 info@irishbangla.com</p>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/FineanswerStudyAbroad" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/company/fineanswerstudyabroad/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/fineanswer_study_abroad/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@FineAnswerStudyAbroad/videos" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-card">
          <h3 className="form-title">Book a Free Consultation</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Appointment Date</label>
              <input type="date" name="date" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="4" name="message" onChange={handleChange} />
            </div>

            <button type="submit" className="send-btn">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
