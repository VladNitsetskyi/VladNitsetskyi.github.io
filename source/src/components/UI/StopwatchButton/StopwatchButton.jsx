import React from "react";
import "./StopwatchButton.scss";

const StopwatchButton = props => {
  let buttonClassName;
  switch (props.title) {
    case "Start":
      buttonClassName = "start";
      break;
    case "Clear Laps":
      buttonClassName = "clear";
      break;
    case "Continue":
      buttonClassName = "continue";
      break;
    case "Reset":
      buttonClassName = "reset";
      break;
    default:
      buttonClassName = "";
  }
  return (
    <button onClick={props.click} className={"default " + buttonClassName}>
      {props.title}
    </button>
  );
};

export default StopwatchButton;
