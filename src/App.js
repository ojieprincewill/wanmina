import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import AboutPage from "./pages/about/aboutpage.component";
import ServicesPage from "./pages/services-page/services-page.component";
import ActivitiesPage from "./pages/activities-page/activities-page.component";
import QuestionsPage from "./pages/faq-page/faq-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import ServiceDetailsPage from "./pages/service-details-page/services-details-page.component";
// import Gradient from "./components/gradient-background/gradient.component";

function App() {
  return (
    <>
      {/* <Gradient /> */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
