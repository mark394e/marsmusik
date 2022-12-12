import "../styles/Ticketholder.module.scss";
import { useRef } from "react";
import { useState } from "react";

function TicketHolderVIP(props) {
  const ticketHolderForm = useRef(null);

  function submit(e) {
    e.preventDefault();
    props.setTicketHolders((current) => [
      ...current,
      {
        fullname: ticketHolderForm.current.elements.fullname.value,
        email: ticketHolderForm.current.elements.email.value,
        tickettype: "VIP",
      },
    ]);
    // props.ticketHolderArr.push({
    //   fullname: ticketHolderForm.current.elements.fullname.value,
    //   email: ticketHolderForm.current.elements.email.value,
    //   tickettype: "VIP",
    // });
    console.log(props.ticketHolders);
  }

  //giver besked "thank you" når der trykket submit på knap
  const [sent, setSent] = useState(false);
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

  return (
    <>
      <div className="formticketholder">
        <h3>VIP ticket</h3>
        <form id="ticketholderform" onSubmit={submit} ref={ticketHolderForm}>
          <label htmlFor="fullname">
            {" "}
            Full name
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Fullname"
              required
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
          </label>
          <button onClick={() => setSent(true)}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default TicketHolderVIP;
