import React, { Component } from 'react';
import '../Styles/App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      date: new Date,
      isShowClick: true
      // second : 
      // second : setInterval(()=> this.state.date.getSeconds(), 1000)
    };
  }
  clickHandler = () => {
    this.setState({ count: this.state.count + 1 })
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  showClock() {
    this.setState((prevState) => ({ ...prevState, isShowClick: !prevState.isShowClick }));
  }

  render() {
    return (
      <div>
        {/* <h1>Salom bu men birinchi yozgan react App</h1>
        <h2>bu raqam {this.state.count}</h2>

        <button onClick={this.clickHandler}> Add</button> */}
        <div className='clock__item'>
          <button onClick={() => this.showClock()} className='clock__btn'> Show / Hide clock</button>

        </div>
        <div className='page'>
          <div className={this.state.isShowClick ? 'clock' : 'clock clock--notShow'} >
            <div>{this.state.date.getHours()} </div>
            <div className='nuqta'>:</div>
            <div>{this.state.date.getMinutes()} </div>
            <div className='nuqta'>:</div>

            <div>{this.state.date.getSeconds()}</div>
          </div>
        </div>



      </div>
      //  setInterval(()=> this.state.date.getSeconds(), 1000)

    );
  }
}

export default Clock;