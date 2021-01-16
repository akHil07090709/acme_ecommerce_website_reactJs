import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function About() {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="hero-section about-hero">
        <div className="container">
          <div className="hero-wrapper">
            <h1 className="hero-heading anout-hero-heading">
              Your Adventure<br></br>Awaits
            </h1>
            <p className="hero-paragraph">
              Acme Outdoors has everything you need to help you get started
              today. Check out our wonderful collection of gear that will make
              your next adventure complete.
            </p>
            <div className="hero-button-wrapper">
              <Link to="/shop">
                <p className="btn light outline w-button">Shop Merch</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section why-acme-sections">
        <div className="container">
          <div className="about-top-block">
            <div className="why-acme-block">
              <div className="why-acme-small-text">Why Acme Outdoors?</div>
              <h2 className="why-acme-heading">
                We’re the best in the business.
              </h2>
              <p className="why-acme-paragraph">
                From more than 30 years, we’ve been leading the way across
                Oklahoma — creating the best possible customer experience since
                1989.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="about-columns-wrapper">
            <div className="about-column">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/icons%2Flifetime.svg?alt=media&token=1b5ae72e-86ee-4dee-87c2-ea28ebcf8e22"
                alt="Warranty Icon"
                className="image"
              />
              <h3>Lifetime Warranty</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
            <div className="about-column">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/icons%2Fshopping.svg?alt=media&token=3b1229e8-b796-44c4-8c1a-ec02e26c932e"
                alt="Shopping Cart Icon"
                className="image"
              />
              <h3>Shopping Experience</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
            <div className="about-column">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/icons%2Fdelivery.svg?alt=media&token=4588ff88-6501-4ae6-8794-8b98867fdeec"
                alt="Delivery Icon"
                className="image"
              />
              <h3>On-time Delivery</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
            <div className="about-column">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/icons%2Fchat.svg?alt=media&token=bd838d89-8338-4a61-a2df-faa698f65c4f"
                alt="Service Icon"
                className="image"
              />
              <h3>Best in Class Service</h3>
              <p>
                All our products — whether we make them or not — are backed by
                our lifetime warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="container shop-local-container">
          <div className="content-wrapper">
            <div className="meet-the-owners-wrapper">
              <div className="meet-the-owners-left"></div>
              <div className="meet-the-owners-right">
                <div className="owners-rich-text w-richtext">
                  <h2>Meet the Owners</h2>
                  <p>
                    John and Jane met on a backpacking adventure in Nepal. John,
                    a former sheep shearer, went on the trip to get some clarity
                    about his next adventures in life. Jane — a Peloton
                    instructor — went on the trip to explore the landscape in
                    Nepal.<br></br>
                    <br></br>While on the trip, John and Jane realized that they
                    had one common love — the love for hiking and the love for
                    being outdoors.<br></br>
                    <br></br>Returning back to their home state of Oklahoma,
                    John and Jane hatched a plan to launch a retail store
                    centered around their passions. <br></br>
                    <br></br>While John handled the sourcing of goods and
                    customer service, Jane focused on the web + e-commerce side
                    of the business, building this website in the best design
                    platform on the web — Webflow!<br></br>
                    <br></br>In 1989, John and Jane Doe officially launched Acme
                    Outdoors, the premiere store for outdoor enthusiasts around
                    the state.<br></br>
                    <br></br>To this day, John and Jane return to Nepal yearly
                    to ensure that they never forget their roots and where they
                    came from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="owner-bios-wrapper">
            <div className="owner-bio">
              <div className="owner-avatar-wrapper">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/assets%2Fabout3.png?alt=media&token=4178d589-3c27-44a2-bbfe-acc3c7b8f8d3"
                  alt="Co-Owner John Doe"
                />
              </div>
              <h3>John Doe</h3>
              <p className="owner-bio-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className="owner-bio">
              <div className="owner-avatar-wrapper">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/assets%2Fabout4.png?alt=media&token=7ffc20bd-7351-4ce9-ab15-2db7d141dd14"
                  alt="Co-Owner Jane Doe"
                />
              </div>
              <h3>Jane Doe</h3>
              <p className="owner-bio-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section contact-hero">
        <div className="container">
          <div className="hero-wrapper">
            <h1 className="hero-heading anout-hero-heading">Need Help?</h1>
            <p className="hero-paragraph">
              Need help or assistance?&nbsp;Our team is standing by to make sure
              you get the help you need. Whether you need to adjust an order or
              delivery details, we're ready to help!
            </p>
            <div className="hero-button-wrapper">
              <Link to="/contact">
                <p className="btn light outline w-button">Contact Support</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
