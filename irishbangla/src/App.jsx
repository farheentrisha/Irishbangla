import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThinkingTrip from "./components/thinkingtrip";
import Inspiration from "./components/Inspiration";
import VisaSearchCard from "./components/VisaSearchCard";
import VisaDetails from "./pages/VisaDetails";
import Services from "./components/Service";
import TrackerPage from "./pages/TrackerPage";
import ContactSection from "./components/contact";
import AboutUs from "./components/aboutus";

function Home() {
  return (
    <>
      <Hero />
      <VisaSearchCard />
      <ThinkingTrip />
      <Services />
      <Inspiration />
      <AboutUs />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa-details" element={<VisaDetails />} />

        {/* ✅ ADD THIS */}
        <Route path="/track/:trackingId" element={<TrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
