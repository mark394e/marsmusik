import Tickets from "../components/Tickets";
import PaymentForm from "../components/PaymentForm";
import TicketHolder from "../components/TicketHolder";
import Basket from "../components/Basket";

function booking() {
  return (
    <>
      <Tickets>
        <p>Subtotal: 1234,-</p>
      </Tickets>
      <TicketHolder></TicketHolder>
      <PaymentForm></PaymentForm>
      <Basket></Basket>
    </>
  );
}

export default booking;
