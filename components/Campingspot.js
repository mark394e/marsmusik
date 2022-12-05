import React, { useRef, useEffect } from "react";
import "../styles/Campingspot.module.scss";

function Campingspot(props) {
  const ref = useRef(null);

  const pickedCamping = props.showPickedCamping;
  // vi bruger useeffect så vi kun henter data når det er nødvndigt (så det ikke looper unødvsndigt meget)
  useEffect(() => {
    // hvad betyder ref.current???
    const campingspot = ref.current;

    // her siger vi at hvis tallet avilible indeholder et mindre tal end den valgte billet mængde
    // - så skal den vise fullybooked og ellers skal den fjerne fullybooked
    if (props.data.available < props.ticketAmount || props.data.available <= 0) {
      campingspot.classList.add("fullybooked");
      campingspot.style.pointerEvents = "none";
    } else campingspot.classList.remove("fullybooked");
  });

  function clickedCamping() {
    props.setPickedCamping(props.data.area);
    props.setShowPickedCamping(true);
  }

  return (
    <>
      <section className="grid">
        <article ref={ref} className="campingspot" onClick={clickedCamping}>
          <p>{props.data.area}</p>
          <p>Available: {props.data.available}</p>
        </article>
      </section>
    </>
  );
}

export default Campingspot;
