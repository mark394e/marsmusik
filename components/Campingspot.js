import React, { useRef, useEffect } from "react";
import "../styles/Campingspot.module.scss";

function Campingspot(props) {
  const ref = useRef(null);

  // vi bruger useeffect så vi kun henter data når det er nødvndigt (så det ikke looper unødvsndigt meget)
  useEffect(() => {
    // hvad betyder ref.current???
    const campingspot = ref.current;
    console.log(campingspot);

    // her siger vi at hvis tallet avilible indeholder et mindre tal end den valgte billet mængde
    // - så skal den vise fullybooked og ellers skal den fjerne fullybooked
    if (props.data.available < props.ticketAmount) {
      campingspot.classList.add("fullybooked");
    } else campingspot.classList.remove("fullybooked");
  });

  return (
    <>
      <section className="grid">
        <article ref={ref} className="campingspot">
          <p>{props.data.area}</p>
          <p>Available: {props.data.available}</p>
        </article>
      </section>
    </>
  );
}

export default Campingspot;
