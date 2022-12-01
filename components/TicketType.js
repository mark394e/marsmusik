import "../styles/Tickettype.module.scss";

function TicketType(props) {
  const increaseVIP = () => {
    props.setCounterVIP((count) => count + 1);
  };

  const decreaseVIP = () => {
    if (props.counterVIP > 0) {
      props.setCounterVIP((count) => count - 1);
    }
  };

  const increaseREG = () => {
    props.setCounterREG((count) => count + 1);
  };

  const decreaseREG = () => {
    if (props.counterREG > 0) {
      props.setCounterREG((count) => count - 1);
    }
  };

  return (
    <section>
      <div className="ticket" id="vip-ticket">
        <p>Ticket type</p>
        <p>Price</p>
        <p>Total</p>
        <div>VIP</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <div className="counter">
          <button onClick={decreaseVIP} className="counter-minus">
            -
          </button>
          <span>{props.counterVIP}</span>
          <button onClick={increaseVIP} className="counter-plus">
            +
          </button>
        </div>
      </div>
      <div className="ticket" id="reg-ticket">
        <p>Ticket type</p>
        <p>Price</p>
        <p>Total</p>
        <div>REGULAR</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <div className="counter">
          <button onClick={decreaseREG} className="counter-minus">
            -
          </button>
          <span>{props.counterREG}</span>
          <button onClick={increaseREG} className="counter-plus">
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default TicketType;
