import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();

    let d = new Date();

    this.state = {
      time: d.toLocaleTimeString(),
      date: d.toLocaleDateString()
    };
  }

  componentDidMount() {
    let intervalId = setInterval(this.tick.bind(this), 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  tick() {
    let d = new Date();
    this.setState({
      time: d.toLocaleTimeString(),
      date: d.toLocaleDateString()
    });
  }

  render() {
    return (
      <section>
        <h1><span>Time:</span><span>{this.state.time}</span></h1>
        <h1><span>Date:</span><span>{this.state.date}</span></h1>
      </section>
    );
  }
}

export default Clock;
