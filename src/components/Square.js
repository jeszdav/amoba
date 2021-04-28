import React from "react";
// A négyzet ellátása indexszel és eventlistenerrel, hogy a Board komponensben felhasználva tudjuk majd rögzíteni, melyik négyzet volt pontosan kattintva

const Square = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Square;
