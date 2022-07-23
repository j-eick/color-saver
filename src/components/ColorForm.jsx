import React from "react";

export default function ColorForm() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Add new Color</legend>
          <label htmlFor="hex-code" required></label>
          <input
            type="text"
            name="hex-color"
            id="hex-code"
            placeholder="enter hex-code"
          />
          <button type="button" onClick={}>do it!</button>
        </fieldset>
      </form>
    </div>
  );
}
