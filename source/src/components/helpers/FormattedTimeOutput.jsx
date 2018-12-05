import React from "react";

const formattedTimeOutput = props => {
  return (
    <div className="stopwatch-time-display">
      <div className={props.isPaused ? "stopwatch-time-display-animation" : ""}>
        <div>
          <div>
            <span>{("0" + new Date(props.time).getUTCHours()).slice(-2)}</span>:
            <span>
              {("0" + new Date(props.time).getUTCMinutes()).slice(-2)}
            </span>
            :
            <span>
              {("0" + new Date(props.time).getUTCSeconds()).slice(-2)}
            </span>
          </div>
          <div className="stopwatch-timemeasure">
            <span className="stopwatch-timemeasure-value">hr</span>
            <span className="stopwatch-timemeasure-value">min</span>
            <span className="stopwatch-timemeasure-value">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default formattedTimeOutput;
