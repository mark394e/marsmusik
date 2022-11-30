import React from "react";

function Extras() {
  return (
    <section>
      <p>Extras - optional</p>
      <div className="ticket" id="vip-ticket">
        <p>Green choices</p>
        <p>Price</p>
        <p>Total</p>
        <div>Green camping</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <p>- 2 +</p>
      </div>
      <div className="ticket" id="reg-ticket">
        <p>Provided tent</p>
        <div>2 person tent</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <p>- 2 +</p>
      </div>
      <div className="ticket" id="reg-ticket">
        <div>3 person tent</div>
        <div>1234,-</div>
        <div>4321,-</div>
        <p>- 2 +</p>
      </div>
    </section>
  );
}

export default Extras;
