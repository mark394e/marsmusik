import "../styles/PaymentForm.module.scss";

function PaymentForm() {
  return (
    <>
      <section id="paymentform">
        <form className="forms">
          <label for="fullname">
            {" "}
            Full name
            <input type="text" id="fullname" name="fullname" />
          </label>
          <label for="email">
            E-mail
            <input type="email" id="email" name="email" />
          </label>
          <label for="address">
            Address
            <input type="text" id="address" name="address" />
          </label>
          <label for="zipcode">
            Zip code
            <input type="text" inputmode="numeric" id="zipcode" name="zipcode" />
          </label>
          <label for="city">
            City
            <input type="text" id="city" name="city" />
          </label>
        </form>

        <form className="forms">
          <label for="cardholder">
            Cardholder name
            <input type="text" id="cardholder" name="cardholder" />
          </label>
          <label for="cardnumber">
            Credit card number
            <input
              type="text"
              inputmode="numeric"
              maxlength="16"
              id="cardnumber"
              name="cardnumber"
            />
          </label>
          <label for="month">
            Month
            <input type="text" inputmode="numeric" maxlength="2" id="month" name="month" />
          </label>
          <label for="year">
            Year
            <input type="text" inputmode="numeric" maxlength="2" id="year" name="year" />
          </label>
          <label for="cvv">
            CVV
            <input type="text" inputmode="numeric" maxlength="3" id="cvv" name="cvv" />
          </label>
        </form>
      </section>
    </>
  );
}

export default PaymentForm;
