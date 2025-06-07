import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookAppointment.css';

function BookAppointment() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 18; hour++) {
      for (let min = 0; min < 60; min += 30) {
        const h = hour.toString().padStart(2, '0');
        const m = min.toString().padStart(2, '0');
        times.push(`${h}:${m}`);
      }
    }
    return times;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
    e.target.reset();  // reset form after submission
  };

  return (
    <section id="book" className="book-section text-center py-5">
      <div className="container">
        <h2 className="heading mb-4">Book Your Appointment</h2>

        <motion.div
          className="appointment-form p-5 rounded shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Phone Number" required />
              </div>
              <div className="col-md-6">
                <select className="form-select" required>
                  <option value="">Select Service</option>
                  <option>Teeth Cleaning</option>
                  <option>Whitening</option>
                  <option>Root Canal</option>
                  <option>Checkup</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="date" className="form-control" min={today} required />
              </div>
              <div className="col-md-6">
                <select className="form-select" required>
                  <option value="">Select Time</option>
                  {generateTimeOptions().map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4 px-4 py-2">
              Confirm Appointment
            </button>
          </form>
        </motion.div>

        <AnimatePresence>
          {showConfirmation && (
            <motion.div
              className="alert alert-success mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              🎉 Thank you! Your appointment has been booked.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default BookAppointment;

