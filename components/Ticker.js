import React, { useState, useEffect } from "react";

//date-fns funktioner vi henter ind
import { intervalToDuration, isBefore } from "date-fns";

//Her hentes komponent der skal indholde enten år, måned etc.
import TickerCell from "./TickerCell";
import "../styles/Ticker.module.scss";

//Modtager props ifm. af datoen for festivalen. Kommer fra Layout.js
function Ticker({ futureDate }) {
  const [now, setNow] = useState(new Date());

  //Vi anvender useEffect. Dette skyldes vi vil se nedtællingen ske
  useEffect(() => {
    //Her visualiseres nedtællingen i sekunder.
    //Vi vil se intervallet ændre sig pr sekund
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000); // <-- 1000 = 1 sekund

    return () => {
      clearInterval(interval);
    };
  }, [futureDate]);

  //isBefore er en funktion fra date-fns. Spørger om futuredate er før nu? Og det er sandt
  const isTimeUp = isBefore(futureDate, now);

  //Tomme tids-variabler som får indhold nedenfor
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (!isTimeUp) {
    // Duration = Varighed.
    // Varigheden mellem nu og futuredate
    const duration = intervalToDuration({
      start: now,
      end: futureDate,
    });

    //Years viser varigheden i år fra futuredate til nu
    years = duration.years;
    //Days viser varigheden i dage fra futuredate til nu
    days = duration.days;
    //Hours viser varigheden i timer fra futuredate til nu
    hours = duration.hours;
    //Minutes viser varigheden i minutter fra futuredate til nu
    minutes = duration.minutes;
    //Seconds viser varigheden i sekunder fra futuredate til nu
    seconds = duration.seconds;
  }

  //Hvis tiden er gået, skal dette fremgå på sitet.
  //Ellers skal nedtælleren vises!
  const tickerContents = isTimeUp ? (
    <div>Time is up!</div>
  ) : (
    <div className="ticker">
      <TickerCell value={years} label="Y" />
      <p>:</p>
      <TickerCell value={days} label="D" />
      <p>:</p>
      <TickerCell value={hours} label="H" />
      <p>:</p>
      <TickerCell value={minutes} label="M" />
      <p>:</p>
      <TickerCell value={seconds} label="S" />
    </div>
  );

  return <div>{tickerContents}</div>;
}

export default Ticker;
