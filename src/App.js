import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioDetail from "./components/portfolio/PortfolioDetail";

function App() {
  return (
    <Router>
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<>
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Portfolio />
            <Contact />
          </>} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </main>

      <Footer />
      <ScrollUp />
    </Router>
  );
}

export default App;
