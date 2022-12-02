import { useState } from "react";
import { useEffect } from "react";
import Tickets from "../components/Tickets";
import PaymentForm from "../components/PaymentForm";
import Extras from "../components/Extras";
import Basket from "../components/Basket";
import configData from "../config.json";

function BookingSite() {
  const [counterVIP, setCounterVIP] = useState(0);
  const [counterREG, setCounterREG] = useState(0);
  const [campingspot, setCampingspot] = useState([]);
  const [showExtras, setShowExtras] = useState(false);
  const [showCamping, setShowCamping] = useState(false);
  const [showTicketHolder, setShowTicketHolder] = useState(false);

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
      {" "}
      <Tickets
        setCounterVIP={setCounterVIP}
        setCounterREG={setCounterREG}
        counterREG={counterREG}
        counterVIP={counterVIP}
        campingspot={campingspot}
        setShowCamping={setShowCamping}
        setShowTicketHolder={setShowTicketHolder}
        showCamping={showCamping}
        showTicketHolder={showTicketHolder}
      >
        <p>Subtotal: 1234,-</p>
      </Tickets>
      <Extras></Extras>
      <PaymentForm></PaymentForm>
      <Basket></Basket>
    </>
  );
}

export default BookingSite;
