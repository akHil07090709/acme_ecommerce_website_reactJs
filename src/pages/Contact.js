import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact-hero-section">
        <div className="contact-hero-bg-wrapper">
          <div className="container contact">
            <h1 className="heading">Contact Acme Outdoors</h1>
            <div className="contact-block-wrapper">
              <div className="contact-block">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/icons%2Fchat.svg?alt=media&token=bd838d89-8338-4a61-a2df-faa698f65c4f"
                  alt="img"
                  className="contact-icon"
                />
                <h2>Contact Us</h2>
                <p>
                  Just want to say hi?&nbsp;We'd love to hear from you. We love
                  our customers and community!&nbsp;
                </p>
                <a href="#contact" className="btn w-button">
                  Send Us A Message
                </a>
              </div>
              <div className="contact-block">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/icons%2Fchatalert.svg?alt=media&token=2961080e-c4fc-44ed-ad15-a11ac84b86ee"
                  alt=""
                  className="contact-icon"
                />
                <h2>Get Support</h2>
                <p>
                  Have an issue with an order or with a product you purchased
                  from us?&nbsp;Fill out our support form.
                </p>
                <a
                  href="https://www.edyoda.com/contact-us"
                  target="_blank"
                  rel="noreferrer"
                  className="btn w-button"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
          <div className="contact-image-div"></div>
        </div>
      </div>
      <div id="contact" className="content-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-left">
              <h2>Contact Us</h2>
              <div className="w-richtext">
                <p>
                  Acme Outdoors<br></br>123 Rainy Street<br></br>Oklahoma City,
                  OK 73129
                </p>
                <p>
                  &zwj;<br></br>
                  <strong>General Inquiries:</strong>&nbsp;(405) 555-5555
                  <br></br>
                  <strong>Customer Support:</strong>&nbsp;(405) 555-5556
                </p>
              </div>
            </div>
            <div className="contact-right">
              <h2>Contact Form</h2>
              <p>
                Send us a message and we'll get back to you as soon as we can!{" "}
              </p>
              <div className="w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    document.getElementById("email-form").style.display =
                      "none";
                    document.getElementById("success").style.display = "block";
                  }}
                >
                  <label>Name</label>
                  <input
                    type="text"
                    className="input w-input"
                    maxLength="256"
                    name="name"
                    dataname="Name"
                    placeholder="Enter your name"
                    required="required"
                  />
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="input w-input"
                    maxLength="256"
                    name="email"
                    dataname="Email"
                    placeholder="Enter your email address"
                    required="required"
                  />
                  <label>Your Message</label>
                  <textarea
                    placeholder="Enter your message"
                    maxLength="5000"
                    name="Message"
                    dataname="Message"
                    className="input w-input"
                  ></textarea>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn w-button"
                  />
                </form>
                <div
                  className="success w-form-done"
                  id="success"
                  style={{ display: "none", textAlign: "center" }}
                >
                  <div>
                    Thank you! Your submission has been received! We'll be in
                    touch soon!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
