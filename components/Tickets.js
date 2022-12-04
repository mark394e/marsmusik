import TicketType from "./TicketType";
import Campingspot from "./Campingspot";
import { useState } from "react";
import TicketHolder from "./TicketHolder";
import "../styles/Tickets.module.scss";

function Tickets(props) {
  const ticketAmount = props.counterREG + props.counterVIP;

  console.log(props.showCamping);
  return (
    <>
      <section className="around">
        <div className="ticketholder">
          <TicketType
            setCounterVIP={props.setCounterVIP}
            setCounterREG={props.setCounterREG}
            counterREG={props.counterREG}
            counterVIP={props.counterVIP}
          ></TicketType>
          <button onClick={() => props.setShowCamping(true)}>Continue</button>
          <div className="grid">
            {props.showCamping &&
              props.campingspot.map((spot) => (
                <Campingspot
                  data={spot}
                  key={spot.area}
                  ticketAmount={ticketAmount}
                ></Campingspot>
              ))}
          </div>
          {props.showCamping && (
            <button onClick={() => props.setShowTicketHolder(true)}>
              Continue
            </button>
          )}

          {props.showTicketHolder && <TicketHolder></TicketHolder>}
          {props.showTicketHolder && (
            <button onClick={() => props.setShowExtras(true)}>Continue</button>
          )}
        </div>
      </section>
    </>
  );
}

export default Tickets;
