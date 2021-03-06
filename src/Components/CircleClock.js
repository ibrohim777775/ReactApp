import React, { Component } from 'react';
import '../Styles/CircleClock.css';

class CircleClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countTimer: 0,
      secondHand: <div className="second-hand" ></div>,
      value: ''
    }
    this.setValueHandle = this.setValueHandle.bind(this);

  }

  diallines = () => {
    let dial = [];
    for (let i = -1; i < 60; i++) {
      dial.push(<div className='diallines' style={{ transform: 'rotate(' + 6 * i + 'deg)' }}></div>);
    }
    return dial;
  }
  startTimer = () => {
    let itemOne, itemTwo;
    if (this.state.countTimer === 0) {

      itemOne = setInterval(() => this.setClockCount(), 1000);
      itemTwo = setInterval(() => this.setSecondHand(), 1000);
    }
    else {
      clearInterval(itemOne);
      clearInterval(itemTwo);
      this.setState({ countTimer: -1 })
    }

  }
  setClockCount = () => {
    this.setState({ countTimer: this.state.countTimer + 1 });
  }
  setSecondHand = () => {
    this.setState((prevState) => ({ ...prevState, secondHand: <div style={{ transform: 'rotate(' + 6 * prevState.countTimer + 'deg)' }} className="second-hand" ></div> }));

  }
  setValueHandle(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  }
  startClock = () => {
    console.log(5454);
    let time = 360 / this.state.value;
    setInterval(() => { this.setTimerCount() }, 1000);
    setInterval(() => { this.setTimerSecondHand(time) }, 1000);


  }
  setTimerCount = () => {
    this.setState({ value: this.state.value - 1 })
  }
  setTimerSecondHand = (time) => {
    this.setState((prevState) => ({ ...prevState, secondHand: <div style={{ transform: 'rotate(' + time * prevState.value + 'deg)' }} className="second-hand" ></div> }));
  }
  render() {
    return (
      <>
        <div className='clock__header'>
          <div>
            <h2 className='clock__title'>Secundomer</h2>
            <div className='sekundomer'>
              <button className='start__btn' onClick={() => this.startTimer()}>Start</button>
              <h4>{this.state.countTimer}</h4>

            </div>
          </div>
          <div className='clock__timer'>
            <h2 className='clock__title'> Timer</h2>
            <input type='number' className='timer' value={this.state.value} onChange={this.setValueHandle}></input>
            <button className='start__btn' onClick={() => this.startClock()}>Start timer</button>
          </div>
        </div>
        <div className='clock__body'>
          {/* <h1>Circle clock</h1> */}
          <div className='circle--clock'>
            <div className="dot"></div>
            <div>
              {this.state.secondHand}
            </div>
            <div>
              <span className="h3">3</span>
              <span className="h6">6</span>
              <span className="h9">9</span>
              <span className="h12">12</span>
            </div>
            {/* <div className="diallines"></div> */}
            {this.diallines()}
          </div>
        </div>
      </>
    );
  }
}

export default CircleClock;