import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useRef } from "react";

import Hero from "./components/Hero";
import VisaSearchCard from "./components/VisaSearchCard";
import { ScrollReveal } from "./components/ScrollReveal";
import Layout from "./components/Layout";
import PageLoader from "./components/PageLoader";
import BookTrip from "./pages/BookTrip";
import VisaDetails from "./pages/VisaDetails";
import InformationTopic from "./pages/InformationTopic";
import ServiceTopic from "./pages/ServiceTopic";
import TrackerPage from "./pages/TrackerPage";
import IrelandTravelProcess from "./components/IrelandTravelProcess";
import SustainableIreland from "./pages/SustainableIreland";
import IrelandWeather from "./pages/irelandweather";
import IrelandTourismGuide from "./pages/IrelandTourismGuide";
import NotFound from "./pages/NotFound";
import { ADMIN_CONSOLE_PATH } from "./constants/adminRoute";

const ThinkingTrip = lazy(() => import("./components/thinkingtrip"));
const Inspiration = lazy(() => import("./components/Inspiration"));
const IrelandStays = lazy(() => import("./components/IrelandStays"));
const Services = lazy(() => import("./components/Service"));
const ContactSection = lazy(() => import("./components/contact"));
const AboutUs = lazy(() => import("./components/aboutus"));
const TourismIrelandHomeSection = lazy(() => import("./components/TourismIrelandHomeSection"));

const AdminRouteShell = lazy(() => import("./components/AdminRouteShell"));
const AdminTrackerConsole = lazy(() => import("./pages/AdminTrackerConsole"));

function PageSuspense({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

function SectionSuspense({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

function Home() {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollReveal as="div" className="home-hero-stack" y={18} amount={0.08}>
        <Hero onConsultClick={scrollToContact} onServiceClick={scrollToServices} />
        <VisaSearchCard />
      </ScrollReveal>

      <ScrollReveal y={24}>
        <SectionSuspense>
          <ThinkingTrip />
        </SectionSuspense>
      </ScrollReveal>
      <ScrollReveal y={24} delay={0.03}>
        <SectionSuspense>
          <AboutUs onEnquiryClick={scrollToContact} />
        </SectionSuspense>
      </ScrollReveal>

      <ScrollReveal ref={servicesRef} y={24} delay={0.04}>
        <SectionSuspense>
          <Services onEnquiryClick={scrollToContact} />
        </SectionSuspense>
      </ScrollReveal>

      <ScrollReveal y={26} delay={0.02}>
        <SectionSuspense>
          <Inspiration />
        </SectionSuspense>
      </ScrollReveal>
      <ScrollReveal y={26} delay={0.04}>
        <SectionSuspense>
          <IrelandStays />
        </SectionSuspense>
      </ScrollReveal>
      <ScrollReveal y={26} delay={0.05}>
        <SectionSuspense>
          <TourismIrelandHomeSection />
        </SectionSuspense>
      </ScrollReveal>

      <ScrollReveal ref={contactRef} y={22} delay={0.02}>
        <SectionSuspense>
          <ContactSection />
        </SectionSuspense>
      </ScrollReveal>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ADMIN_CONSOLE_PATH} element={<PageSuspense><AdminRouteShell /></PageSuspense>}>
          <Route index element={<AdminTrackerConsole />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/book-trip" element={<BookTrip />} />
          <Route path="/visa-details" element={<VisaDetails />} />
          <Route path="/information" element={<Navigate to="/information/moving-to-ireland" replace />} />
          <Route path="/information/:topic" element={<InformationTopic />} />
          <Route path="/track/:trackingId" element={<TrackerPage />} />
          <Route path="/ireland-travel-process" element={<IrelandTravelProcess />} />
          <Route path="/ireland-weather" element={<IrelandWeather />} />
          <Route path="/sustainable-ireland" element={<SustainableIreland />} />
          <Route path="/tourism-ireland/guide" element={<IrelandTourismGuide />} />
          <Route path="/services" element={<Navigate to="/services/visa-consultancy" replace />} />
          <Route
            path="/services/visa-processing-bangladesh"
            element={<Navigate to="/services/visa-application-support" replace />}
          />
          <Route path="/services/:service" element={<ServiceTopic />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
