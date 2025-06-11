import React from "react";

const ArrFun = (props) => {
  return <p>Return value array - {props.arr.map(el=> 'элемент массива: ' + el +'; ')}</p>;
};


export default ArrFun;
