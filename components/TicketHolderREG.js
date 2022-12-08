import "../styles/Ticketholder.module.scss";
import { useRef } from "react";
import { useState } from "react";

function TicketHolderREG(props) {
  const ticketHolderForm = useRef(null);

  function submit(e) {
    e.preventDefault();
    props.setTicketHolders((current) => [
      ...current,
      {
        fullname: ticketHolderForm.current.elements.fullname.value,
        email: ticketHolderForm.current.elements.email.value,
        tickettype: "REG",
      },
    ]);
    // props.ticketHolderArr.push({
    //   fullname: ticketHolderForm.current.elements.fullname.value,
    //   email: ticketHolderForm.current.elements.email.value,
    //   tickettype: "REG",
    // });
    console.log(props.ticketHolders);
  }

  //giver besked "thank you" når der trykket submit på knap
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  if (sent) {
    return (
      <>
        <div className="thankyou">
          <h2>Thank you!</h2>
          <p>- info sent</p>
        </div>
      </>
    );
  }

  // KODE FUNDET HER !! https://bobbyhadz.com/blog/react-check-if-email-is-valid

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <>
      <div className="formticketholder">
        <h3>Standard ticket</h3>
        <form id="ticketholderform" onSubmit={submit} ref={ticketHolderForm}>
          <label htmlFor="fullname">
            {" "}
            Full name
            <input type="text" id="fullname" name="fullname" />
          </label>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              // required
              value={email}
              onChange={handleChange}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </label>
          <button onClick={() => setSent(true)}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default TicketHolderREG;
