import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = -450; // Adjust to your navbar height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">Family Sunflower Dental</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleClick(e, 'about')}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={(e) => handleClick(e, 'services')}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleClick(e, 'contact')}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link book-btn" href="#book" onClick={(e) => handleClick(e, 'book')}>
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

