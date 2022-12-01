import Act from "../components/Act";
import Filterbutton from "../components/Filterbutton";
import React, { useState } from "react";
import ScheduleSite from "../components/ScheduleSite";
import "../styles/Schedule.module.scss";

function schedule(props) {
  return <ScheduleSite bands={props.bands} program={props.program} />;
}

export async function getServerSideProps() {
  //fetching bands
  const bandRes = await fetch("https://solitary-butterfly-1534.fly.dev/bands");
  const bands = await bandRes.json();

  //fetching schedule
  const programRes = await fetch(
    "https://solitary-butterfly-1534.fly.dev/schedule"
  );
  const program = await programRes.json();

  return {
    props: {
      bands,
      program,
    },
  };
}
export default schedule;
