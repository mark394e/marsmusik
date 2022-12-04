import React from "react";
import "../styles/Extras.module.scss";

function Extras() {
  return (
    <section className="extrabox">
      <p>Extras - optional</p>
      <div className="extra-heading">
        <p>Green choices</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      <div className="extra" id="greenchoice">
        <div className="border">
          <div className="red">Green camping</div>
          <div className="orange">1234,-</div>
          <div className="white">4321,-</div>
        </div>
        <p>- 2 +</p>
      </div>
      <div className="extra-heading">
        <p>Provided tent</p>
      </div>
      <div className="extra" id="twoperstent">
        <div className="border">
          <div className="red">2 person tent</div>
          <div className="orange">1234,-</div>
          <div className="white">4321,-</div>
        </div>
        <p>- 2 +</p>
      </div>
      <div className="extra" id="threeperstent">
        <div className="border">
          <div className="red">3 person tent</div>
          <div className="orange">1234,-</div>
          <div className="white">4321,-</div>
        </div>
        <p>- 2 +</p>
      </div>
    </section>
  );
}

export default Extras;
