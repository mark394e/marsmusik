import TicketType from "./TicketType";
import Campingspot from "./Campingspot";
import TicketHolder from "./TicketHolder";
import "../styles/Tickets.module.scss";

function Tickets(props) {
  // her plusser vi den vaælgte mængde af reg biletter med vip billetter for at få en samlet billet mængde
  // - det skal bla. bruges til at tjekke om der er nok ledige camping spots
  const ticketAmount = props.counterREG + props.counterVIP;
  return (
    <>
      <section className="around">
        <div className="ticketholder">
          {/* sender data videre ind i component */}
          <TicketType
            setCounterVIP={props.setCounterVIP}
            setCounterREG={props.setCounterREG}
            counterREG={props.counterREG}
            counterVIP={props.counterVIP}
          ></TicketType>
          {/* knap der bliver sat til true når der trykkes på den - hvorefter den vil vise campingspots */}
          {!props.showCamping && (
            <button onClick={() => props.setShowCamping(true)}>Continue</button>
          )}
          <div className="grid">
            {/* her mapper vi ignnem camping spots for at få vist alle */}
            {/* det her skal forklares bedre !!! */}
            {props.showCamping &&
              props.campingspot.map((spot) => (
                <Campingspot data={spot} key={spot.area} ticketAmount={ticketAmount}></Campingspot>
              ))}
          </div>
          {/* knap der får besked på at vise ticketholder når der trykkes på den */}
          {props.showCamping && !props.showTicketHolder && (
            <button onClick={() => props.setShowTicketHolder(true)}>Continue</button>
          )}
          {/* hvad sker der herunder ???? */}
          {props.showTicketHolder && <TicketHolder></TicketHolder>}
          {props.showTicketHolder && !props.showExtras && (
            <button onClick={() => props.setShowExtras(true)}>Continue</button>
          )}
        </div>
      </section>
    </>
  );
}

export default Tickets;
