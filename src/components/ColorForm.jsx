import { useState } from "react";

console.clear();

export default function ColorForm({ onCardSubmit }) {
  const [newCard, setNewCard] = useState();

  /**
   * 
   
  - Enter HexCode + press submit
    • 
  - Generate new card
  - Card should be added to Array

  */

  function onCardSubmit(event) {
    event.preventDefault();
    setNewCard([{}]);
  }

  return (
    <div>
      <form onSubmit={onCardSubmit}>
        <fieldset className="inputfield">
          <legend>Add new Color</legend>
          <label htmlFor="hex-code" required></label>
          <input
            type="text"
            name="hex"
            id="hex-code"
            placeholder="enter hex-code"
            onChange={(event) => {
              setNewCard(event.target.value);
            }}
          />
          <input type="submit" value="submit" />
          <label htmlFor="color-picker" required></label>
          <input
            type="color"
            name="hex"
            id="color-picker"
            placeholder="enter hex-code"
          />
        </fieldset>
      </form>
    </div>
  );
}
