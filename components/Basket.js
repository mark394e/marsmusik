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

  // Hvis antallet af både VIP og Standard billeter er større end 0, sættes deres State til true og de vises de i Basket
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

  // Hvis antallet af divers extras er større end 0, sættes deres State til true og de vises de i Basket
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

  // sætter prisen på campingspot til 99,- hvis der er valgt et campingspot
  useEffect(() => {
    if (props.showPickedCamping) {
      setPriceCampingspot(99);
    }
  }, [props.showPickedCamping]);

  return (
    <section className={styles.basket}>
      <h3>Your order</h3>
      {/* Hvis showTimer er true vises Countdown (npm install). Udseendet på timeren er ændret vha. indbyggede custom props. */}
      {props.showTimer && (
        <Countdown
          onComplete={() => props.setRefreshPage(true)}
          date={props.timer}
          renderer={(props) => (
            <div className="basketTimer">
              {props.minutes}:{props.seconds}
            </div>
          )}
        ></Countdown>
      )}
      <div className="mobileBasket">
        <div>
          <h4>TICKETS</h4>
          <ul>
            {showVIPTicket && (
              <li>
                {/* værdien fra counterVIP-prop vises og multipliceres med den faste pris (hentet fra lokal JSON). */}
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
            {/* Campingspot er sat til "None" indtil der er showPickedCamping er true. Det valgte campingspot indsættes i p-tagget. */}
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
      </div>
      <hr />
      {/* Den totale udregnet pris adderes med prisen på ét enkelt campingspot (booking fee 99,-) */}
      <h3>Total {priceTotal + priceCampingspot},-</h3>
    </section>
  );
}

export default Basket;
