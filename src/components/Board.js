import React from "react";
import Square from "./Square";

// A játékfelület létrehozása és indexelése a Square komponens importálásával, hogy nyomon tudjuk követni melyik négyzet volt kattintva

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => {
        return (
          <Square key={index} value={square} onClick={() => onClick(index)} />
        );
      })}
    </div>
  );
};

export default Board;
