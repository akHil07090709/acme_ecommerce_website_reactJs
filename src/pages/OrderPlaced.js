import React from "react";
import { Helmet } from "react-helmet";

export default function OrderPlaced() {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>checkout</title>
        <script
          src="https://kit.fontawesome.com/89ce51601c.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <div id="clearConfirmMain" style={{}}>
        <div id="clearConfirmId" className="clearConfirm">
          <i className="fas fa-check" aria-hidden="true"></i>
        </div>
        <h1>
          Hurrah... <br />
          <i>Order Placed..🥳</i>
        </h1>
      </div>
    </>
  );
}
