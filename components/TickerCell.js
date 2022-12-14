import React from "react";
import { Shrikhand } from "@next/font/google";
import localFont from "@next/font/local";

const xanhMonoReg = localFont({
  src: "../pages/xanhmono-regular-webfont.woff2",
});
const shrikhand = Shrikhand({ subsets: ["latin"], weight: "400" });

function TickerCell(props) {
  //   console.log(props.value);

  return (
    <div>
      <p
        className="label"
        style={{ fontFamily: `${shrikhand.style.fontFamily}` }}
      >
        {props.label}
      </p>
      <p
        className="value"
        style={{
          fontFamily: `${xanhMonoReg.style.fontFamily}`,
        }}
      >
        {props.value}
      </p>
    </div>
  );
}

export default TickerCell;
