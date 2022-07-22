import React from "react";
//import "../App.css";

export default function ColorCard({ cards }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: cards.hex }}
      onClick={() => {
        console.log("test");
      }}
    >
      <p className="App">{cards.hex}</p>
    </div>
  );
}
