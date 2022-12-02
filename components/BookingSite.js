import { useState } from "react";
import { useEffect } from "react";
import Tickets from "../components/Tickets";
import PaymentForm from "../components/PaymentForm";
import TicketHolder from "../components/TicketHolder";
import Basket from "../components/Basket";
import configData from "../config.json";

function BookingSite() {
  const [counterVIP, setCounterVIP] = useState(0);
  const [counterREG, setCounterREG] = useState(0);
  const [campingspot, setCampingspot] = useState([]);

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
      >
        <p>Subtotal: 1234,-</p>
      </Tickets>
      <TicketHolder></TicketHolder>
      <PaymentForm></PaymentForm>
      <Basket></Basket>
    </>
  );
}

export default BookingSite;
