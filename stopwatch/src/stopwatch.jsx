import React, { Component } from "react";
import "./stopwatch.css";
document.title = "STOP WATCH";
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      startTime: 0,
      currentTime: 0,
    };
  }

  startStopwatch = () => {
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
        startTime: Date.now() - this.state.currentTime,
      });
      this.timer = setInterval(this.updateTime, 10);
    } else {
      this.setState({ isRunning: false });
      clearInterval(this.timer);
    }
  };

  resetStopwatch = () => {
    this.setState({
      isRunning: false,
      startTime: 0,
      currentTime: 0,
    });
    clearInterval(this.timer);
  };

  updateTime = () => {
    this.setState({
      currentTime: Date.now() - this.state.startTime,
    });
  };

  formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${milliseconds}`;
  };

  render() {
    return (
      <div className="stopwatch">
        <h1
          style={{
            color: "white",
          }}
        >
          STOPWATCH
        </h1>
        <div
          style={{
            color: "white",
          }}
          className="time"
        >
          {this.formatTime(this.state.currentTime)}
        </div>
        <button onClick={this.startStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.resetStopwatch}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
