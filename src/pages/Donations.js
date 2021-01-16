import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Donations() {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Donations</title>
      </Helmet>
      <div className="donate-explainer">
        <div className="container">
          <div className="donate-heading-1">Here at Acme Outdoors</div>
          <div className="donate-heading-2">every dollar counts</div>
          <p className="donate-paragraph">
            Acme Outdoors is more than just a company, we're a community of
            people who care for one another and for our city. During this time,
            due to shelter in place orders, only a select few of our staff are
            able to work. Any donations you make to Acme will help make sure our
            employees are cared for and can stay safe in these uncertain times.{" "}
          </p>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="donate-wrapper">
            <div className="donate-collection w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <Link
                    to="/product/donate-100"
                    className="donate-link-block w-inline-block"
                  >
                    <div className="text-block">Donate $100</div>
                  </Link>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <Link
                    to="/product/donate-50"
                    className="donate-link-block w-inline-block"
                  >
                    <div className="text-block">Donate $50</div>
                  </Link>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <Link
                    to="/product/donate-25"
                    className="donate-link-block w-inline-block"
                  >
                    <div className="text-block">Donate $25</div>
                  </Link>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <Link
                    to="/product/donate-15"
                    className="donate-link-block w-inline-block"
                  >
                    <div className="text-block">Donate $15</div>
                  </Link>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <Link
                    to="/product/donate-5"
                    className="donate-link-block w-inline-block"
                  >
                    <div className="text-block">Donate $5</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donations;
