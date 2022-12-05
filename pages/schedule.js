import configData from "../config.json";
import React, { useState } from "react";
import ScheduleSite from "../components/ScheduleSite";
import "../styles/Schedule.module.scss";

function schedule(props) {
  return <ScheduleSite bands={props.bands} program={props.program} />;
}

export async function getServerSideProps() {
  //fetching bands
  const bandRes = await fetch(`${configData.url}/bands`);
  const bands = await bandRes.json();

  //fetching schedule
  const programRes = await fetch(`${configData.url}/schedule`);
  const program = await programRes.json();

  return {
    props: {
      bands,
      program,
    },
  };
}
export default schedule;
