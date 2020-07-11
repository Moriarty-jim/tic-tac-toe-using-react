import React from "react";

const Restart = (props) => {
  //   const onClickRestart = (e) => {
  //     console.log("restart");
  //     props.restartHandler();
  //   };

  return (
    <button className="btn-restart" onClick={props.restartHandler}>
      Restart
    </button>
  );
};

export default Restart;
