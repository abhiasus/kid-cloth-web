import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { img } from "../data/images";

export default function Contact({ cartCount }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="container tt-page">
        <span className="tt-eyebrow">WE'RE HERE TO HELP</span>
        <h1 className="tt-page-title">Let's talk <em>little things.</em></h1>
        <p className="text-muted">Have a question? We'd love to hear from you.</p>

        <img className="tt-page-banner" src={img("contact_page_image")} alt="Contact TinyTrend" />

        <div className="row g-5 mt-0">
          <div className="col-md-5">
            <div className="tt-contact-info">
              <span className="tt-eyebrow">GET IN TOUCH</span>
              <h3>We're happy to help.</h3>
              <p>Need help with sizing, an order or finding the right outfit? Send us a message.</p>
              <div className="tt-contact-detail">
                <i className="bi bi-envelope" />
                <div><strong>Email us</strong><p>hello@tinytrend.example</p></div>
              </div>
              <div className="tt-contact-detail">
                <i className="bi bi-clock" />
                <div><strong>Opening hours</strong><p>Monday–Saturday, 10 AM–6 PM</p></div>
              </div>
              <div className="tt-contact-detail">
                <i className="bi bi-chat-heart" />
                <div><strong>Product support</strong><p>Ask us about sizes, brands and styles.</p></div>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            {submitted ? (
              <div className="tt-success">
                <i className="bi bi-check-circle" />
                <h3>Thank you!</h3>
                <p>Your demo form has been submitted successfully.</p>
                <button className="btn tt-primary" onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="tt-contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <input id="name" className="form-control mb-3" required placeholder="Enter your name" />

                <label htmlFor="email">Email address</label>
                <input id="email" type="email" className="form-control mb-3" required placeholder="you@example.com" />

                <label htmlFor="subject">What can we help with?</label>
                <select id="subject" className="form-select mb-3">
                  <option>Product enquiry</option>
                  <option>Order support</option>
                  <option>Size advice</option>
                  <option>Brand enquiry</option>
                  <option>Other</option>
                </select>

                <label htmlFor="message">Your message</label>
                <textarea id="message" className="form-control mb-4" rows="5" required placeholder="Write your message..." />

                <button type="submit" className="btn tt-primary">
                  Send message <i className="bi bi-arrow-up-right" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
