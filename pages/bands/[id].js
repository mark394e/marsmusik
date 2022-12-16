import configData from "../../config.json";
import Head from "next/head";
import Anchor from "../../components/Anchor";
// import "Artist.module.scss" from "../styles/"

export default function Artist({ data }) {
  console.log(...data);
  const startsWith = data[0].logo.startsWith("http");

  return (
    <>
      <Head>
        <title>{data[0].name}</title>
      </Head>
      <section className="artist">
        <Anchor href="/schedule">
          <div className="goBack">
            <p>&#60; Go back</p>
          </div>
        </Anchor>
        <h1>{data[0].name}</h1>
        <div className="artist_grid">
          {startsWith ? (
            <img src={data[0].logo.toString()} />
          ) : (
            <img
              alt={data[0].logoCredits}
              src={`${configData.url}/logos/${data[0].logo.toString()}`}
            />
          )}

          <div>
            <div>
              <p>{data[0].start} </p>
            </div>
            <div className="flex_symbol">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fillRule="currentColor"
                className="bi bi-music-note-beamed"
                viewBox="0 0 16 16"
              >
                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
              </svg>{" "}
              <p>{data[0].genre}</p>
            </div>
            <div className="flex_symbol symbol_last">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fillRule="currentColor"
                className="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
              <ul>
                {data[0].members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
            <div className="artist_bio">
              <p>{data[0].bio}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//Kalder serveren der kalder API'en
//Gør at koden kører på serveren

export async function getServerSideProps(context) {
  // console.log(context.params.id);
  const res = await fetch(
    `${configData.url}/bands/` // id fordi min fil eller id
  );
  const res2 = await fetch(
    `${configData.url}/schedule/` // id fordi min fil eller id
  );
  // console.log(res);
  // If no succes, return a 404 redirect
  if (res.status != 200 || res2.status != 200) {
    return {
      notFound: true, //Hvis api ik svarer, ender jeg på en 404
    };
  }

  const schedule = await res2.json();
  console.log(schedule);

  const bands = await res.json();

  //I en const lagrer jeg dét band hvis id er det samme som context.params.id
  //Dét bands information skal vises på siden
  const currentBand = bands.filter(
    (band) => Number(band.id) === Number(context.params.id)
  );

  return {
    props: {
      data: currentBand,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`${configData.url}/bands/`);

//   const data = await res.json();

//   console.log(data.id);

//   const paths = data.map((entry) => {
//     return { params: { id: entry.id.toString() } }; // id i stedet for slug. skal laves til string, da browser ikke læser numre
//   });

//   console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }
