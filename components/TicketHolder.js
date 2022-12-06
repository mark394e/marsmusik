import "../styles/Ticketholder.module.scss";
import { useRef } from "react";

function TicketHolder(props) {
  const ticketHolderForm = useRef(null);

  function submit(e) {
    e.preventDefault();
    props.setTicketHolder({
      fullname: ticketHolderForm.current.elements.fullname.value,
      email: ticketHolderForm.current.elements.email.value,
    });
  }

  return (
    <>
      <form id="ticketholderform" onSubmit={submit} ref={ticketHolderForm}>
        <label htmlFor="fullname">
          {" "}
          Full name
          <input type="text" id="fullname" name="fullname" />
        </label>
        <label htmlFor="email">
          E-mail
          <input type="email" id="email" name="email" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default TicketHolder;
