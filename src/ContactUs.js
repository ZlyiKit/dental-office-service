import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <div className="contact-card">
              <h5>Our Clinic</h5>
              <p><strong>Address:</strong> 123 Dental Street, Smile City</p>
              <p><strong>Email:</strong> contact@familysunflowerdental.com</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Hours:</strong> Mon - Fri: 9am - 5pm</p>
            </div>
          </div>

          {/* Contact Form or Thank You Message */}
          <div className="col-md-7">
            {formSubmitted ? (
              <div className="p-4 bg-white rounded shadow-sm text-center">
                <h4 className="text-success mb-3">Thank you for your message!</h4>
                <p>We appreciate you reaching out. Our team will get in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </form>
            )}
          </div>

          {/* Google Maps Embed */}
          <div className="mt-5">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4452.066831054904!2d-75.68570782372822!3d45.42310637107334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e1!3m2!1sen!2sca!4v1749324653152!5m2!1sen!2sca"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
