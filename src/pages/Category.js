import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getProducts } from "../reduxStore/store";
import { connect } from "react-redux";

function Category({ location, products, dispatchProducts }) {
  React.useEffect(() => {
    dispatchProducts();
  }, []);
  window.scrollTo(0, 0);

  var currentLocation = location.pathname.split("/")[2];
  return (
    <>
      <div className="page-title-section">
        <div className="container">
          <h1 className="page-title">Shop Our Products</h1>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="shop-page-wrapper">
            <div className="shop-category-menu">
              <h2 className="category-menu-heading">Shop by Category</h2>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  {products
                    .filter((filtering) => {
                      return filtering.id !== 5;
                    })
                    .map((item, pos) => {
                      return (
                        <div
                          role="listitem"
                          className="category-menu-item w-dyn-item"
                          key={pos}
                        >
                          {item.category.toLowerCase().replace(" ", "-") ===
                          currentLocation ? (
                            <Link
                              to={`/category/${item.category
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="btn dark outline cat-menu w-button w--current"
                            >
                              {item.category}
                            </Link>
                          ) : (
                            <Link
                              to={`/category/${item.category
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className="btn dark outline cat-menu w-button"
                            >
                              {item.category}
                            </Link>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="shop-list">
              <div className="products-list-wrapper w-dyn-list">
                <div role="list" className="products-list w-dyn-items">
                  {products
                    .filter((item) => {
                      return (
                        item.category.toLowerCase().replace(" ", "-") ===
                        currentLocation
                      );
                    })
                    .map((card, pos) => {
                      return (
                        <div key={pos}>
                          <Helmet>
                            <title>{card.category}</title>
                          </Helmet>
                          <div role="listitem" className="w-dyn-item">
                            <div className="shop-item-wrapper">
                              <Link
                                to={`/product/${card.name}`}
                                className="shop-item-link-wrapper w-inline-block"
                              >
                                <div
                                  style={{
                                    backgroundImage: `url(${card.image})`
                                  }}
                                  className="shop-image tumbler-1 narrow-list"
                                >
                                  {card.id === 4 ? (
                                    <div className="pill-2 badge primary sale">
                                      Sale
                                    </div>
                                  ) : (
                                    <div className="pill-2 badge primary sale w-condition-invisible">
                                      Sale
                                    </div>
                                  )}
                                </div>
                                <div className="shop-details-wrapper">
                                  <div className="shop-details-left">
                                    <div className="shop-item-name">
                                      {card.title}
                                    </div>
                                    <div className="price-wrapper">
                                      <div className="shop-item-price">
                                        {card.price}
                                      </div>
                                      {card.id === 4 ? (
                                        <div className="shop-item-price compare">
                                          $&nbsp;145.00&nbsp;USD
                                        </div>
                                      ) : (
                                        <div className="shop-item-price compare w-condition-invisible w-dyn-bind-empty"></div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                              <div className="shop-button-wrapper">
                                <Link
                                  to={`/product/${card.name}`}
                                  className="btn w-button"
                                >
                                  Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
  products: store?.products
});
const mapDispatchToProps = (dispatch) => ({
  dispatchProducts: (data) => dispatch(getProducts(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
