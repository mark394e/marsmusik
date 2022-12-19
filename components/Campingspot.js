import React, { useRef, useEffect, useState, useCallback } from "react";
import "../styles/Campingspot.module.scss";
import configData from "../config.json";

function Campingspot(props) {
  const ref = useRef(null);

  // vi bruger useeffect så vi kun henter data når det er nødvndigt (så det ikke looper unødvsndigt meget)
  useEffect(() => {
    // hvad betyder ref.current???
    const campingspot = ref.current;

    // her siger vi at hvis tallet avilible indeholder et mindre tal end den valgte billet mængde
    // - så skal den vise fullybooked og ellers skal den fjerne fullybooked
    if (props.data.available < props.ticketAmount || props.data.available <= 0) {
      campingspot.classList.add("fullybooked");
      campingspot.style.pointerEvents = "none";
    } else {
      campingspot.classList.remove("fullybooked");
      campingspot.style.pointerEvents = "auto";
    }
  });

  function clickedCamping() {
    ref.current.classList.add("pickedCamping");
    props.setPickedCamping(props.data.area);
    props.setShowPickedCamping(true);
    reserveSpot({
      area: props.data.area,
      amount: props.ticketAmount,
    });
    props.setTimer(Date.now() + 300000);
    props.setShowTimer(true);
  }

  function reserveSpot(payload) {
    fetch(`${configData.url}/reserve-spot`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => props.setReserveID(response.id))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <section className="campingSection">
        <div className="campingspotwrapper" ref={ref}>
          <article className="campingspot" onClick={clickedCamping}>
            <h3>{props.data.area}</h3>
          </article>
          <div className="available">
            <p>
              <span>{props.data.available}</span> spots left
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Campingspot;
