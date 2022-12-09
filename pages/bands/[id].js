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
          <div>
            <p style={{ marginTop: "20%" }}> Go back</p>
          </div>
        </Anchor>
        <div className="artist_grid">
          {" "}
          {startsWith ? (
            <div
              className="background_image"
              style={{
                backgroundImage: `url("${data[0].logo.toString()}")`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
                aspectRatio: "1/1",
              }}
            ></div>
          ) : (
            <div
              className="background_image"
              style={{
                backgroundImage: `url("${
                  configData.url
                }/logos/${data[0].logo.toString()}")`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%",
                aspectRatio: "1/1",
              }}
            ></div>
          )}
          <div>
            <h1 style={{ fontSize: "5rem", marginTop: "1%" }}>
              {data[0].name}
            </h1>
            <p>{data[0].bio}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log(context.params.id);
  const res = await fetch(
    `${configData.url}/bands/` // id fordi min fil eller id
  );
  // console.log(res);
  // If no succes, return a 404 redirect
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const bands = await res.json();

  //I en const lagrer jeg dét band hvis id er det samme som context.params.id
  //Dét bands information skal vises på siden
  const currentBand = bands.filter(
    (band) => Number(band.id) === Number(context.params.id)
  );
  // console.log(currentBand);

  // console.log(data);

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
