import React, { useState } from "react";

const StateFun = () => {
  const [increaseState, increaseSetState] = useState(0);

  return (
    <>
      <p>state: {increaseState}</p>
      <button onClick={() => increaseSetState(preState =>preState + 1)}>click</button>
    </>
  );
};

export default StateFun;
