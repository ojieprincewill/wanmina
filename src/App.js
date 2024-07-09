import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import AboutPage from "./pages/about/aboutpage.component";
import ServicesPage from "./pages/services-page/services-page.component";
import TeamPage from "./pages/team-page/team-page.component";
import QuestionsPage from "./pages/faq-page/faq-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
