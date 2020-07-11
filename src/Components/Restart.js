import React from "react";

const Restart = (props) => {
  const onClickRestart = (e) => {
    console.log("restart");
    props.restartHandler(e);
  };

  return <button onClick={onClickRestart}>Restart</button>;
};

export default Restart;
