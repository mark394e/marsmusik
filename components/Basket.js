import "../styles/basket.module.scss";

function Basket(props) {
  const priceVIP = 1299;
  const priceREG = 799;

  return (
    <section className="basket">
      <h3>Your cart:</h3>
      <h4>Tickets:</h4>
      <ul>
        <li>
          {props.counterVIP}x VIP - Price: {props.counterVIP * priceVIP}
        </li>
        <li>
          {props.counterREG}x Standard - Price: {props.counterREG * priceREG}
        </li>
      </ul>
      <h4>Camping: Svartheim</h4>
      <ul>
        <li>extra product</li>
        <li>extra product</li>
        <li>extra product</li>
      </ul>

      <h3>Total: 1200,-</h3>
    </section>
  );
}

export default Basket;
