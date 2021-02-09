import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props){
    super(props);
    this.state = {
    count: 1,
    date : new Date,
    // second : 
    // second : setInterval(()=> this.state.date.getSeconds(), 1000)
    };
  }
  clickHandler = ()=>{
    this.setState({count: this.state.count +1})
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

  
  render() {
    return (
      <div>
        {/* <h1>Salom bu men birinchi yozgan react App</h1>
        <h2>bu raqam {this.state.count}</h2>

        <button onClick={this.clickHandler}> Add</button> */}
        <div className='page'>
          <div className='clock'>
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