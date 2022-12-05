import Act from "../components/Act";
import Filterbutton from "../components/Filterbutton";
import React, { useState } from "react";
import "../styles/Schedule.module.scss";

function ScheduleSite(props) {
  //To states for to filtreringer
  const [filterStage, setFilterStage] = useState("");
  const [filterDay, setFilterDay] = useState("");

  //En state for sortering
  const [sort, setSort] = useState("");

  const [sortReversed, setSortReversed] = useState("");

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

  let filtered = pureBands;
  // const starttime = filtered.map((starting) => starting.start);
  // console.log(starttime.sort());
  // console.log(starttime.reverse());

  filtered.sort((a, b) => {
    if (a[sort] > b[sort]) {
      return 1;
    }
    if (a[sort] < b[sort]) {
      return -1;
    }

    return 0;
  });

  // filtered.sort((a, b) => {
  //   if (a[sortReversed] > b[sortReversed]) {
  //     return -1;
  //   }
  //   if (a[sortReversed] < b[sortReversed]) {
  //     return 1;
  //   }
  //   return 0;
  // });

  //Her filtrer vi blandt det rå data fra pureBands
  if (filterStage) {
    filtered = pureBands.filter((band) => band.stage === filterStage);
  }

  //Da vi vil filtrere yderligere, filtrerer vi blandt det i forvejen filtrerede
  if (filterDay) {
    filtered = filtered.filter((band) => band.day === filterDay);
  }

  return (
    <section className="schedule">
      <h1>Schedule</h1>
      <fieldset>
        <legend>Filter by stage</legend>
        <button
          className={filterStage === "" ? "active" : null}
          onClick={() => setFilterStage("")}
        >
          All
        </button>
        {stages.map((stage) => (
          <Filterbutton
            band={pureBands}
            setFilter={setFilterStage}
            filter={filterStage}
            key={stage}
            stage={stage}
          />
        ))}
      </fieldset>
      <fieldset>
        <button
          className={filterDay === "" ? "active" : null}
          onClick={() => setFilterDay("")}
        >
          All
        </button>
        {days.map((day) => (
          <Filterbutton
            className={filterDay === day ? "active" : null}
            onClick={() => setFilterDay(day)}
            band={pureBands}
            setFilter={setFilterDay}
            filter={filterDay}
            key={day}
            stage={day}
          />
        ))}
        <legend>Filter by stage</legend>
      </fieldset>
      <fieldset>
        <legend>Sort</legend>
        <button onClick={() => setSort("name")}>A - Z</button>
        <button onClick={() => setSortReversed("name")}>Z - A</button>
        <button onClick={() => setSort("start")}>First to play</button>
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
