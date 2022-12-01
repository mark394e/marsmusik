import "../styles/Act.module.scss";
import Anchor from "./Anchor";
function Act(props) {
  console.log(props);

  return (
    <>
      {" "}
      <Anchor
        band={props.pureBands}
        key={props.data.name}
        href={"/artists/" + props.data.name.toLowerCase()}
      >
        <article className="act_container" key={props.data.name}>
          <h2>{props.data.name}</h2>
          <div className={props.data.stage}></div>
          <div
            className="background_image"
            style={{
              backgroundImage: `url("https://solitary-butterfly-1534.fly.dev/logos/${props.data.logo.toString()}")`,
              backgroundSize: "cover",
              opacity: "0.2",
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
          ></div>
        </article>
      </Anchor>
    </>
  );
}

export default Act;
