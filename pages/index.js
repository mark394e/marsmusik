import Head from "next/head";
import Navigation from "./components/Navigation";
import variables from "/styles/variables.module.scss";

export default function Home() {
  return (
    <>
      <body>
        <Head></Head>
        <Navigation></Navigation>
        <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      </body>
    </>
  );
}
