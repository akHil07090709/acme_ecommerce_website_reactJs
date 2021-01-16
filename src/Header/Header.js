import React from "react";
// import useForceUpdate from "use-force-update";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { connect } from "react-redux";
import { cartDisplay, cartHide } from "../reduxStore/store";

function Header({ showCart, hideCart, cartVisiblity, cartCount }) {
  // const forceUpdate = useForceUpdate();
  const callBackFromCart = () => {
    hideCart();
    // forceUpdate();
  };
  var hamburgerIcon = false;
  return (
    <div className="menu-wrapper" id="headerId">
      <div className="w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="w-dyn-item">
            <Link to="/alert" className="banner w-inline-block">
              <div className="container">
                <div className="banner-content-wrapper">
                  <div className="pill primary alert-bar">Announcement</div>
                  <div>How we're responding to COVID-19</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        data-collapse="medium"
        data-animation="over-right"
        data-duration="400"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container">
          <div className="nav-wrapper">
            <Link className="brand w-nav-brand" to="/">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/acmeLogo.svg?alt=media&token=a2411e04-3243-4fc0-966d-bdfc5cee7b71"
                alt="Acme Outdoors Logo"
              />
            </Link>
            <div className="cart-nav-wrapper">
              <nav
                role="navigation"
                className="nav-menu w-nav-menu"
                id="menuItemWrapper"
              >
                <Link
                  to="/"
                  className="nav-link w-nav-link"
                  onClick={() => {
                    if (window.innerWidth < 991) {
                      if (hamburgerIcon === true) {
                        document
                          .getElementById("menuItemWrapper")
                          .classList.remove("topMenu");
                        document
                          .getElementById("hambuger")
                          .classList.remove("w--open");
                        hamburgerIcon = false;
                      }
                    }
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-link w-nav-link"
                  onClick={() => {
                    if (window.innerWidth < 991) {
                      if (hamburgerIcon === true) {
                        document
                          .getElementById("menuItemWrapper")
                          .classList.remove("topMenu");
                        document
                          .getElementById("hambuger")
                          .classList.remove("w--open");
                        hamburgerIcon = false;
                      }
                    }
                  }}
                >
                  About
                </Link>
                <Link
                  to="/shop"
                  className="nav-link w-nav-link"
                  onClick={() => {
                    if (window.innerWidth < 991) {
                      if (hamburgerIcon === true) {
                        document
                          .getElementById("menuItemWrapper")
                          .classList.remove("topMenu");
                        document
                          .getElementById("hambuger")
                          .classList.remove("w--open");
                        hamburgerIcon = false;
                      }
                    }
                  }}
                >
                  Shop
                </Link>
                <Link
                  onClick={() => {
                    if (window.innerWidth < 991) {
                      if (hamburgerIcon === true) {
                        document
                          .getElementById("menuItemWrapper")
                          .classList.remove("topMenu");
                        document
                          .getElementById("hambuger")
                          .classList.remove("w--open");
                        hamburgerIcon = false;
                      }
                    }
                  }}
                  to="/donations"
                  aria-current="page"
                  className="nav-link w-nav-link"
                >
                  Donate
                </Link>
                <Link
                  to="/contact"
                  className="nav-link w-nav-link"
                  onClick={() => {
                    if (window.innerWidth < 991) {
                      if (hamburgerIcon === true) {
                        document
                          .getElementById("menuItemWrapper")
                          .classList.remove("topMenu");
                        document
                          .getElementById("hambuger")
                          .classList.remove("w--open");
                        hamburgerIcon = false;
                      }
                    }
                  }}
                >
                  Contact
                </Link>
              </nav>
              <div
                onClick={() => {
                  showCart();
                }}
              >
                <div className="w-commerce-commercecartwrapper cart-menu">
                  <Link
                    to="#"
                    data-node-type="commerce-cart-open-link"
                    className="w-commerce-commercecartopenlink cart w-inline-block"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/cartIcon.svg?alt=media&token=87eaf7b2-7e98-46ac-9607-666029b9cc16"
                      alt=""
                      className="cart-icon"
                    />
                    <div className="w-commerce-commercecartopenlinkcount cart-quantity-cart">
                      {cartCount}
                    </div>
                  </Link>
                </div>
              </div>
              {cartVisiblity ? <Cart callBackToCart={callBackFromCart} /> : ""}
              <div
                className="nav-button w-nav-button"
                id="hambuger"
                onClick={() => {
                  if (hamburgerIcon === false) {
                    document
                      .getElementById("menuItemWrapper")
                      .classList.add("topMenu");
                    document
                      .getElementById("hambuger")
                      .classList.add("w--open");
                    hamburgerIcon = true;
                  } else if (hamburgerIcon === true) {
                    document
                      .getElementById("menuItemWrapper")
                      .classList.remove("topMenu");
                    document
                      .getElementById("hambuger")
                      .classList.remove("w--open");
                    hamburgerIcon = false;
                  }
                }}
              >
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          style={{ display: "none" }}
        ></div>
      </div>
    </div>
  );
}
const mapStateToProps = (store) => ({
  cartVisiblity: store?.displayCart,
  cartCount: store?.cartCount
});
const mapDispatchToProps = (dispatch) => ({
  showCart: (data) => dispatch(cartDisplay(data)),
  hideCart: (data) => dispatch(cartHide(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
