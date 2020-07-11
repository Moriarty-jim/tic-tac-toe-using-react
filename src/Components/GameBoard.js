import React, { useState, useEffect } from "react";

const GameBoard = (props) => {
  //   const [boardState, setBoardState] = useState([
  //     "",
  //     "",
  //     "",
  //     "",
  //     "",
  //     "",
  //     "",
  //     "",
  //     "",
  //   ]);
  //   const [boardState, setBoardState] = useState({
  //     "0": "",
  //     "1": "",
  //     "2": "",
  //     "3": "",
  //     "4": "",
  //     "5": "",
  //     "6": "",
  //     "7": "",
  //     "8": "",
  //   });

  const clickHandler = (e) => {
    // e.preventDefault();
    const boardIndex = e.target.id;
    // console.log(boardIndex);
    // console.log(props.boardState);
    if (props.boardState[boardIndex] !== "" || !props.gameState) {
      console.log("asd");
      return;
    }
    e.target.innerHTML = props.currentPlayer;
    props.boardStateHandler(e);
  };

  if (props.restartState) {
    document
      .querySelectorAll(".grid-item")
      .forEach((cell) => (cell.innerHTML = ""));
    props.setRestartState(false);
  }

  return (
    <div className="grid-container ">
      <div className="grid-item" id="0" onClick={clickHandler}></div>
      <div className="grid-item" id="1" onClick={clickHandler}></div>
      <div className="grid-item" id="2" onClick={clickHandler}></div>
      <div className="grid-item" id="3" onClick={clickHandler}></div>
      <div className="grid-item" id="4" onClick={clickHandler}></div>
      <div className="grid-item" id="5" onClick={clickHandler}></div>
      <div className="grid-item" id="6" onClick={clickHandler}></div>
      <div className="grid-item" id="7" onClick={clickHandler}></div>
      <div className="grid-item" id="8" onClick={clickHandler}></div>
    </div>
  );
};

export default GameBoard;
