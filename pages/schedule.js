import Act from "../components/Act";

function schedule(props) {
  // console.log(props.program);

  // Object.keys(props.program).forEach((key) => {
  //   // console.log(key, props.program[key]);
  //   Object.keys(key).forEach((key2) => {
  //     console.log(key2, key[key2]);
  //     Object.keys(key2).forEach((key3) => {
  //       // console.log(key3, key2[key3]);
  //     });
  //   });
  // });

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

  console.log(pureBands);
  return (
    <>
      <h1>Schedule</h1>
      <section>
        {props.bands.map((band) => (
          <Act data={band} />
        ))}
      </section>
    </>
  );
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

//This is happening in the server and will never end up in the browser
//But if i want to console.log it, i can see it in the terminal!

export default schedule;
