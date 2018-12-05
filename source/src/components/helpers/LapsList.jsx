import React from "react";
import StopwatchButton from "../UI/StopwatchButton/StopwatchButton";

const LapsList = props => {
  let formattedLapItem = time =>
    ("0" + new Date(time).getUTCHours()).slice(-2) +
    ":" +
    ("0" + new Date(time).getUTCMinutes()).slice(-2) +
    ":" +
    ("0" + new Date(time).getUTCSeconds()).slice(-2);

  return (
    <ul className="stopwatch-laps">
      {props.laps
        ? props.laps.map((lap, i) => (
            <li key={i} className="stopwatch-lap-item">
              <strong>{i + 1}</strong># {formattedLapItem(lap)}
            </li>
          ))
        : ""}
      {props.laps.length > 0 ? (
        <StopwatchButton title="Clear Laps" click={props.lapClearAllHandler} />
      ) : null}
    </ul>
  );
};

export default LapsList;
