import React from "react";
import "../styles/Extras.module.scss";

function Extras(props) {
  const increaseGreenCamp = () => {
    props.setCounterGreenCamp((count) => count + 1);
  };

  const decreaseGreenCamp = () => {
    if (props.counterGreenCamp > 0) {
      props.setCounterGreenCamp((count) => count - 1);
    }
  };

  const increasePrebuildTwo = () => {
    props.setCounterPrebuildTwo((count) => count + 1);
  };

  const decreasePrebuildTwo = () => {
    if (props.counterPrebuildTwo > 0) {
      props.setCounterPrebuildTwo((count) => count - 1);
    }
  };

  const increasePrebuildThree = () => {
    props.setCounterPrebuildThree((count) => count + 1);
  };

  const decreasePrebuildThree = () => {
    if (props.counterPrebuildThree > 0) {
      props.setCounterPrebuildThree((count) => count - 1);
    }
  };

  return (
    <section className="extrabox">
      <h3>
        Extras - <span>optional</span>
      </h3>
      <div className="optionals">
        <p>
          Want to live greener and cleaner? Choose green camping for a garuanteed cleaning of your
          campsite.
        </p>
        <div className="extra-heading">
          <p>Green choices</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <div className="extra" id="greenchoice">
          <div className="border">
            <div className="red">
              <p>Green camping</p>
            </div>
            <div className="orange">
              <p> 249,-</p>
            </div>
            <div className="white">
              {" "}
              <p> {props.counterGreenCamp * 249},-</p>
            </div>
          </div>
          <div className="counter">
            <button onClick={decreaseGreenCamp} className="counterBtn">
              -
            </button>
            <span>{props.counterGreenCamp}</span>
            <button onClick={increaseGreenCamp} className="counterBtn">
              +
            </button>
          </div>
        </div>
        <div className="extra-heading">
          <p>Prebuild tent</p>
        </div>
        <div className="extra" id="twoperstent">
          <div className="border">
            <div className="red">
              {" "}
              <p> 2 person tent </p>
            </div>
            <div className="orange">
              <p> 299,-</p>
            </div>
            <div className="white">
              <p> {props.counterPrebuildTwo * 299},-</p>
            </div>
          </div>
          <div className="counter">
            <button onClick={decreasePrebuildTwo} className="counterBtn">
              -
            </button>
            <span>{props.counterPrebuildTwo}</span>
            <button onClick={increasePrebuildTwo} className="counterBtn">
              +
            </button>
          </div>
        </div>
        <div className="extra" id="threeperstent">
          <div className="border">
            <div className="red">
              <p> 3 person tent</p>
            </div>
            <div className="orange">
              <p> 399,-</p>
            </div>
            <div className="white">
              <p> {props.counterPrebuildThree * 399},-</p>
            </div>
          </div>
          <div className="counter">
            <button onClick={decreasePrebuildThree} className="counterBtn">
              -
            </button>
            <span>{props.counterPrebuildThree}</span>
            <button onClick={increasePrebuildThree} className="counterBtn">
              +
            </button>
          </div>
        </div>
      </div>
      {props.showExtras && !props.showPaymentForm && (
        <button onClick={sendExtras} className="continueBtn">
          Continue
        </button>
      )}
    </section>
  );
}

export default Extras;
