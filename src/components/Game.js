import React, { useState } from "react";
import { calculateWinner } from "../winner";
import Board from "./Board";

// A játék fő logikája itt található

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    //Másolat készítése a board tömbről, hogy ne az eredeti legyen módosítva
    const boardCopy = [...board];
    // Ha a játékos egy már foglalt négyzetre kattint vagy ha valaki nyer
    if (winner || boardCopy[index]) return;
    // X vagy O elhelyzése mikor egy üres négyzetre kattintunk
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setxIsNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button className="newGame" onClick={() => setBoard(Array(9).fill(null))}>
        Új játék
      </button>
    );
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div className="player">
        <p>
          {winner
            ? "Győztes: " + winner
            : "Következő játékos: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
