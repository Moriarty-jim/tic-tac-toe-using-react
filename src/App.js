import React, { useState, useEffect } from "react";
import "./styles.css";
import GameBoard from "./Components/GameBoard";
import GameStats from "./Components/GameStats";

const App = () => {
  const [boardState, setBoardState] = useState({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
  });
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameState, setGameState] = useState(true);
  const [firstTurn, setFirstTurn] = useState(true);
  const [gameStats, setGameStats] = useState("");
  const [restartState, setRestartState] = useState(false);
  const [gameCount, setGameCount] = useState(1);

  const boardStateHandler = (e) => {
    const boardIndex = e.target.id;
    setBoardState({ ...boardState, [boardIndex]: currentPlayer });
  };

  const restartHandler = () => {
    console.log("app restart");
    setRestartState(true);
    setBoardState({
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
    });
    setGameState(true);
    setCurrentPlayer("X");
    setFirstTurn(true);
    setGameStats(`its ${currentPlayer}'s turn`);
    setGameCount(gameCount + 1);
  };

  useEffect(() => {
    if (!firstTurn) {
      validation(
        setGameState,
        boardState,
        currentPlayer,
        setCurrentPlayer,
        setGameStats
      );
    } else {
      setFirstTurn(false);
    }
    // console.log(boardState);
  }, [boardState]);

  useEffect(() => {
    setGameStats(`its ${currentPlayer}'s turn`);
  }, [currentPlayer]);

  useEffect(() => {
    if (gameCount % 2 === 0) {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  }, [gameCount]);

  return (
    <div className="main-container">
      <h1>TIC TAC TOE</h1>
      <GameBoard
        boardStateHandler={boardStateHandler}
        currentPlayer={currentPlayer}
        boardState={boardState}
        gameState={gameState}
        restartState={restartState}
        setRestartState={setRestartState}
      />
      <GameStats gameStats={gameStats} restartHandler={restartHandler} />
    </div>
  );
};

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const validation = (
  setGameState,
  boardState,
  currentPlayer,
  setCurrentPlayer,
  setGameStats
) => {
  let gameWon = false;
  let boardStateAsarray = [];
  for (const [key, value] of Object.entries(boardState)) {
    boardStateAsarray.push(value);
  }
  console.log(boardStateAsarray);
  for (let i = 0; i < 8; i++) {
    let individualCondition = winConditions[i];
    let a = boardStateAsarray[individualCondition[0]];
    let b = boardStateAsarray[individualCondition[1]];
    let c = boardStateAsarray[individualCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameWon = true;
      break;
    }
  }
  if (gameWon) {
    setGameState(false);
    setGameStats(`${currentPlayer} won the game`);
    return;
  }
  if (!boardStateAsarray.includes("")) {
    setGameState(false);
    setGameStats("its a draw");
    return;
  }
  currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
};

export default App;
