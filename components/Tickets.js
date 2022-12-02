import TicketType from "./TicketType";
import Campingspot from "./Campingspot";
import Extras from "./Extras";
import { useState } from "react";

function Tickets(props) {
  const [showCamping, setShowCamping] = useState(false);

  const ticketAmount = props.counterREG + props.counterVIP;

  return (
    <>
      <TicketType
        setCounterVIP={props.setCounterVIP}
        setCounterREG={props.setCounterREG}
        counterREG={props.counterREG}
        counterVIP={props.counterVIP}
      ></TicketType>
      {props.counterVIP || props.counterREG > 0
        ? props.campingspot.map((spot) => (
            <Campingspot data={spot} key={spot.area} ticketAmount={ticketAmount}></Campingspot>
          ))
        : null}
      <Extras></Extras>
    </>
  );
}

export default Tickets;
