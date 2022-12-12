import "../styles/PaymentForm.module.scss";
import { insertOrder, fullfillReservation } from "../modules/db";
import { useRef } from "react";
import { useState } from "react";

function PaymentForm(props) {
  const theForm = useRef(null);
  const [txt, setTxt] = useState("");
  const [txt2, setTxt2] = useState("");
  // const [txt3, setTxt3] = useState("");

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
    });

    console.log(props.reserveID);

    fullfillReservation({ id: props.reserveID });
  }
  // det her virker hvis man fjerner labels... så vil den hoppe fra input felt til inputfelt
  // når maxlenght er her nået - meeeeeen ligenu er lorte labels ivejen mææhh
  // document.querySelectorAll("input").forEach((el) => {
  //   el.addEventListener("input", (e) => {
  //     if (e.target.value.length == e.target.maxLength) {
  //       console.log("something ");
  //       e.target.parentElement.nextElementSibling.firstElementChild.focus();
  //     }
  //   });
  // });

  function inputChange(e) {
    if (e.target.value.length == e.target.maxLength) {
      console.log("something ");
      e.target.parentElement.nextElementSibling.firstElementChild.focus();
    }
  }

  // validate name
  const onInputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re = /^[A-ø a-ø]+$/;
    if (value === "" || re.test(value)) {
      setTxt(value);
    }
  };

  const on2InputChange = (e) => {
    const { value } = e.target;
    console.log("Input value: ", value);

    const re2 = /^[A-ø a-ø]+$/;
    if (value === "" || re2.test(value)) {
      setTxt2(value);
    }
  };

  //numbers

  // const on3InputChange = (event) => {
  //   const { value } = event.target;
  //   console.log("Input value: ", value);

  //   const re3 = /^[0-9 9-0]+$/;
  //   if (value === "" || re3.test(value)) {
  //     setTxt3(value);
  //   }
  // };

  // KODE FUNDET HER !! https://bobbyhadz.com/blog/react-check-if-email-is-valid

  // const [email, setEmail] = useState("");
  // const [error, setError] = useState(null);

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  // const handleChange = (event) => {
  //   if (!isValidEmail(event.target.value)) {
  //     setError("Email is invalid");
  //   } else {
  //     setError(null);
  //   }

  //   setEmail(event.target.value);
  // };

  return (
    <>
      <section id="paymentform">
        <form
          // action=""
          // onsubmit="return false;"
          className="forms"
          onSubmit={submit}
          ref={theForm}
        >
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
            <span class="error" id="err-mail" aria-live="assertive">
              Type in your email address
            </span>
          </label>

          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              name="address"
              required
              placeholder="Address"
            />
          </label>
          <div className="flexit">
            <label htmlFor="zipcode">
              Zip code
              <input
                onInput={inputChange}
                type="text"
                inputMode="numeric"
                id="zipcode"
                name="zipcode"
                maxLength={4}
                required
                placeholder="Zip code"
              />
            </label>
            <label htmlFor="city">
              City
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="City"
              />
            </label>
          </div>
          <button>submit</button>
        </form>

        <form className="forms">
          <label htmlFor="cardholder">
            Cardholder name
            <input
              type="text"
              id="cardholder"
              name="cardholder"
              required
              placeholder="Cardholder name"
              onChange={on2InputChange}
              value={txt2}
            />
          </label>
          <label htmlFor="cardnumber">
            Credit card number
            <input
              onInput={inputChange}
              type="text"
              inputMode="numeric"
              maxLength={16}
              id="cardnumber"
              name="cardnumber"
              required
              placeholder="XXXXXXXXXXXXXXXX"
              // onChange={on3InputChange}
              // value={txt3}
            />
          </label>
          <div className="flexit">
            <label htmlFor="month">
              Month
              <input
                onInput={inputChange}
                type="text"
                inputMode="numeric"
                maxLength={2}
                id="month"
                name="month"
                placeholder="XX"
                required
              />
            </label>
            <label htmlFor="year">
              Year
              <input
                onInput={inputChange}
                type="text"
                inputMode="numeric"
                maxLength={2}
                id="year"
                name="year"
                placeholder="XX"
                required
              />
            </label>
            <label htmlFor="cvv">
              CVV
              <input
                type="text"
                inputMode="numeric"
                maxLength={3}
                id="cvv"
                name="cvv"
                placeholder="XXX"
                required
              />
            </label>
          </div>
        </form>
      </section>
    </>
  );
}

export default PaymentForm;
