import styles from "../styles/Basket.module.scss";
import prices from "../modules/prices.json";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";

function Basket(props) {
  const [showVIPTicket, setShowVIPTicket] = useState(false);
  const [showREGTicket, setShowREGTicket] = useState(false);
  const [showGreenCamp, setShowGreenCamp] = useState(false);
  const [showPrebuildTwo, setShowPrebuildTwo] = useState(false);
  const [showPrebuildThree, setShowPrebuildThree] = useState(false);
  const [priceCampingspot, setPriceCampingspot] = useState(0);

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
    } else if (props.counterVIP == 0) {
      setShowVIPTicket(false);
    }

    if (props.counterREG > 0) {
      setShowREGTicket(true);
    } else if (props.counterREG == 0) {
      setShowREGTicket(false);
    }
  }, [props.counterVIP, props.counterREG]);

  useEffect(() => {
    if (props.counterGreenCamp > 0) {
      setShowGreenCamp(true);
    } else if (props.counterGreenCamp == 0) {
      setShowGreenCamp(false);
    }

    if (props.counterPrebuildTwo > 0) {
      setShowPrebuildTwo(true);
    } else if (props.counterGreenCamp == 0) {
      setShowPrebuildTwo(false);
    }

    if (props.counterPrebuildThree > 0) {
      setShowPrebuildThree(true);
    } else if (props.counterGreenCamp == 0) {
      setShowPrebuildThree(false);
    }
  }, [props.counterGreenCamp, props.counterPrebuildThree, props.counterPrebuildTwo]);

  useEffect(() => {
    if (props.showPickedCamping) {
      setPriceCampingspot(99);
    }
  }, [props.showPickedCamping]);

  return (
    <section className={styles.basket}>
      <h3>Your order</h3>
      <div>
        <h4>TICKETS</h4>
        <ul>
          {showVIPTicket && (
            <li>
              {/* her henter vi vores contervip ind som er sat til at tælle hvor mange 
          biletter der er valgt og gange det valgte billettal med pricevip som er sat til en bestemt pris 
          for så at få en total værdi af de valgte biletter lagt sammen  */}
              {props.counterVIP} &#10799; VIP {props.counterVIP * prices.priceVIP},-
            </li>
          )}
          {showREGTicket && (
            <li>
              {props.counterREG} &#10799; Standard {props.counterREG * prices.priceREG}
              ,-
            </li>
          )}
        </ul>
      </div>
      <div>
        <h4>CAMPING</h4>
        <p>
          {!props.showPickedCamping ? (
            "None"
          ) : (
            <>
              {props.pickedCamping} <span> 99,-</span>
            </>
          )}
        </p>
      </div>
      <div>
        <h4>EXTRAS</h4>
        <ul>
          {showGreenCamp && (
            <li>
              {props.counterGreenCamp}x Green Camping{" "}
              {props.counterGreenCamp * prices.priceGreenCamp},-
            </li>
          )}
          {showPrebuildTwo && (
            <li>
              {props.counterPrebuildTwo}x 2 pers. tent{" "}
              {props.counterPrebuildTwo * prices.pricePrebuildTwo},-
            </li>
          )}
          {showPrebuildThree && (
            <li>
              {props.counterPrebuildThree}x 3 pers. tent{" "}
              {props.counterPrebuildThree * prices.pricePrebuildThree},-
            </li>
          )}
        </ul>
      </div>
      <hr />
      <h3>Total {priceTotal + priceCampingspot},-</h3>
      {props.showTimer && (
        <Countdown
          date={props.timer}
          renderer={(props) => (
            <div>
              {props.minutes}:{props.seconds}
            </div>
          )}
        ></Countdown>
      )}
    </section>
  );
}

export default Basket;
