import React from "react";
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <h1 className="animate-fade">Contact Us</h1>
        <p className="animate-fade">Get in touch with us for any inquiries or feedback.</p>
        <div className="contact-info-container">
          <div className="get-in-touch">
            <form className="animate-slide-up">
              <label>Name:</label>
              <input type="text" name="name" required />
              <label>Email:</label>
              <input type="email" name="email" required />
              <label>Message:</label>
              <textarea name="message" required />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-details animate-slide-up">
            <h3>Our Address:</h3>
            <p>EB COLONY, GANDHIGRAMAM, KARUR-3.</p>
            <h3>Phone:</h3>
            <p>6374-5812-5821</p>
            <h3>Email:</h3>
            <p><a href="mailto:info@saint-gobain.com">rentalservice@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
  