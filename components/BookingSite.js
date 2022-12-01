import { useState } from "react";
import Tickets from "../components/Tickets";
import PaymentForm from "../components/PaymentForm";
import TicketHolder from "../components/TicketHolder";
import Basket from "../components/Basket";

function BookingSite() {
  const [counterVIP, setCounterVIP] = useState(0);
  const [counterREG, setCounterREG] = useState(0);

  return (
    <>
      {" "}
      <Tickets
        setCounterVIP={setCounterVIP}
        setCounterREG={setCounterREG}
        counterREG={counterREG}
        counterVIP={counterVIP}
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
