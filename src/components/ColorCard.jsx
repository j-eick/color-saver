import React from "react";
import "../App.css";

//console.clear();

export default function ColorCard({ cards }) {
  // clipboard.writeText is a promise
  async function copyToClipboard() {
    console.log(cards.hex);

    await navigator.clipboard.writeText(cards.hex);
    alert(`HexColor: 

        ${cards.hex} has been copied to your clipboard`);
  }

  return (
    <div
      className="card"
      style={{ backgroundColor: cards.hex }}
      onClick={copyToClipboard}
    >
      <p className="App">{cards.hex}</p>
    </div>
  );
}
