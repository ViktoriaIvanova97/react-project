import React, { useState } from "react";

const StateFun = () => {
  const [increaseState, increaseSetState] = useState(0);
  const [hideState, hideSetState] = useState(false);
  const [inputState, inputSetState] = useState("");

  const chageInput = (text) => {
    inputSetState(text.target.value);
  };

  return (
    <>
      <div>
        <p>state: {increaseState}</p>
        <button onClick={() => increaseSetState((preState) => preState + 1)}>
          click
        </button>
      </div>

      <div>
        {hideState && <p>HELLO!</p>}
        <button
          onClick={() => {
            hideSetState((hide) => !hide);
          }}
        >
          Показать/скрыть текст
        </button>
		  </div>

      <div>
        <label>
          <input type="text" value={inputState} onChange={chageInput} />
        </label>
        <p>text:{inputState}</p>
      </div>
    </>
  );
};

export default StateFun;
