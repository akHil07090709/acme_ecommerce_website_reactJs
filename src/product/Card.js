import React from "react";
import { Helmet } from "react-helmet";
import {
  addProduct,
  cartDisplay,
  getProducts,
  totalCartCount,
  totalPrice,
  updateCountInProduct
} from "../reduxStore/store";
import { connect } from "react-redux";

function Card({
  location,
  products,
  showCart,
  dispatchProducts,
  cartProducts,
  pushNewProduct,
  updateCountInProducts,
  totalCartCountt,
  totalPricee
}) {
  React.useEffect(() => {
    dispatchProducts();
    window.scrollTo(0, 0);
  }, []);

  var inputCount = 1;
  var currentLocation = location.pathname.split("/")[2];
  var card = {};

  products
    .filter((item) => {
      return (
        item.name === currentLocation
        // item.title.toLowerCase().replace(" ", "-").replace(" ", "-") ===
        // currentLocation
      );
    })
    .map((cardd) => {
      card = { ...cardd };
    });

  var currentPrice = card.price?.slice(2, card.price.indexOf("."));
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
                style={{
                  backgroundImage: `url(${card.image})`
                }}
                className="shopping-page-image"
              >
                {card.id === 4 ? (
                  <div className="pill-2 badge primary sale">Sale</div>
                ) : (
                  <div className="pill-2 badge primary sale w-condition-invisible">
                    Sale
                  </div>
                )}
              </div>
            </div>
            <div className="shipping-page-right">
              <h2 className="page-product-headin">{card.title}</h2>
              <div className="page-price-wrapping">
                <div className="shop-item-price-page">{card.price}</div>
                {card.id === 4 ? (
                  <div className="shop-item-price-page compare-at">
                    $&nbsp;145.00&nbsp;USD
                  </div>
                ) : (
                  <div className="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                )}
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
                          var currCard = {
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
                              var currCard = {
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
              <div className="w-richtext">
                <h2>What’s a Rich Text element?</h2>
                <p>
                  The rich text element allows you to create and format
                  headings, paragraphs, blockquotes, images, and video all in
                  one place instead of having to add and format them
                  individually. Just double-click and easily create content.
                </p>
                <h4>Static and dynamic content editing</h4>
                <p>
                  A rich text element can be used with static or dynamic
                  content. For static content, just drop it into any page and
                  begin editing. For dynamic content, add a rich text field to
                  any collection and then connect a rich text element to that
                  field in the settings panel. Voila!
                </p>
                <h4>How to customize formatting for each rich text</h4>
                <p>
                  Headings, paragraphs, blockquotes, figures, images, and figure
                  captions can all be styled after a class is added to the rich
                  text element using the "When inside of" nested selector
                  system.
                </p>
                <p>&zwj;</p>
              </div>
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
  products: store?.products,
  cartProducts: store?.cartProducts
});
const mapDispatchToProps = (dispatch) => ({
  dispatchProducts: (data) => dispatch(getProducts(data)),
  showCart: (data) => dispatch(cartDisplay(data)),
  pushNewProduct: (data) => dispatch(addProduct(data)),
  updateCountInProducts: (data) => dispatch(updateCountInProduct(data)),
  totalCartCountt: (data) => dispatch(totalCartCount(data)),
  totalPricee: (data) => dispatch(totalPrice(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
