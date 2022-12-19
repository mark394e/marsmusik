import styles from "../styles/Basket.module.scss";
import prices from "../modules/prices.json";
import { useState, useEffect } from "react";
import Countdown, { zeroPad } from "react-countdown";

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
  }, [
    props.counterGreenCamp,
    props.counterPrebuildThree,
    props.counterPrebuildTwo,
  ]);

  // sætter prisen på campingspot til 99,- hvis der er valgt et campingspot
  useEffect(() => {
    if (props.showPickedCamping) {
      setPriceCampingspot(99);
    }
  }, [props.showPickedCamping]);

  const renderer = ({ minutes, seconds }) => (
    <div className="basketTimer">
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </div>
  );

  return (
    <section className={styles.basket}>
      <h3>Your order</h3>
      {/* Hvis showTimer er true vises Countdown (npm install). Udseendet på timeren er ændret vha. indbyggede custom props. */}
      {props.showTimer && (
        <Countdown
          onComplete={() => props.setRefreshPage(true)}
          date={props.timer}
          renderer={renderer}
        ></Countdown>
      )}
      <div className="mobileBasket">
        <div>
          <h4>TICKETS</h4>
          <ul>
            {showVIPTicket && (
              <li>
                {/* værdien fra counterVIP-prop vises og multipliceres med den faste pris (hentet fra lokal JSON). */}
                <span className="fat">{props.counterVIP}</span>

                <span className="small">
                  <span> VIP </span>
                  <span className="fat">
                    {props.counterVIP * prices.priceVIP},-
                  </span>
                </span>
              </li>
            )}
            {showREGTicket && (
              <li>
                <span className="fat">{props.counterREG}</span>
                <span className="small">
                  <span> Standard</span>
                  <span className="fat">
                    {props.counterREG * prices.priceREG}
                    ,-
                  </span>
                </span>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>CAMPING</h4>
          <p>
            {/* Campingspot er sat til "None" indtil der er showPickedCamping er true. Det valgte campingspot indsættes i p-tagget. */}
            <span className="small">
              {!props.showPickedCamping ? (
                "None"
              ) : (
                <>
                  <span>{props.pickedCamping}</span>{" "}
                  <span className="fat"> 99,-</span>
                </>
              )}
            </span>
          </p>
        </div>
        <div>
          <h4>EXTRAS</h4>
          <ul>
            {showGreenCamp && (
              <li>
                <span className="fat"> {props.counterGreenCamp}</span>
                <span className="small">
                  <span> Green Camping </span>
                  <span className="fat">
                    {props.counterGreenCamp * prices.priceGreenCamp}
                    ,-
                  </span>
                </span>
              </li>
            )}
            {showPrebuildTwo && (
              <li>
                <span className="fat"> {props.counterPrebuildTwo}</span>
                <span className="small">
                  <span> 2 pers. tent</span>
                  <span className="fat">
                    {props.counterPrebuildTwo * prices.pricePrebuildTwo},-
                  </span>
                </span>
              </li>
            )}
            {showPrebuildThree && (
              <li>
                <span className="fat">{props.counterPrebuildThree}</span>{" "}
                <span className="small">
                  <span> 3 pers. tent</span>
                  <span className="fat">
                    {props.counterPrebuildThree * prices.pricePrebuildThree},-
                  </span>
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* <hr /> */}
      {/* Den totale udregnet pris adderes med prisen på ét enkelt campingspot (booking fee 99,-) */}
      <h3>Total {priceTotal + priceCampingspot},-</h3>
    </section>
  );
}

export default Basket;
