import React from "react";
import "../styles/ThankYouSite.module.scss";
import Anchor from "./Anchor";

function ThankYouSite(props) {
  return (
    <>
      <div className="thank_container">
        <h1>Thank you!</h1>
        <h3>tickets has been sent</h3>
        <button>
          <Anchor href="/"> Go to start</Anchor>
        </button>
      </div>
    </>
  );
}

export default ThankYouSite;
