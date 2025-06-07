import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import './DentalCarousel.css';

function DentalCarousel() {
  // Scroll function with offset to avoid navbar overlapping
  const scrollWithOffset = (id) => {
    const element = document.getElementById(id);
    const yOffset = -150; // Adjust this value to match your navbar height
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <Container fluid className="px-0">
        <Row className="no-gutters">
          {/* Left side - Welcome text */}
          <Col md={5} className="welcome-box d-flex align-items-center justify-content-center">
            <div className="text-center p-4">
              <h1 className="display-5 fw-bold mb-3">Welcome to Our Clinic</h1>
              <p className="lead">Providing top-notch dental care with modern, friendly service.</p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                  className="btn btn-warning px-4 fw-semibold"
                  onClick={() => scrollWithOffset('book')}
                >
                  Book Appointment
                </button>

                <button
                  className="btn btn-primary px-4 fw-semibold"
                  onClick={() => scrollWithOffset('contact')}
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </Col>

          {/* Right side - Carousel */}
          <Col md={7}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="/img/family3.jpg"
                  alt="Dental Office 1"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="/img/dentaloffice3.jpg"
                  alt="Dental Office 2"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="/img/equipment.jpg"
                  alt="Dental Equipment"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="/img/dentaloffice2.jpg"
                  alt="Comfortable Environment"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DentalCarousel;
