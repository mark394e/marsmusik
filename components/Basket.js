import "../styles/basket.module.scss";

function Basket() {
  return (
    <section className="basket">
      <h3>Your cart:</h3>
      <h4>Tickets:</h4>
      <ul>
        <li>product</li>
        <li>product</li>
        <li>product</li>
      </ul>
      <h4>Camping: Nilfheim</h4>
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
