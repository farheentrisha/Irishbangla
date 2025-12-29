import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThinkingTrip from "./components/thinkingtrip";
import Inspiration from "./components/Inspiration";
import VisaSearchCard from "./components/VisaSearchCard";
import VisaDetails from "./pages/VisaDetails";

function Home() {
  return (
    <>
      <Hero />
      <VisaSearchCard />
      <ThinkingTrip />
      <Inspiration />
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
      </Routes>
    </Router>
  );
}

export default App;
