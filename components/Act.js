import "../styles/Act.module.scss";
import configData from "../config.json";

import Anchor from "./Anchor";
function Act(props) {
  // console.log(props.data.id);
  const startsWith = props.data.logo.startsWith("http");

  // console.log(startsWith);

  return (
    <>
      {" "}
      <Anchor
        band={props.pureBands}
        key={props.data.name}
        href={"/bands/" + props.data.id}
      >
        <article className="act_container" key={props.data.name}>
          <h2>{props.data.name}</h2>
          <div className="time">
            <p>{props.data.day}</p>
            <p>
              {props.data.start} <span>-</span> {props.data.end}
            </p>
          </div>
          <div className={props.data.stage}></div>

          {startsWith ? (
            <img src={props.data.logo.toString()} />
          ) : (
            <img
              alt={props.data.logoCredits}
              src={`${configData.url}/logos/${props.data.logo.toString()}`}
            />
          )}
        </article>
      </Anchor>
    </>
  );
}

export default Act;
