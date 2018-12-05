import React, { Component } from "react";
import "./Stopwatch.scss";
import FormattedTimeOutput from "../../components/helpers/FormattedTimeOutput";
import LapsList from "../../components/helpers/LapsList";
import ButtonsToDisplay from "../../components/helpers/ButtonsToDisplay";

export class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      laps: [],
      isPaused: false
    };
    this.incrementer = null;
  }

  startHandler = () => {
    let startTime = Date.now();
    this.incrementer = setInterval(() => {
      if (!this.state.isPaused) {
        this.setState({
          time: Date.now() - startTime
        });
      } else {
        startTime += 1000;
      }
    }, 1000);
  };

  pauseToggleHandler = () => {
    this.setState(prevState => ({
      isPaused: !prevState.isPaused
    }));
  };

  resetHandler = () => {
    clearInterval(this.incrementer);
    this.setState({
      time: 0,
      isPaused: false
    });
  };

  lapHandler = () => {
    this.setState(prevState => ({
      laps: prevState.laps.concat(this.state.time)
    }));
  };

  lapClearAllHandler = () => {
    this.setState({
      laps: []
    });
  };

  render() {
    return (
      <div className="stopwatch-container">
        <FormattedTimeOutput
          time={this.state.time}
          isPaused={this.state.isPaused}
        />
        <ButtonsToDisplay
          time={this.state.time}
          isPaused={this.state.isPaused}
          startHandler={this.startHandler}
          pauseToggleHandler={this.pauseToggleHandler}
          resetHandler={this.resetHandler}
          lapHandler={this.lapHandler}
        />
        <LapsList
          laps={this.state.laps}
          lapClearAllHandler={this.lapClearAllHandler}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default Stopwatch;
