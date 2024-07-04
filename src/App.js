import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import AboutPage from "./pages/about/aboutpage.component";
import ServicesPage from "./pages/services-page/services-page.component";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}

export default App;
