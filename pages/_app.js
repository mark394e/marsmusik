import "../styles/globals.scss";
import Layout from "../components/Layout";
import { Shrikhand } from "@next/font/google";
import { XandMono } from "@next/font/google";

import localFont from "@next/font/local";

const xanhMonoReg = localFont({ src: "./xanhmono-regular-webfont.woff2" });
const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        h1 {
          font-family: ${shrikhand.style.fontFamily};
        }

        h2,
        h3 {
          font-family: ${xanhMonoReg.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
