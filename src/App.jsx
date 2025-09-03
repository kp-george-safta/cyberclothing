import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import Checkout from "./pages/checkout";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Download from "./pages/download";
import TrademarkP from "./pages/trademark.jsx";
import PPage from "./pages/ProductPage.jsx";
import { useState, useEffect } from "react";



function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "active"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.removeItem("darkmode");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main id="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
          <Route path="/trademark" element={<TrademarkP />} />
          <Route path="/:id/productpage" element={<PPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
