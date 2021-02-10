import '../Styles/App.css';

import React, { Component } from 'react';
import Movies from '../Components/Movies';
import Counter from '../Components/Counter';


class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      one: 8,
      two: 2,
      three: 3,
      four: 4
    };
  };
  render() {
    return (
      <div>
        
        <Movies />
        <Counter counts={this.state} />
      </div>
    );
  }
}

export default App;
