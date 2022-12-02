import Act from "../components/Act";
import Filterbutton from "../components/Filterbutton";
import React, { useState } from "react";
import "../styles/Schedule.module.scss";

function ScheduleSite(props) {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  //   console.log(props);

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

  let filtered = pureBands;
  const starttime = filtered.map((starting) => starting.start);
  console.log(starttime.sort());
  console.log(starttime.reverse());

  filtered.sort((a, b) => {
    if (a[sort] > b[sort]) {
      return 1;
    }
    if (a[sort] < b[sort]) {
      return -1;
    }
    return 0;
  });

  //   console.log(filtered);
  if (filter) {
    filtered =
      pureBands.filter((band) => band.stage === filter) ||
      pureBands.filter((band) => band.day === filter);
  }

  return (
    <section className="schedule">
      <h1>Schedule</h1>
      <fieldset>
        <legend>Filter by stage</legend>
        <button
          className={filter === "" ? "active" : null}
          onClick={() => setFilter("")}
        >
          All
        </button>
        {stages.map((stage) => (
          <Filterbutton
            band={pureBands}
            setFilter={setFilter}
            filter={filter}
            key={stage}
            stage={stage}
          />
        ))}
      </fieldset>
      <fieldset>
        <button
          className={filter === "mon" ? "active" : null}
          onClick={() => setFilter("mon")}
        >
          mon
        </button>
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
      <fieldset>
        <legend>Sort</legend>
        <select>
          <option>Sort</option>
          <option onClick={() => starttime.sort()}>First to last</option>
          <option onClick={() => starttime.reverse()}>Last to first</option>

          {/* <option onClick={() => setSort(starttime)}>First to last</option> */}
          {/* <option onClick={() => setSort("age")}>Last to first</option> */}
        </select>
      </fieldset>
      <div className="schedule_container">
        {filtered.map((band) => {
          return <Act key={band.name} data={band} />;
        })}
      </div>
    </section>
  );
}

export default ScheduleSite;
