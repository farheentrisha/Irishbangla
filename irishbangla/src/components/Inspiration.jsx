import "../styles/Inspiration.css";
import img1 from "../assets/hero/belfest.jpg";

export default function Inspiration() {
  return (
    <>
     {/* INSPIRATION SECTION */}
      <section className="inspiration">
        <h2>Looking for inspiration?</h2>
        <p>
          Ireland is a city break, adventure holiday and detoxing retreat all
          wrapped up in an epic road trip. Just mix and match for your perfect
          holiday.
        </p>

        <div className="tabs">
          <button className="tab">Wild Atlantic Way</button>
          <button className="tab active">Northern Ireland</button>
          <button className="tab">Dublin</button>
          <button className="tab">Ireland's Ancient East</button>
          <button className="tab">Belfast</button>
          <button className="tab">Ireland's Hidden Heartlands</button>
        </div>
      </section>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <img
            src={img1}
            alt="Northern Ireland"
            className="hero-logo"
          />

          <p className="hero-text">
            Amazing cliff-walks, Game of Thrones® adventures, Titanic
            attractions – let Northern Ireland stir your soul.
          </p>

          <button className="hero-btn">
            Embrace a Giant Spirit →
          </button>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={img1}
            alt="Giant’s Causeway"
            className="hero-image"
          />
        </div>
      </section>

     
    </>
  );
}
