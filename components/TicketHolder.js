import React from "react";

function TicketHolder() {
  return (
    <>
      <form>
        <label for="fullname">
          {" "}
          Full name
          <input type="text" id="fullname" name="fullname" />
        </label>
        <label for="email">
          E-mail
          <input type="email" id="email" name="email" />
        </label>
      </form>
    </>
  );
}

export default TicketHolder;
