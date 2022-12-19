import { useState } from "react";
import { useEffect } from "react";
import Tickets from "../components/Tickets";
import PaymentForm from "../components/PaymentForm";
import Basket from "../components/Basket";
import configData from "../config.json";
import "../styles/BookingSite.module.scss";
import ThankYouSite from "./ThankYouSite";

function BookingSite() {
  const [pickedCamping, setPickedCamping] = useState("");
  const [ticketHolders, setTicketHolders] = useState([]);
  const [extras, setExtras] = useState([]);
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
  const [showBasket, setShowBasket] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [timer, setTimer] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const [reserveID, setReserveID] = useState(null);

  const [refreshPage, setRefreshPage] = useState(false);

  if (refreshPage) {
    window.location.reload(false);
    setRefreshPage(false);
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch(`${configData.url}/available-spots`);
      const data = await res.json();
      setCampingspot(data);
    }
    getData();
  }, []);

  useEffect(() => {
    if (counterVIP || counterREG > 0) {
      setShowBasket(true);
    } else if (counterVIP || counterREG == 0) {
      setShowBasket(false);
    }
  }, [counterVIP, counterREG]);

  return (
    <>
      {showThankYou ? (
        <ThankYouSite setShowThankYou={setShowThankYou}></ThankYouSite>
      ) : (
        <div className="bodybody">
          <div className="booking_bg"></div>
          <div className="ticket"></div>
          <h1>Tickets</h1>
          <h3>
            Select your choise of tickets, choose a campsite and add extras to
            make your stay even more comfortable.
          </h3>
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
            reserveID={reserveID}
            setReserveID={setReserveID}
            setShowTimer={setShowTimer}
            setTimer={setTimer}
            setCounterGreenCamp={setCounterGreenCamp}
            setCounterPrebuildThree={setCounterPrebuildThree}
            setCounterPrebuildTwo={setCounterPrebuildTwo}
            setShowPaymentForm={setShowPaymentForm}
            counterGreenCamp={counterGreenCamp}
            counterPrebuildTwo={counterPrebuildTwo}
            counterPrebuildThree={counterPrebuildThree}
            extras={extras}
            setExtras={setExtras}
            showPaymentForm={showPaymentForm}
          ></Tickets>
          {/* her færtæller vi hvad der skal vises når der trykkes på button  */}
          {/* hvad betyder &&?? */}

          {showPaymentForm && (
            <PaymentForm
              ticketHolders={ticketHolders}
              extras={extras}
              setExtras={setExtras}
              setTicketHolders={setTicketHolders}
              pickedCamping={pickedCamping}
              reserveID={reserveID}
              setReserveID={setReserveID}
              setShowThankYou={setShowThankYou}
            ></PaymentForm>
          )}
          {showBasket && (
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
              showTimer={showTimer}
              timer={timer}
              setRefreshPage={setRefreshPage}
            ></Basket>
          )}
        </div>
      )}
    </>
  );
}

export default BookingSite;
