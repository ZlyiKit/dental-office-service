import React from 'react';
import './Services.css';

const services = [
  {
    title: 'General Dentistry',
    description: 'Routine cleanings, checkups, and preventive care for all ages.',
    image: '/img/general-dent-service.jpg',
  },
  {
    title: 'Teeth Whitening',
    description: 'Brighten your smile with safe, professional whitening treatments.',
    image: '/img/whitening.jpg',
  },
  {
    title: 'Orthodontics',
    description: 'Straighten teeth and correct bites with braces or clear aligners.',
    image: '/img/ortho.jpg',
  },
  {
    title: 'Root Canals',
    description: 'Treat infected or damaged teeth with precision and care.',
    image: '/img/root.jpg',
  },
];

function Services() {
  return (
    <section className="services-section py-5 text-center" id="services">
      <div className="container">
        <h2 className="mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, idx) => (
            <div className="col-md-6 col-lg-3 mb-4" key={idx}>
              <div className="service-card">
                <div className="service-card-title">
                  <h5>{service.title}</h5>
                </div>
                <div
                  className="service-card-inner"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="service-card-front" />
                  <div className="service-card-back">
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
