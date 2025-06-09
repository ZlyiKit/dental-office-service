import React from 'react';
import DentalCarousel from './DentalCarousel';  
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import BookAppointment from './BookAppointment';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     
      <Navbar />
      <DentalCarousel />
      <AboutUs/>
      <Services />
      <BookAppointment />
      <ContactUs/>
      <Footer/>

    </div>
  );
}

export default App;

