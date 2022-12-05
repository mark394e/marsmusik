import Anchor from "./Anchor";
import React from "react";
import { fallDown as Menu } from "react-burger-menu";

//takes children meaning that it takes content from our pages
export default function Layout(props) {
  class Example extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }
  }

  return (
    <>
      <header>
        <Anchor href="/">
          <div className="logo"></div>
        </Anchor>
        <nav>
          <Menu width={"50%"}>
            <ul>
              <li>
                <Anchor href="/">Home</Anchor>
              </li>
              <li>
                <Anchor href="/schedule/">Schedule</Anchor>
              </li>
              <li>
                <Anchor href="/tickets/">Tickets</Anchor>
              </li>
            </ul>
          </Menu>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer>Mars musik 2022</footer>
    </>
  );
}
