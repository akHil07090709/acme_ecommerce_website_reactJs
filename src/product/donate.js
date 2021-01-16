import React from "react";
import { Helmet } from "react-helmet";
import {
  addProduct,
  cartDisplay,
  totalCartCount,
  totalPrice,
  updateCountInProduct
} from "../reduxStore/store";
import { connect } from "react-redux";
const cardsJson = [
  {
    id: 6,
    title: "Donate $5",
    name: "donate-5",
    price: "$ 5.00 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/donate5.png?alt=media&token=b027d13a-be7d-4aa1-b086-a647fadfbf67"
  },
  {
    id: 7,
    title: "Donate $15",
    name: "donate-15",
    price: "$ 15.00 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/donate15.png?alt=media&token=9ac6454e-cf94-4d50-8b86-bb139616a719"
  },
  {
    id: 8,
    title: "Donate $25",
    name: "donate-25",
    price: "$ 25.00 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/donate25.png?alt=media&token=6ca97657-0795-40ac-8ddd-347c4ba973d3"
  },
  {
    id: 9,
    title: "Donate $50",
    name: "donate-50",
    price: "$ 50.00 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/donate50.png?alt=media&token=80338390-6663-4178-9175-2750cdae4d2c"
  },
  {
    id: 10,
    title: "Donate $100",
    name: "donate-100",
    price: "$ 100.00 USD",
    image:
      "https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/donate100.png?alt=media&token=a92623a8-d936-41ac-8aff-8e72cdf09573"
  }
];

function Donate({
  location,
  showCart,
  cartProducts,
  pushNewProduct,
  updateCountInProducts,
  totalCartCountt,
  totalPricee
}) {
  var itemTitle = location.pathname.split("/")[2];
  var card;
  cardsJson
    .filter((item) => {
      return item.name === itemTitle;
    })
    .map((cardd) => {
      card = { ...cardd };
    });
  var currentPrice = card.price?.slice(2, card.price.indexOf("."));
  var inputCount = 1;
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>{card.title}</title>
      </Helmet>
      <div className="page-title-section">
        <div className="container">
          <h1 className="page-title">{card.title}</h1>
        </div>
      </div>
      <div className="content-section">
        <div className="container">
          <div className="shopping-page-wrapper">
            <div className="shopping-page-left">
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="shopping-page-image"
              >
                <div className="pill-2 badge primary sale w-condition-invisible">
                  Sale
                </div>
              </div>
            </div>
            <div className="shipping-page-right">
              <h2 className="page-product-headin">{card.title}</h2>
              <div className="page-price-wrapping">
                <div className="shop-item-price-page">{card.price}</div>
                <div className="shop-item-price-page compare-at w-condition-invisible w-dyn-bind-empty"></div>
              </div>
              <div>
                <form className="w-commerce-commerceaddtocartform">
                  <label>Quantity</label>
                  <div className="add-to-cart-page-wrapper">
                    <input
                      type="number"
                      pattern="^[0-9]+$"
                      inputMode="numeric"
                      name="commerce-add-to-cart-quantity-input"
                      min="1"
                      id="countField"
                      className="w-commerce-commerceaddtocartquantityinput input cart-quantity"
                      defaultValue="1"
                      onChange={(e) => {
                        inputCount = e.target.value;
                      }}
                    />
                    <button
                      className="w-commerce-commerceaddtocartbutton btn outline"
                      onClick={(e) => {
                        e.preventDefault();
                        showCart();
                        if (cartProducts.length === 0) {
                          let currCard = {
                            title: card.title,
                            count: parseInt(inputCount),
                            card: card
                          };
                          totalCartCountt(parseInt(inputCount));
                          totalPricee(currentPrice * inputCount);
                          inputCount = 1;
                          document.getElementById("countField").value = 1;
                          pushNewProduct(currCard);
                        } else {
                          for (let i = 0; i < cartProducts.length; i++) {
                            if (cartProducts[i].title === card.title) {
                              updateCountInProducts(i + `-${inputCount}`);
                              totalCartCountt(parseInt(inputCount));
                              totalPricee(currentPrice * inputCount);
                              inputCount = 1;
                              document.getElementById("countField").value = 1;
                              break;
                            } else if (
                              i === cartProducts.length - 1 &&
                              cartProducts[i].title !== card.title
                            ) {
                              let currCard = {
                                title: card.title,
                                count: parseInt(inputCount),
                                card: card
                              };
                              totalCartCountt(parseInt(inputCount));
                              totalPricee(currentPrice * inputCount);
                              inputCount = 1;
                              pushNewProduct(currCard);
                              document.getElementById("countField").value = 1;
                              break;
                            }
                          }
                        }
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-dyn-bind-empty w-richtext"></div>
              <div>
                <h3 className="page-product-headin">
                  Tweet about #AcmeOutdoors products
                </h3>
                <div className="w-widget w-widget-twitter">
                  <iframe
                    allowtransparency="true"
                    frameBorder="0"
                    scrolling="no"
                    src="//platform.twitter.com/widgets/tweet_button.html#counturl=biznus-template.io&amp;dnt=true&amp;height=28&amp;show_count=false&amp;size=l&amp;text=You'll%20love%20the%20product%20from%20Acme%20Outdoors!&amp;url=http%3A%2F%2Fbiznus-template.io&amp;width=76"
                    style={{
                      border: `none`,
                      height: `28px`,
                      overflow: `hidden`,
                      width: `76px`
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (store) => ({
  cartProducts: store?.cartProducts
});
const mapDispatchToProps = (dispatch) => ({
  showCart: (data) => dispatch(cartDisplay(data)),
  pushNewProduct: (data) => dispatch(addProduct(data)),
  updateCountInProducts: (data) => dispatch(updateCountInProduct(data)),
  totalCartCountt: (data) => dispatch(totalCartCount(data)),
  totalPricee: (data) => dispatch(totalPrice(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Donate);
