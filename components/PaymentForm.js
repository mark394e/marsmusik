import "../styles/PaymentForm.module.scss";
import { insertOrder } from "../modules/db";
import { useRef } from "react";

function PaymentForm(props) {
  const theForm = useRef(null);

  function submit(e) {
    e.preventDefault();

    insertOrder({
      fullname: theForm.current.elements.fullname.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      zipcode: theForm.current.elements.zipcode.value,
      city: theForm.current.elements.city.value,
      ticketholder: [
        {
          fullname: props.ticketHolder.fullname,
          email: props.ticketHolder.email,
          tickettype: "reg",
        },
      ],
    });
  }
  return (
    <>
      <section id="paymentform">
        <form className="forms" onSubmit={submit} ref={theForm}>
          <label htmlFor="fullname">
            {" "}
            Full name
            <input type="text" id="fullname" name="fullname" />
          </label>
          <label htmlFor="email">
            E-mail
            <input type="email" id="email" name="email" />
          </label>
          <label htmlFor="address">
            Address
            <input type="text" id="address" name="address" />
          </label>
          <label htmlFor="zipcode">
            Zip code
            <input type="text" inputMode="numeric" id="zipcode" name="zipcode" />
          </label>
          <label htmlFor="city">
            City
            <input type="text" id="city" name="city" />
          </label>
          <button>submit</button>
        </form>

        <form className="forms">
          <label htmlFor="cardholder">
            Cardholder name
            <input type="text" id="cardholder" name="cardholder" />
          </label>
          <label htmlFor="cardnumber">
            Credit card number
            <input
              type="text"
              inputMode="numeric"
              maxLength="16"
              id="cardnumber"
              name="cardnumber"
            />
          </label>
          <label htmlFor="month">
            Month
            <input type="text" inputMode="numeric" maxLength="2" id="month" name="month" />
          </label>
          <label htmlFor="year">
            Year
            <input type="text" inputMode="numeric" maxLength="2" id="year" name="year" />
          </label>
          <label htmlFor="cvv">
            CVV
            <input type="text" inputMode="numeric" maxLength="3" id="cvv" name="cvv" />
          </label>
        </form>
      </section>
    </>
  );
}

export default PaymentForm;
