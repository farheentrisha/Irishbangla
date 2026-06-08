import { useEffect } from "react";
import BookingForm from "../components/booktrip/BookingForm";
import ContactCard from "../components/booktrip/ContactCard";
import "../styles/BookTrip.css";

const GLOBE_TEXTURE = "/globe-earth.jpg";

export default function BookTrip() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = GLOBE_TEXTURE;
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  return (
    <div className="booktrip-page">
      <div className="booktrip-page__bg" aria-hidden="true" />

      <header className="booktrip-hero">
        <h1 className="booktrip-hero__title">Book Your Global Journey</h1>
        <p className="booktrip-hero__lead">
          Plan your international journey with confidence. Our global team will contact you
          shortly.
        </p>
      </header>

      <div className="booktrip-shell">
        <ContactCard />
        <BookingForm />
      </div>
    </div>
  );
}
