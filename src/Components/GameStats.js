import React from "react";
import Restart from "./Restart";

const GameStats = (props) => {
  return (
    <div>
      {props.gameStats}
      <Restart restartHandler={props.restartHandler} />
    </div>
  );
};

export default GameStats;
