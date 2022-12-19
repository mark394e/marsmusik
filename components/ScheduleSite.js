import Act from "../components/Act";
import Filterbutton from "../components/Filterbutton";
import React, { useState } from "react";
import "../styles/Schedule.module.scss";

function ScheduleSite(props) {
  //To states for to filtreringer
  const [filterStage, setFilterStage] = useState("");
  const [filterDay, setFilterDay] = useState("");

  //En state for sortering
  const [sortColumn, setSortColumn] = useState("name");

  //Ascending el. descending.
  //Bruges til at bestemme retning ifb. A-Z el. Z-A el. first to play
  const [sortDirection, setSortDirection] = useState("asc");

  //Istedet for at "spørge" efter hver scene og dag, indkapsler jeg disse i arrays
  //Det betyder jeg kan bruge forEach som i nedstående map
  const stages = ["Midgard", "Jotunheim", "Vanaheim"];
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  //Her merger jeg mine to API'er til ét array kaldet pureBands
  const pureBands = props.bands.map((band) => {
    //newBand indeholder band fra starten
    const newBand = band;
    //Multidimensionelt forEach-loop
    //For hver scene, skal den loope i gennem hver dag...
    stages.forEach((stage) => {
      days.forEach((day) => {
        //Her leder vi efter om samme navn eksisterer begge steder! (Act el. name)
        const exists = props.program[stage][day].find(
          //konstanten EXISTS indeholder act, hvor act og name er det samme
          (act) => act.act == band.name
        );
        //Hvis bandet eksisterer begge steder, skal newBand-objektet indeholde disse properties
        if (exists) {
          //Newband får tilføjet nedstående properties til sine eksisterende
          newBand.day = day;
          newBand.stage = stage;
          newBand.start = exists.start;
          newBand.end = exists.end;
          newBand.cancelled = exists.cancelled;
        }
      });
    });

    //Derefter sendes det retur og lagres i arrayet pureBands
    return newBand;
  });

  //Da vi ikke vil regulere original-arrayet pureBands, laver vi en ny variabel
  //Denne variabel får samme indhold som pureBands
  let filtered = pureBands;

  //Variablen bruges her til sortering
  filtered.sort((a, b) => {
    if (a[sortColumn] > b[sortColumn]) {
      return 1;
    }
    if (a[sortColumn] < b[sortColumn]) {
      return -1;
    }

    return 0;
  });

  //Hvis direction ændres til "desc", skal filtreringen vises omvendt
  if (sortDirection === "desc") {
    filtered.reverse();
  }

  //Her filtrer vi blandt det rå data fra pureBands
  //Vi vil kun se de bands hvis scene matcher den filtrerede scene
  if (filterStage) {
    filtered = pureBands.filter((band) => band.stage === filterStage);
  }

  //Da vi vil filtrere yderligere, filtrerer vi blandt det i forvejen filtrerede
  //Vi vil kun se de bands hvis dag matcher den filtrerede dag
  if (filterDay) {
    filtered = filtered.filter((band) => band.day === filterDay);
  }

  return (
    <section className="schedule">
      <div className="schedule_bg"> </div>

      <div className="schedule_txt">
        <h1>Schedule 2125</h1>
        <p>
          Dive into Mars Musiks schedule, that ensures to bring back legends
          from the Rock-history of planet earth!{" "}
        </p>

        <fieldset>
          <legend>Filter by stage</legend>
          <button
            className={filterStage === "" ? "active" : null}
            onClick={() => setFilterStage("")}
          >
            All
          </button>
          {/* For hver scene skal der være en knap */}
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
          {/* For hver dag skal der være en knap */}
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
          <legend>Filter by day</legend>
        </fieldset>
        <fieldset>
          <legend>Sort</legend>
          <button
            onClick={() => {
              setSortColumn("name");
              setSortDirection("asc");
            }}
          >
            A - Z
          </button>
          <button
            onClick={() => {
              setSortDirection("desc");
              setSortColumn("name");
            }}
          >
            Z - A
          </button>
          <button
            onClick={() => {
              setSortDirection("asc");
              setSortColumn("start");
            }}
          >
            First to play
          </button>
        </fieldset>
      </div>
      <div className="schedule_container">
        {filtered.map((band) => {
          return <Act key={band.name} data={band} />;
        })}
      </div>
      <div className="gradient"></div>
    </section>
  );
}

export default ScheduleSite;
