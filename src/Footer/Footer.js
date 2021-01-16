import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <div className="footer" id="footerId">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer-logo-column">
              <a href="/" className="w-inline-block" rel="noreferrer">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/acmeLogo.svg?alt=media&token=a2411e04-3243-4fc0-966d-bdfc5cee7b71"
                  alt="Acme Outdoors Logo"
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/EdYodaHQ"
                target="_blank"
                className="social-footer-link w-inline-block"
                rel="noreferrer"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/twitterLogo.svg?alt=media&token=5056cee8-c26d-4f7f-bf60-13b0d15f7bb6"
                  width="30"
                  alt="Twitter Logo"
                />
              </a>
              <a
                href="https://www.facebook.com/edYoda.here/"
                className="social-footer-link w-inline-block"
                rel="noreferrer"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/facebookLogo.svg?alt=media&token=464b96e7-cf8e-49f4-b0ff-baa2bc7b2e30"
                  width="30"
                  alt="Facebook Logo"
                />
              </a>
              <a
                href="https://www.instagram.com/edyoda/"
                target="_blank"
                className="social-footer-link w-inline-block"
                rel="noreferrer"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/instaLogo.svg?alt=media&token=14c36885-913c-4675-ad81-357c7c94f737"
                  width="30"
                  alt="Instagram Logo"
                />
              </a>
            </div>
          </div>
          <div className="footer-bottom-wrapper">
            <div className="small footer-small">
              Project by{" "}
              <a
                href="https://www.edyoda.com/"
                rel="noreferrer"
                target="_blank"
              >
                EdYoda
              </a>
              . © 2020.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
