import React from "react";
import StopwatchButton from "../UI/StopwatchButton/StopwatchButton";

const ButtonsToDisplay = props => {
  let buttons;
  if (props.time == 0) {
    buttons = <StopwatchButton title="Start" click={props.startHandler} />;
  } else {
    let buttonTitle = !props.isPaused ? "Pause" : "Continue";
    buttons = (
      <React.Fragment>
        <StopwatchButton title={buttonTitle} click={props.pauseToggleHandler} />
        <StopwatchButton title="Reset" click={props.resetHandler} />
        <StopwatchButton title="Lap" click={props.lapHandler} />
      </React.Fragment>
    );
  }
  return <div className="stopwatch-buttons-container">{buttons}</div>;
};

export default ButtonsToDisplay;
