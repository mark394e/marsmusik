import "../styles/Tickettype.module.scss";

function TicketType() {
  return (
    <section>
      <div className="ticket" id="vip-ticket">
        <p>Ticket type</p>
        <p>Price</p>
        <p>Total</p>
        <div>VIP</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <p>- 2 +</p>
      </div>
      <div className="ticket" id="reg-ticket">
        <p>Ticket type</p>
        <p>Price</p>
        <p>Total</p>
        <div>REGULAR</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <p>- 2 +</p>
      </div>
    </section>
  );
}

export default TicketType;
