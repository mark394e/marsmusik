import "../styles/PaymentForm.module.scss";

function PaymentForm() {
  return (
    <>
      <section id="paymentform">
        <form className="forms">
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
            <input
              type="text"
              inputMode="numeric"
              id="zipcode"
              name="zipcode"
            />
          </label>
          <label htmlFor="city">
            City
            <input type="text" id="city" name="city" />
          </label>
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
            <input
              type="text"
              inputMode="numeric"
              maxLength="2"
              id="month"
              name="month"
            />
          </label>
          <label htmlFor="year">
            Year
            <input
              type="text"
              inputMode="numeric"
              maxLength="2"
              id="year"
              name="year"
            />
          </label>
          <label htmlFor="cvv">
            CVV
            <input
              type="text"
              inputMode="numeric"
              maxLength="3"
              id="cvv"
              name="cvv"
            />
          </label>
        </form>
      </section>
    </>
  );
}

export default PaymentForm;
