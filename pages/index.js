import Head from "next/head";
import Anchor from "../components/Anchor";
import localFont from "@next/font/local";
import { Shrikhand } from "@next/font/google";
import { useEffect } from "react";

const xanhMonoReg = localFont({ src: "./xanhmono-regular-webfont.woff2" });
const xanhMonoItal = localFont({ src: "./xanhmono-italic-webfont.woff2" });
const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

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
        <div className="date_wrapper">
          <div className="date">
            <div className="date_animate">
              <h2
                style={{
                  fontFamily: `${xanhMonoItal.style.fontFamily}`,
                }}
              >
                24th June - 11th July 2125
              </h2>
              <h2
                style={{
                  fontFamily: `${xanhMonoItal.style.fontFamily}`,
                }}
              >
                24th June - 11th July 2125
              </h2>
              <h2
                style={{
                  fontFamily: `${xanhMonoItal.style.fontFamily}`,
                }}
              >
                24th June - 11th July 2125
              </h2>
              <h2
                style={{
                  fontFamily: `${xanhMonoItal.style.fontFamily}`,
                }}
              >
                24th June - 11th July 2125
              </h2>
            </div>
          </div>
        </div>
        <div className="frontpage_txt">
          <h1>
            <span className="frontpage_txt1">MARS</span>
            <span>MUSIK</span>
            <span
              className="frontpage_txt2"
              style={{
                fontFamily: `${xanhMonoReg.style.fontFamily}`,
              }}
            >
              2125
            </span>
          </h1>
        </div>
        <a href="#banner">
          <div className="arrow">
            <img
              style={{ width: "70px", zIndex: "100000" }}
              className="pil"
              src="/pil.svg"
            />
          </div>
        </a>
      </section>
      {/*Når man klikker på pilen, havner man på dette "usynlige" banner*/}
      <div
        id="banner"
        style={{
          top: "88vh",
          marginBottom: "40px",
          height: "10px",
          width: "100%",
          position: "absolute",
        }}
      ></div>
      <div className="container">
        <section
          className="banner"
          style={{
            fontFamily: `${shrikhand.style.fontFamily}`,
          }}
        >
          <p>Is there life on Mars? Yes! </p>
          {/*&apos i steder for apostroffer */}
          <p>Arrive in your Rock &apos;n&apos; roll-rockets!</p>
          <p>Green beers on a red planet? Sounds great...</p>
          <p>Is there life on Mars? Yes! </p>
          <p>Arrive in your Rock &apos;n&apos; roll-rockets!</p>
          <p>Green beers on a red planet? Sounds great...</p>
        </section>
      </div>
      <section className="links">
        <Anchor href="/booking">
          <article className="ticketsLink">
            <h2 style={{ color: "rgba(254, 240, 224)" }}>Tickets</h2>
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
