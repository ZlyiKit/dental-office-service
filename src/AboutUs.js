import React from "react";
import "./AboutUs.css"; // Optional for custom styling

function AboutUs() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#f5faff",
        padding: "4rem 0",
        marginTop: "4rem",
      }}
    >
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/img/dentists.jpeg`}
              alt="Our Dentists"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
            />
          </div>

          <div className="col-md-6 mb-4 mb-md-0">
            <h2>About Us</h2>
            <p>
              At our dental clinic, we believe in compassionate care,
              cutting-edge treatments, and making every patient feel
              comfortable. With decades of experience and a passion for smiles,
              our team is here to help you achieve excellent oral health.
            </p>
            <p>
              We offer personalized care plans, modern equipment, and a warm
              environment where your comfort and health come first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
