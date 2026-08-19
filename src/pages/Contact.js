import React from 'react';
import ContactBackground from '../images/contact-2.jpg';
import '../styles/Contact.css';
import '../App.css';

export default function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:jdelvalle88@live.com';
  };

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <img
          src={ContactBackground}
          alt="Contact"
          className="contact-background"
        />

        <div className="contact-overlay"></div>

        <div className="contact-container">

          <div className="contact-title">
            <span>GET IN TOUCH</span>
            <h1>Contact</h1>
          </div>

          <div className="design-inquiries">

            <h2>Let's Work Together</h2>

            <p>
              Have a question, project idea, or design inquiry?
              I'd love to hear from you. Send me an email and
              provide the following information:
            </p>

            <ul>
              <li>Your Name</li>
              <li>Your Email</li>
              <li>The nature of your inquiry</li>
              <li>A brief description of your project or question</li>
            </ul>

            <button
              className="email-button"
              onClick={handleEmailClick}
            >
              <span>✉</span>
              Send Me an Email
            </button>

            <p className="email-address">
              jdelvalle88@live.com
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}