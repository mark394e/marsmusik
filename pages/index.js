import Head from "next/head";
import Anchor from "../components/Anchor";
import localFont from "@next/font/local";

const xanhMonoReg = localFont({ src: "./xanhmono-regular-webfont.woff2" });
const xanhMonoItal = localFont({ src: "./xanhmono-italic-webfont.woff2" });

export default function Home() {
  return (
    <>
      <Head>
        <title>MARS MUSIK 2125</title>
      </Head>{" "}
      <section className="hero">
        <div className="frontpage_bg">
          <div className="frontpage_picture"></div>
        </div>
        <div className="date">
          <h2
            style={{
              fontFamily: `${xanhMonoItal.style.fontFamily}`,
              position: "absolute",
              right: "-15vh",
              top: "49vh",
              transform: "rotate(90deg)",
              color: "#510926",
            }}
          >
            24th June - 11th July 2125
          </h2>
        </div>
        <div className="frontpage_txt">
          <h1>
            <span
              style={{
                fontSize: "7rem",
              }}
            >
              MARS
            </span>
            <span>MUSIK</span>
            <span
              style={{
                fontFamily: `${xanhMonoReg.style.fontFamily}`,
                fontSize: "11rem",
              }}
            >
              2125
            </span>
          </h1>
        </div>
      </section>
      <section className="links">
        <Anchor href="/booking">
          <article className="ticketsLink">
            <h2>Tickets</h2>
          </article>
        </Anchor>
        <Anchor href="/schedule">
          <article className="scheduleLink">
            <h2>Schedule</h2>
          </article>
        </Anchor>
      </section>
    </>
  );
}
