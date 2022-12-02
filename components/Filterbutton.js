function Filterbutton(props) {
  //   console.log(props.band);
  return (
    <button
      className={props.filter === props.stage ? "active" : null}
      onClick={() => props.setFilter(props.stage)}
    >
      {props.stage}
    </button>
  );
}

export default Filterbutton;
