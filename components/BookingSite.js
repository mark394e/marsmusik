import { useState } from "react";
import { useEffect } from "react";
import Tickets from "../components/Tickets";
import PaymentForm from "../components/PaymentForm";
import Extras from "../components/Extras";
import Basket from "../components/Basket";
import configData from "../config.json";
import "../styles/BookingSite.module.scss";

function BookingSite() {
  const [pickedCamping, setPickedCamping] = useState("");
  const [ticketHolders, setTicketHolders] = useState([]);
  const [counterVIP, setCounterVIP] = useState(0);
  const [counterREG, setCounterREG] = useState(0);
  const [counterGreenCamp, setCounterGreenCamp] = useState(0);
  const [counterPrebuildTwo, setCounterPrebuildTwo] = useState(0);
  const [counterPrebuildThree, setCounterPrebuildThree] = useState(0);
  const [campingspot, setCampingspot] = useState([]);
  const [showExtras, setShowExtras] = useState(false);
  const [showCamping, setShowCamping] = useState(false);
  const [showTicketHolder, setShowTicketHolder] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showPickedCamping, setShowPickedCamping] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${configData.url}/available-spots`);
      const data = await res.json();
      setCampingspot(data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="bodybody">
        {" "}
        <Tickets
          // her henter fortæller vi hvilket data de forskellige components skal hente ind så de kan bruges
          setCounterVIP={setCounterVIP}
          setCounterREG={setCounterREG}
          counterREG={counterREG}
          counterVIP={counterVIP}
          campingspot={campingspot}
          setShowCamping={setShowCamping}
          setShowTicketHolder={setShowTicketHolder}
          setShowExtras={setShowExtras}
          showCamping={showCamping}
          showTicketHolder={showTicketHolder}
          showExtras={showExtras}
          pickedCamping={pickedCamping}
          setPickedCamping={setPickedCamping}
          showPickedCamping={showPickedCamping}
          setShowPickedCamping={setShowPickedCamping}
          ticketHolders={ticketHolders}
          setTicketHolders={setTicketHolders}
        ></Tickets>
        {/* her færtæller vi hvad der skal vises når der trykkes på button  */}
        {/* hvad betyder &&?? */}
        <div className="extra-placement">
          {showExtras && (
            <Extras
              counterGreenCamp={counterGreenCamp}
              counterPrebuildTwo={counterPrebuildTwo}
              counterPrebuildThree={counterPrebuildThree}
              setCounterGreenCamp={setCounterGreenCamp}
              setCounterPrebuildTwo={setCounterPrebuildTwo}
              setCounterPrebuildThree={setCounterPrebuildThree}
            ></Extras>
          )}
        </div>
        {showExtras && (
          <button onClick={() => setShowPaymentForm(true)}>Continue</button>
        )}
        {showPaymentForm && (
          <PaymentForm
            ticketHolders={ticketHolders}
            setTicketHolders={setTicketHolders}
          ></PaymentForm>
        )}
        <Basket
          counterREG={counterREG}
          counterVIP={counterVIP}
          campingspot={campingspot}
          pickedCamping={pickedCamping}
          showPickedCamping={showPickedCamping}
          setShowPickedCamping={setShowPickedCamping}
          counterGreenCamp={counterGreenCamp}
          counterPrebuildTwo={counterPrebuildTwo}
          counterPrebuildThree={counterPrebuildThree}
        ></Basket>
      </div>
    </>
  );
}

export default BookingSite;
