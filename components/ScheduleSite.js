import Act from "../components/Act";
import Filterbutton from "../components/Filterbutton";
import React, { useState } from "react";
import "../styles/Schedule.module.scss";

function ScheduleSite(props) {
  const [filter, setFilter] = useState("");
  console.log(props);

  //Istedet for at "spørge" efter hver scene og dag, indkapsler jeg disse i arrays
  //Det betyder jeg kan bruge forEach som i nedstående map
  const stages = ["Midgard", "Jotunheim", "Vanaheim"];
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  //Her merger jeg mine to arrays til ét array kaldet pureBands
  const pureBands = props.bands.map((band) => {
    //newBand indeholder band fra starten
    const newBand = band;
    stages.forEach((stage) => {
      days.forEach((day) => {
        //denne leder efter om samme navn eksisterer begge steder!
        const exists = props.program[stage][day].find(
          //EXISTS indeholder act, hvor act og name er det samme
          (act) => act.act == band.name
        );
        //Hvis disse eksisterer, skal objektet indeholde disse properties
        if (exists) {
          //Newband får properties fra indhold
          newBand.day = day;
          newBand.stage = stage;
          newBand.start = exists.start;
          newBand.end = exists.end;
          newBand.cancelled = exists.cancelled;
        }
      });
    });
    return newBand;
  });
  // console.log(pureBands);

  return (
    <section className="schedule">
      <h1>Schedule</h1>
      <fieldset>
        <legend>Filter by stage</legend>

        {stages.map((stage) => (
          <Filterbutton
            className={filter === stage ? "active" : null}
            onClick={() => setFilter(stage)}
            band={pureBands}
            setFilter={setFilter}
            filter={filter}
            key={stage}
            stage={stage}
          />
        ))}
      </fieldset>
      <fieldset>
        {days.map((day) => (
          <Filterbutton
            className={filter === day ? "active" : null}
            onClick={() => setFilter(day)}
            band={pureBands}
            setFilter={setFilter}
            filter={filter}
            key={day}
            stage={day}
          />
        ))}
        <legend>Filter by stage</legend>
      </fieldset>
      <div className="schedule_container">
        {pureBands.map((band) => (
          <Act key={band.name} data={band} />
        ))}
      </div>
    </section>
  );
}

export default ScheduleSite;
