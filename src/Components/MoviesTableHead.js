import React, { Component } from 'react';

class MoviesTableHead extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { sortAtoZ, sortIcon, sortIconForNumber, onClickTheadHandler } = this.props;
    return (
      <thead>
        <tr>
          <th>#</th>
          <th onClick={() => onClickTheadHandler('title')}>Title  <p onClick={() => sortAtoZ('title', 0)}>{sortIcon(0)} </p></th>
          <th onClick={() => onClickTheadHandler('genre')}>Genre <p onClick={() => sortAtoZ('genre', 1)}>{sortIcon(1)}</p></th>
          <th onClick={() => onClickTheadHandler('stock')}>Stock <p onClick={() => sortAtoZ('stock', 2)}>{sortIconForNumber(2)} </p></th>
          <th onClick={() => onClickTheadHandler('rate')}>Rate <p onClick={() => sortAtoZ('rate', 3)}>{sortIconForNumber(3)} </p></th>
          <th></th>
          <th></th>
        </tr >
      </thead >
    );
  }
}

export default MoviesTableHead;