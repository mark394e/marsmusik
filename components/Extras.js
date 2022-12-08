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
        <button onClick={decreaseGreenCamp} className="counter-minus">
          -
        </button>
        <span>{props.counterGreenCamp}</span>
        <button onClick={increaseGreenCamp} className="counter-plus">
          +
        </button>
      </div>
      <div className="extra-heading">
        <p>Prebuild tent</p>
      </div>
      <div className="extra" id="twoperstent">
        <div className="border">
          <div className="red">2 person tent</div>
          <div className="orange">1234,-</div>
          <div className="white">4321,-</div>
        </div>
        <button onClick={decreasePrebuildTwo} className="counter-minus">
          -
        </button>
        <span>{props.counterPrebuildTwo}</span>
        <button onClick={increasePrebuildTwo} className="counter-plus">
          +
        </button>
      </div>
      <div className="extra" id="threeperstent">
        <div className="border">
          <div className="red">3 person tent</div>
          <div className="orange">1234,-</div>
          <div className="white">4321,-</div>
        </div>
        <button onClick={decreasePrebuildThree} className="counter-minus">
          -
        </button>
        <span>{props.counterPrebuildThree}</span>
        <button onClick={increasePrebuildThree} className="counter-plus">
          +
        </button>
      </div>
    </section>
  );
}

export default Extras;
