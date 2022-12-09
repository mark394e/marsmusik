import TicketType from "./TicketType";
import Campingspot from "./Campingspot";
import TicketHolderREG from "./TicketHolderREG";
import TicketHolderVIP from "./TicketHolderVIP";
import "../styles/Tickets.module.scss";
import configData from "../config.json";

function Tickets(props) {
  // her plusser vi den vaælgte mængde af reg biletter med vip billetter for at få en samlet billet mængde
  // - det skal bla. bruges til at tjekke om der er nok ledige camping spots
  const ticketAmount = props.counterREG + props.counterVIP;

  const ticketholdersREG = Array.from({ length: props.counterREG }, (_, index) => {
    return (
      <TicketHolderREG
        key={index}
        ticketHolderArr={props.ticketHolderArr}
        ticketHolders={props.ticketHolders}
        setTicketHolders={props.setTicketHolders}
      ></TicketHolderREG>
    );
  });

  const ticketholdersVIP = Array.from({ length: props.counterVIP }, (_, index) => {
    return (
      <TicketHolderVIP
        key={index}
        ticketHolderArr={props.ticketHolderArr}
        ticketHolders={props.ticketHolders}
        setTicketHolders={props.setTicketHolders}
      ></TicketHolderVIP>
    );
  });

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
          <div className="camping-wrapper">
            {/* her mapper vi ignnem camping spots for at få vist alle */}
            {/* det her skal forklares bedre !!! */}
            {props.showCamping && (
              <>
                <h3>Pick a campingspot:</h3>
                <p>99,- for one area</p>
                <div className="campingspot-container">
                  {props.campingspot.map((spot) => (
                    <Campingspot
                      data={spot}
                      key={spot.area}
                      ticketAmount={ticketAmount}
                      setPickedCamping={props.setPickedCamping}
                      pickedCamping={props.pickedCamping}
                      showPickedCamping={props.showPickedCamping}
                      setShowPickedCamping={props.setShowPickedCamping}
                      reserveID={props.reserveID}
                      setReserveID={props.setReserveID}
                    ></Campingspot>
                  ))}
                </div>
              </>
            )}
          </div>
          {/* knap der får besked på at vise ticketholder når der trykkes på den */}
          {props.showCamping && !props.showTicketHolder && (
            <button onClick={() => props.setShowTicketHolder(true)}>Continue</button>
          )}
          {/* hvad sker der herunder ???? */}
          {props.showTicketHolder ? (
            <>
              {ticketholdersVIP} {ticketholdersREG}
            </>
          ) : null}
          {props.showTicketHolder && !props.showExtras && (
            <button onClick={() => props.setShowExtras(true)}>Continue</button>
          )}
        </div>
      </section>
    </>
  );
}

export default Tickets;
