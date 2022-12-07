import "../styles/Ticketholder.module.scss";
import { useRef } from "react";

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

  return (
    <>
      <h3>Standard ticket</h3>
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

export default TicketHolderREG;
