import './App.css';
import Clock from './Clock';

import React, { Component } from 'react';
import ShowingItems from './ShowingItems';


class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <ShowingItems />
      </div>
    );
  }
}

export default App;
