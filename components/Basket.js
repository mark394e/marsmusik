// import "../styles/basket.module.scss";
import styles from "../styles/Basket.module.scss";
import prices from "../modules/prices.json";
import { useState, useEffect } from "react";

function Basket(props) {
  const [showVIPTicket, setShowVIPTicket] = useState(false);
  const [showREGTicket, setShowREGTicket] = useState(false);
  const [showGreenCamp, setShowGreenCamp] = useState(false);
  const [showPrebuildTwo, setShowPrebuildTwo] = useState(false);
  const [showPrebuildThree, setShowPrebuildThree] = useState(false);

  const priceTotal =
    props.counterVIP * prices.priceVIP +
    props.counterREG * prices.priceREG +
    props.counterGreenCamp * prices.priceGreenCamp +
    props.counterPrebuildTwo * prices.pricePrebuildTwo +
    props.counterPrebuildThree * prices.pricePrebuildThree;

  // conster der definere hva de forskellige priser på biletter er

  useEffect(() => {
    if (props.counterVIP > 0) {
      setShowVIPTicket(true);
    } else if (props.counterREG > 0) {
      setShowREGTicket(true);
    } else if (props.counterVIP == 0) {
      setShowVIPTicket(false);
    } else if (props.counterREG == 0) {
      setShowREGTicket(false);
    }
  }, [props.counterVIP, props.counterREG]);

  useEffect(() => {
    if (props.counterGreenCamp > 0) {
      setShowGreenCamp(true);
    } else if (props.counterPrebuildTwo > 0) {
      setShowPrebuildTwo(true);
    } else if (props.counterPrebuildThree > 0) {
      setShowPrebuildThree(true);
    } else {
      setShowGreenCamp(false);
      setShowPrebuildTwo(false);
      setShowPrebuildThree(false);
    }
  }, [props.counterGreenCamp, props.counterPrebuildThree, props.counterPrebuildTwo]);

  return (
    <section className={styles.basket}>
      <h3>Order</h3>
      <h4>Tickets:</h4>
      <ul>
        {showVIPTicket && (
          <li>
            {/* her henter vi vores contervip ind som er sat til at tælle hvor mange 
          biletter der er valgt og gange det valgte billettal med pricevip som er sat til en bestemt pris 
          for så at få en total værdi af de valgte biletter lagt sammen  */}
            {props.counterVIP}x VIP - Price: {props.counterVIP * prices.priceVIP},-
          </li>
        )}
        {showREGTicket && (
          <li>
            {props.counterREG}x Standard - Price: {props.counterREG * prices.priceREG},-
          </li>
        )}
      </ul>
      <h4>Camping:</h4>
      <p>
        {!props.showPickedCamping ? (
          "None"
        ) : (
          <>
            {props.pickedCamping} <span> - Price: {prices.priceCampingspot},-</span>
          </>
        )}
      </p>
      <h4>Extras:</h4>
      <ul>
        {showGreenCamp && (
          <li>
            {props.counterGreenCamp}x Green Camping - Price:{" "}
            {props.counterGreenCamp * prices.priceGreenCamp},-
          </li>
        )}
        {showPrebuildTwo && (
          <li>
            {props.counterPrebuildTwo}x 2 person tent - Price:{" "}
            {props.counterPrebuildTwo * prices.pricePrebuildTwo},-
          </li>
        )}
        {showPrebuildThree && (
          <li>
            {props.counterPrebuildThree}x 3 person tent - Price:{" "}
            {props.counterPrebuildThree * prices.pricePrebuildThree},-
          </li>
        )}
      </ul>

      <h3>Total: {priceTotal + prices.priceCampingspot},-</h3>
    </section>
  );
}

export default Basket;
