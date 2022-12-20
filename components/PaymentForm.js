import "../styles/PaymentForm.module.scss";
import { insertOrder, fullfillReservation } from "../modules/db";
import { useRef } from "react";
import { useState } from "react";

function PaymentForm(props) {
  const theForm = useRef(null);
  const [txt, setTxt] = useState("");
  const [txt2, setTxt2] = useState("");
  const [zip, setZip] = useState("");
  const [creditcard, setCreidtcard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  function submit(e) {
    e.preventDefault();

    insertOrder({
      fullname: theForm.current.elements.fullname.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      zipcode: theForm.current.elements.zipcode.value,
      city: theForm.current.elements.city.value,
      ticketholder: props.ticketHolders,
      campingspot: props.pickedCamping,
      extras: props.extras,
    });

    fullfillReservation({ id: props.reserveID });
    props.setShowThankYou(true);
  }

  //til numbers og til at hoppe videre til næste felt hvis de skal det
  function inputChange(e) {
    if (e.target.value.length == e.target.maxLength) {
      console.log("something ");
      e.target.parentElement.nextElementSibling.firstElementChild.focus();
    }
    const { value } = e.target;

    if (e.target.id === "cardnumber") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setCreidtcard(value);
      }
    } else if (e.target.id === "month") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setMonth(value);
      }
    } else if (e.target.id === "year") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setYear(value);
      }
    }
  }

  //denne kører functioner på de inputfelter der ikke skal hoppe aoutomatisk videre
  //men som skal have en valudation på enten tal eller nummer
  function onInputChange(e) {
    const { value } = e.target;

    if (e.target.id === "fullname") {
      const re = /^[a-zæøåäöü\s]+$/gi;
      if (value === "" || re.test(value)) {
        setTxt(value);
      }
    } else if (e.target.id === "cardholder") {
      const re = /^[a-zæøåäöü\s]+$/gi;
      if (value === "" || re.test(value)) {
        setTxt2(value);
      }
    } else if (e.target.id === "zipcode") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setZip(value);
      }
    } else if (e.target.id === "cvv") {
      const re = /^[\d]+$/g;
      if (value === "" || re.test(value)) {
        setCvv(value);
      }
    }
  }

  return (
    <>
      <section id="paymentform">
        <h2>Checkout</h2>
        <form className="forms" onSubmit={submit} ref={theForm}>
          <div className="buyerinfo">
            <label htmlFor="fullname">
              {" "}
              Full name
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder="Full name "
                onChange={onInputChange}
                value={txt}
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                placeholder="abc@gmail.com"
                aria-describedby="hint-mail"
                required
              />
              <span className="error" id="err-mail" aria-live="assertive">
                Type in your email address
              </span>
            </label>

            <label htmlFor="address">
              Address
              <input type="text" id="address" name="address" required placeholder="Address" />
            </label>
            <div className="flexit">
              <label htmlFor="city">
                City
                <input type="text" id="city" name="city" required placeholder="City" />
              </label>
              <label htmlFor="zipcode">
                Zip code
                <input
                  type="text"
                  inputMode="numeric"
                  id="zipcode"
                  name="zipcode"
                  onInput={onInputChange}
                  value={zip}
                  maxLength={4}
                  minLength={3}
                  required
                  placeholder="Zip code"
                  aria-describedby="hint-zip"
                />
                <span className="error" id="err-zip" aria-live="assertive">
                  choose at least 3 numbers
                </span>
              </label>
            </div>
          </div>
          <div className="cardinfo">
            <label htmlFor="cardholder">
              Cardholder name
              <input
                type="text"
                id="cardholder"
                name="cardholder"
                required
                placeholder="Cardholder name"
                onChange={onInputChange}
                value={txt2}
              />
            </label>
            <label htmlFor="cardnumber">
              Credit card number
              <input
                onInput={inputChange}
                value={creditcard}
                type="text"
                inputMode="numeric"
                maxLength={16}
                minLength={16}
                id="cardnumber"
                name="cardnumber"
                required
                placeholder="XXXXXXXXXXXXXXXX"
                aria-describedby="hint-cardnumber"
              />
              <span className="error" id="err-cardnumber" aria-live="assertive">
                type at least 16 numbers
              </span>
            </label>
            <div className="flexit">
              <label htmlFor="month">
                Month
                <input
                  onInput={inputChange}
                  value={month}
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  minLength={2}
                  id="month"
                  name="month"
                  placeholder="XX"
                  required
                  aria-describedby="hint-month"
                />
                <span className="error" id="err-month" aria-live="assertive">
                  type at least 2 numbers
                </span>
              </label>
              <label htmlFor="year">
                Year
                <input
                  onInput={inputChange}
                  value={year}
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  minLength={2}
                  id="year"
                  name="year"
                  placeholder="XX"
                  required
                  aria-describedby="hint-year"
                />
                <span className="error" id="err-year" aria-live="assertive">
                  type at least 2 numbers
                </span>
              </label>
              <label htmlFor="cvv">
                CVV
                <input
                  onChange={onInputChange}
                  value={cvv}
                  type="text"
                  inputMode="numeric"
                  maxLength={3}
                  minLength={3}
                  id="cvv"
                  name="cvv"
                  placeholder="XXX"
                  required
                  aria-describedby="hint-cvv"
                />
                <span className="error" id="err-cvv" aria-live="assertive">
                  type at least 3 numbers
                </span>
              </label>
            </div>
          </div>
          <button className="submitBtn">book now</button>
        </form>

        {/* <form className="forms"></form> */}
      </section>
    </>
  );
}

export default PaymentForm;
