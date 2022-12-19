import "../styles/Tickettype.module.scss";

// her definere vi nogle constanter der fortæller hvad der skal ske når der klikkes på henholdsvis + eller - både i reg og vip billet

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
    <section className="tickettype">
      <div className="ticket" id="vip-ticket">
        <div className="extra-heading">
          <p>Ticket type</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <div className="border">
          <div className="gold">VIP</div>
          <div className="orange">1299,-</div>
          <div className="white">{props.counterVIP * 1299},-</div>
        </div>
        <div className="counter">
          {/* her tilføjer vi conter til de forkslelige onclicks - så når der trykkes på lnappen vil if sætningen blive sat igang  */}
          <button onClick={decreaseVIP} className="counterBtn">
            -
          </button>
          <span>{props.counterVIP}</span>
          <button onClick={increaseVIP} className="counterBtn">
            +
          </button>
        </div>
      </div>
      <div className="ticket" id="reg-ticket">
        <div className="border">
          <div className="cobber">STANDARD</div>
          <div className="orange">799,-</div>
          <div className="white">{props.counterREG * 799},-</div>
        </div>
        <div className="counter">
          <button onClick={decreaseREG} className="counterBtn">
            -
          </button>
          <span>{props.counterREG}</span>
          <button onClick={increaseREG} className="counterBtn">
            +
          </button>
        </div>
      </div>
    </section>
  );
}

export default TicketType;
