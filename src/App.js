import React, { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard";
import { nanoid } from "nanoid";

console.clear();

export default function App() {
  const [cards, setCards] = useState([
    {
      hex: "#F2D7D5",
      id: nanoid(),
    },
    {
      hex: "#FADBD8",
      id: nanoid(),
    },
    {
      hex: "#EBDEF0",
      id: nanoid(),
    },
    {
      hex: "#E8DAEF",
      id: nanoid(),
    },
    {
      hex: "#D4E6F1",
      id: nanoid(),
    },
    {
      hex: "#D6EAF8",
      id: nanoid(),
    },
    {
      hex: "#D1F2EB",
      id: nanoid(),
    },
  ]);

  return (
    <>
      <div className="App">
        {cards.map((card) => {
          //console.log(card);
          //console.log("test");
          return (
            <ColorCard
              className="card"
              key={card.id}
              cards={card}
              onClick={() => {
                console.log("test");
              }}
            />
          );
        })}
      </div>
    </>
  );
}
