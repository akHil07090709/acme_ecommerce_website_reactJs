import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getProducts } from "../reduxStore/store";
import { connect } from "react-redux";

function Shop({ products, dispatchProducts }) {
  React.useEffect(() => {
    dispatchProducts();
  }, []); //call only once by using empty dependency []
  // }, []); //[] => componentDidMount
  window.scrollTo(0, 0);

  return (
    <>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <div className="page-title-section">
        <div className="container">
          <h1 className="page-title">Shop Our Products</h1>
        </div>
      </div>
      <div className="content-section featured-section">
        <div className="container">
          <div className="w-dyn-list">
            {products
              .filter((item) => {
                return item.category === "Tents";
              })
              .map((card, pos) => {
                return (
                  <div role="list" className="w-dyn-items" key={pos}>
                    <div role="listitem" className="w-dyn-item">
                      <Link
                        style={{
                          backgroundImage: `url(${card.image})`
                        }}
                        to={`/product/${card.name}`}
                        className="featured-wrapper w-inline-block"
                      >
                        <div className="pill-2 badge primary featured">
                          Featured Item
                        </div>
                        <div className="feature-text-wrapper">
                          <h3 className="featured-item-name">{card.title}</h3>
                          <div className="featured-price">{card.price}</div>
                        </div>
                        <div className="featured-gradient-overlay"></div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
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
                          <Link
                            to={`/category/${item.category
                              .toLowerCase()
                              .replace(" ", "-")}`}
                            className="btn dark outline cat-menu w-button"
                          >
                            {item.category}
                          </Link>
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
                      return item.category !== "Tents";
                    })
                    .map((card, pos) => {
                      return (
                        <div role="listitem" className="w-dyn-item" key={pos}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
