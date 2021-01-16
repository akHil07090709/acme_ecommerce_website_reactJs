import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  checkout,
  deleteProduct,
  resetCountInProduct,
  updateCartCount,
  updateTotalPrice
} from "../reduxStore/store";

function Cart({
  callBackToCart,
  cartProducts,
  resetCountInProduct,
  updateCartCountt,
  deleteProductt,
  totalPrice,
  updateTotalPricee,
  checkoutt
}) {
  const cardDelFun = (pos, condition) => {
    if (condition === true) {
      deleteProductt(pos);
    }
    let countCreation = [];
    let countCreationValue = 0;
    cartProducts.map((item) => {
      countCreation.push(item.count);
    });
    countCreation.map((item) => {
      countCreationValue = countCreationValue + item;
    });
    updateCartCountt(countCreationValue);
  };
  const totalPriceUpdation = () => {
    if (cartProducts.length === 0) {
      updateTotalPricee(0);
    } else {
      var updatedPrice = 0;
      cartProducts.map((item) => {
        updatedPrice =
          updatedPrice +
          item.count * item.card.price?.slice(2, item.card.price.indexOf("."));
      });
      updateTotalPricee(updatedPrice);
    }
  };
  var inputCount = 1;
  return (
    <div
      style={{ opacity: 1, transition: "opacity 300ms ease 0s" }}
      className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"
    >
      <div
        className="w-commerce-commercecartcontainer"
        style={{
          transform: "translateX(0px)",
          transition: "transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
        }}
      >
        <div className="w-commerce-commercecartheader">
          <h4 className="w-commerce-commercecartheading">Your Cart</h4>
          <div>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={() => {
                callBackToCart();
              }}
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero" fill="#333333">
                  <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="w-commerce-commercecartformwrapper">
          <form
            data-node-type="commerce-cart-form"
            style={{}}
            className="w-commerce-commercecartform"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {cartProducts.length > 0 ? (
              <>
                <div className="w-commerce-commercecartlist">
                  {cartProducts.map((item, pos) => {
                    return (
                      <div
                        className="w-commerce-commercecartitem cart-item"
                        key={pos}
                      >
                        <div className="cart-image-wrapper">
                          <img
                            src={item.card.image}
                            alt=""
                            className="w-commerce-commercecartitemimage product-image-cart"
                          />
                        </div>
                        <div className="w-commerce-commercecartiteminfo">
                          <div className="w-commerce-commercecartproductname">
                            White Tent
                          </div>
                          <div>{item.card.price}</div>
                          <ul className="w-commerce-commercecartoptionlist"></ul>
                          <div
                            className="w-inline-block cartRemove"
                            onClick={() => {
                              cardDelFun(pos, true);
                              totalPriceUpdation();
                            }}
                          >
                            Remove
                          </div>
                        </div>
                        <input
                          type="number"
                          required=""
                          pattern="^[0-9]+$"
                          inputMode="numeric"
                          className="w-commerce-commercecartquantity input cart-quantity"
                          min="1"
                          name="quantity"
                          defaultValue={item.count}
                          onInput={(e) => {
                            inputCount = parseInt(e.target.value);
                            // console.log(pos, parseInt(inputCount));
                            if (inputCount === 0) {
                              cardDelFun(pos, true);
                              totalPriceUpdation();
                            } else {
                              resetCountInProduct(
                                pos + `-${parseInt(inputCount)}`
                              );
                              cardDelFun(pos);
                              totalPriceUpdation();
                            }
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="w-commerce-commercecartfooter">
                  <div className="w-commerce-commercecartlineitem">
                    <div>Subtotal</div>
                    <div className="w-commerce-commercecartorderdefaultValue">
                      $&nbsp;{totalPrice}.00&nbsp;USD
                    </div>
                  </div>
                  <div>
                    <Link
                      onClick={() => {
                        checkoutt();
                      }}
                      defaultValue="Continue to Checkout"
                      className="w-commerce-commercecartcheckoutbutton btn"
                      to="/checkout"
                    >
                      Continue to Checkout
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-commerce-commercecartemptystate" style={{}}>
                <div>No items found.</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (store) => ({
  cartProducts: store?.cartProducts,
  totalPrice: store?.totalPrice
});
const mapDispatchToProps = (dispatch) => ({
  resetCountInProduct: (data) => dispatch(resetCountInProduct(data)),
  updateCartCountt: (data) => dispatch(updateCartCount(data)),
  deleteProductt: (data) => dispatch(deleteProduct(data)),
  updateTotalPricee: (data) => dispatch(updateTotalPrice(data)),
  checkoutt: (data) => dispatch(checkout(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
