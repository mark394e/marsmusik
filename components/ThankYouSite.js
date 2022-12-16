import React from "react";
import "../styles/ThankYouSite.module.scss";
import Anchor from "./Anchor";
import Basket from "./Basket";

function ThankYouSite(props) {
  return (
    <>
      <div className="thank_container">
        <h1>Thank you!</h1>
        <h3>Booking has been sent</h3>

        <button>
          <Anchor href="/"> Back to Home</Anchor>
        </button>
      </div>
    </>
  );
}

export default ThankYouSite;
