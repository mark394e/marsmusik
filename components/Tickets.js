import TicketType from "./TicketType";
import Campingspot from "./Campingspot";
import { useState } from "react";
import TicketHolder from "./TicketHolder";

function Tickets(props) {
  const ticketAmount = props.counterREG + props.counterVIP;

  console.log(props.showCamping);
  return (
    <>
      <TicketType
        setCounterVIP={props.setCounterVIP}
        setCounterREG={props.setCounterREG}
        counterREG={props.counterREG}
        counterVIP={props.counterVIP}
      ></TicketType>
      <button onClick={() => props.setShowCamping(true)}>Continue</button>
      {props.showCamping &&
        props.campingspot.map((spot) => (
          <Campingspot data={spot} key={spot.area} ticketAmount={ticketAmount}></Campingspot>
        ))}
      {props.showCamping && (
        <button onClick={() => props.setShowTicketHolder(true)}>Continue</button>
      )}
      {props.showTicketHolder && <TicketHolder></TicketHolder>}
      {props.showTicketHolder && (
        <button onClick={() => props.setShowExtras(true)}>Continue</button>
      )}
    </>
  );
}

export default Tickets;
