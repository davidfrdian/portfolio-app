import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const menuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (section) => {
    setActiveNav(`#${section}`);
    showMenu(false); // Close menu after clicking a link
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        showMenu(false);
      }
    };

    if (Toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [Toggle]);

  return (
    <header className="header">
      <nav className="nav container">
        <span className="nav__logo" onClick={() => handleNavClick("home")}>David</span>

        <div ref={menuRef} className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <span className="nav__close" onClick={() => showMenu(false)}>
            <i className="uil uil-times"></i> {/* Close button icon */}
          </span>

          <ul className="nav__list grid">
            {["home", "about", "skills", "qualification", "portfolio", "contact"].map((section) => (
              <li className="nav__item" key={section}>
                <span
                  className={activeNav === `#${section}` ? "nav__link active-link" : "nav__link"}
                  onClick={() => handleNavClick(section)}
                >
                  <i className={`uil uil-${section === "home" ? "estate" : section === "about" ? "user" : section === "skills" ? "file-alt" : section === "qualification" ? "game-structure" : section === "portfolio" ? "scenery" : "message"} nav__icon`}></i>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
