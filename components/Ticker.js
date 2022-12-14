import React, { useState, useEffect } from "react";
import { intervalToDuration, isBefore } from "date-fns";
import TickerCell from "./TickerCell";
import "../styles/Ticker.module.scss";

function Ticker({ futureDate }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      //   console.log("ticking");
      setNow(new Date());
    }, 1000);
  }, [setNow]); // Det tomme array er til for ikke at "re-fire"
  //   const now = newDate();

  const isTimeUp = isBefore(futureDate, now);
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (!isTimeUp) {
    const duration = intervalToDuration({
      start: now,
      end: futureDate,
    });

    years = duration.years;
    days = duration.days;
    hours = duration.hours;
    minutes = duration.minutes;
    seconds = duration.seconds;
  }

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
