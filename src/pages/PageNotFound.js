import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
class PageNotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.getElementById("headerId").style.display = "none";
    document.getElementById("footerId").style.display = "none";
  }
  headerFooterVisible = () => {
    document.getElementById("headerId").style.display = "block";
    document.getElementById("footerId").style.display = "block";
  };
  render() {
    return (
      <>
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <div className="utility-page-wrap">
          <div className="utility-page-content w-form">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/acme-e60b1.appspot.com/o/dangerIcon.svg?alt=media&token=203eb355-7d97-4322-bbf7-0b81d1c88fdd"
              alt="notfound"
            />
            <h2>So sorry! We can't find that page</h2>
            <p>
              The page you are looking for doesn't exist or has been moved. You
              can go back to the{" "}
              <Link
                onClick={() => {
                  this.headerFooterVisible();
                }}
                to="/"
              >
                home page
              </Link>
              , or you can contact us and let us know about{" "}
              <Link
                onClick={() => {
                  this.headerFooterVisible();
                }}
                to="/contact"
              >
                this error
              </Link>
              .
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default PageNotFound;
