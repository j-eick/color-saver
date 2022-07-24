import { useState } from "react";
import "./App.css";
import ColorSaverTitle from "./components/ColorSaverTitle";
import ColorForm from "./components/ColorForm";
import ColorCard from "./components/ColorCard";
import { nanoid } from "nanoid";

//console.clear();

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
  ]);

  function handleCardSubmit(card) {
    setCards([
      ...card,
      {
        hex: card.hex,
        id: nanoid(),
      },
    ]);
  }

  return (
    <div className="app">
      <ColorSaverTitle />
      <hr />
      {/* choose different name */}
      <ColorForm onCardSubmit={handleCardSubmit} />
      <hr />
      <div className="card-container">
        {cards.map((card) => {
          //console.log(card);
          //console.log("test");
          return <ColorCard className="card" key={card.id} cards={card} />;
        })}
      </div>
    </div>
  );
}
