import Image from "next/image";
import Head from "next/head";
import Anchor from "../../components/Anchor";

export default function Artist(props) {
  console.log(props);
  return (
    <>
      <h1>Hej</h1>
      {/* <Head>
        <title>{data.productdisplayname}</title>
      </Head>
      <div className="product-margin">
        <Anchor href="/shop/">
          <div className="cta">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            <p>Go back</p>
          </div>
        </Anchor>
        <div className="dog-grid">
          <img
            src={`https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp`}
            alt={data.productdisplayname}
          />
          <div className="dog-flex">
            <h1>{data.productdisplayname}</h1>
            <p>
              Brand: <em>{data.brandname}</em>
            </p>
            <h3>{data.price},-</h3>
            <button onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://solitary-butterfly-1534.fly.dev/bands/" + context.params.id // id fordi min fil eller id
  );

  // If no succes, return a 404 redirect
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://solitary-butterfly-1534.fly.dev/bands/");

  const data = await res.json();

  console.log(data);

  const paths = data.map((entry) => {
    return { params: { id: entry.name } }; // id i stedet for slug. skal laves til string, da browser ikke læser numre
  });

  return {
    paths,
    fallback: false,
  };
}
