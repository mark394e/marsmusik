import "../styles/Ticketholder.module.scss";

function TicketHolder() {
  return (
    <>
      <form id="ticketholderform">
        <label htmlFor="fullname">
          {" "}
          Full name
          <input type="text" id="fullname" name="fullname" />
        </label>
        <label htmlFor="email">
          E-mail
          <input type="email" id="email" name="email" />
        </label>
      </form>
    </>
  );
}

export default TicketHolder;
