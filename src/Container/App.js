
import React, { Component } from 'react';
import Movies from '../Container/Movies';
import Counter from '../Components/Counter';
import Clock from '../Components/Clock'
import CircleClock from '../Components/CircleClock';
import styled from 'styled-components';
import '../Styles/App.css';
import NavMovies from '../Components/NavMovies';
import { BrowserRouter } from 'react-router-dom';

const Button = styled.button`
  background : ${props => props.primary ? 'green' : 'blue'};
  color : ${props => props.primary ? 'blue' : 'balck'};

`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      one: 8,
      two: 2,
      three: 3,
      four: 4
    };
  };

  render() {

    return (
      <BrowserRouter>
        {/* <Button primary> Button primary </Button> */}
        {/* <Clock /> */}
        {/* <CircleClock /> */}
        <Movies />
        {/* <Counter counts={this.state} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
