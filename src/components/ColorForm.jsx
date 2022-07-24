import React, { useState } from "react";

console.clear();

export default function ColorForm({ onCards }) {
  const [zeug, setZeug] = useState();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log(event.target);
  // }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <fieldset>
          <legend>Add new Color</legend>
          <label htmlFor="hex-code" required></label>
          <input
            type="text"
            name="hex"
            id="hex-code"
            placeholder="enter hex-code"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <input type="submit" value="submit" />
        </fieldset>
      </form>
    </div>
  );
}
