import Anchor from "./Anchor";
import "../styles/Header.module.scss";
import React from "react";

//takes children meaning that it takes content from our pages
export default function Layout(props) {
  return (
    <>
      <header>
        <nav className="nav">
          <Anchor href="/">
            <div className="logo"></div>
          </Anchor>
          <ul>
            <li>
              <Anchor href="/">Home</Anchor>
            </li>
            <li>
              <Anchor href="/schedule/">Schedule</Anchor>
            </li>
            <li>
              <Anchor href="/booking/">Tickets</Anchor>
            </li>
          </ul>
          <button>Menu</button>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>Mars musik 2022</footer>
    </>
  );
}
