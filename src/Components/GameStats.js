import React from "react";
import Restart from "./Restart";

const GameStats = (props) => {
  return (
    <div className="game-stats">
      <div className="turn-indicator">{props.gameStats}</div>
      <div>
        <Restart restartHandler={props.restartHandler} />
      </div>
    </div>
  );
};

export default GameStats;
