import React from "react";
import "../styles/Service.css";
import {
  FaPlane,
  FaPassport,
  FaGlobeEurope,
  FaHotel,
  FaSuitcaseRolling,
} from "react-icons/fa";

const Services = () => {
  const cards = [
    {
      icon: <FaPlane />,
      title: "Tours & Travel Packages",
      text: "Customized domestic and international tour packages including flights, accommodation, and guided travel experiences.",
      color: "#5EBD00",
    },
    {
      icon: <FaPassport />,
      title: "Visa Processing Services",
      text: "Professional visa assistance for tourist, business, and visit visas with accurate documentation and application support.",
      color: "#FEAC1E",
    },
    {
      icon: <FaGlobeEurope />,
      title: "Ireland & Europe Travel",
      text: "Specialized travel services for Ireland and European destinations, ensuring smooth planning and hassle-free journeys.",
      color: "#00875A",
    },
    {
      icon: <FaHotel />,
      title: "Hotel & Accommodation",
      text: "Affordable hotel bookings and accommodation arrangements tailored to your comfort and travel needs.",
      color: "#5EBD00",
    },
    {
      icon: <FaSuitcaseRolling />,
      title: "Travel Consultancy",
      text: "End-to-end travel consultation including itinerary planning, travel insurance guidance, and pre-departure support.",
      color: "#FEAC1E",
    },
  ];

  return (
    <section className="services-section" id="services">

      <div className="services-left">
        <h2>Our Services</h2>
        <p>
          Irish Bangla delivers reliable travel, tour, and visa solutions with a
          focus on comfort, trust, and seamless experiences worldwide.
        </p>
        <button>Send Your Enquiry</button>
      </div>

      <div className="services-grid">
        {cards.map((card, index) => (
          <div className="service-card" key={index}>
            <div
              className="icon"
              style={{
                backgroundColor: card.color + "20",
                color: card.color,
              }}
            >
              {card.icon}
            </div>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
