import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const navItems = ["home", "about", "project", "skill", "contact"];

  // Scroll active link logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let id of navItems) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveLink(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    if (!isCollapsed) setIsCollapsed(true);
  };

  return (
    <>
      {/* Logo */}
      <div className="container-fluid bg-light position-fixed top-0 start-0 z-3">
        <img
          src="../images/5366254478988e5dbbeb73dfead43985.jpg"
          className="img-size m-3 rounded-circle"
          alt="Logo"
        />
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-sm position-fixed top-0 bg-nav rounded-5 z-3 w-75 me-to-left ">
        <div className="container-fluid justify-content-end">
          {/* Hamburger button */}
          <button
            className="navbar-toggler me-3"
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div
            className={`collapse navbar-collapse p-2 ${
              isCollapsed ? "" : "show"
            }`}
            id="mainNavbar"
          >
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center w-100">
              {navItems.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`nav-link a-nav px-3 ${
                    activeLink === id ? "active" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
