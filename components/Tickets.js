import TicketType from "./TicketType";
import Campingspot from "./Campingspot";
import Extras from "./Extras";
import { useState } from "react";

function Tickets(props) {
  const [showCamping, setShowCamping] = useState(false);

  return (
    <>
      <TicketType
        setCounterVIP={props.setCounterVIP}
        setCounterREG={props.setCounterREG}
        counterREG={props.counterREG}
        counterVIP={props.counterVIP}
        setShowCamping={setShowCamping}
      ></TicketType>
      {props.counterVIP || props.counterREG > 0 ? <Campingspot /> : null}
      <Extras></Extras>
    </>
  );
}

export default Tickets;
