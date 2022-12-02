import React, { useRef, useEffect } from "react";
import "../styles/Campingspot.module.scss";

function Campingspot(props) {
  const ref = useRef(null);

  useEffect(() => {
    const campingspot = ref.current;
    console.log(campingspot);

    if (props.data.available < props.ticketAmount) {
      campingspot.classList.add("fullybooked");
    } else {
      campingspot.classList.remove("fullybooked");
    }
  });

  return (
    <>
      <article ref={ref} className="campingspot">
        <p>{props.data.area}</p>
        <p>Available: {props.data.available}</p>
      </article>
    </>
  );
}

export default Campingspot;
