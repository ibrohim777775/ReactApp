import React, { Component } from 'react';
import { StyledForm } from '../Styles/NewItemStyled.js'


class NewItem extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { title, stock, rate, isLike, handleChange, clickRadioHandler } = this.props;
    return (
      <div>
        <StyledForm>
          <label name='title'>Title</label>
          <input onChange={(e) => handleChange(e)} name='title' type='text'></input>
          <label name='genre'>genre</label>
          <input onChange={(e) => handleChange(e)} name='genre' type='text'></input>
          <label name='stock'>stock</label>
          <input onChange={(e) => handleChange(e)} name='stock' type='number'></input>
          <label name='rate'>rate</label>
          <input onChange={(e) => handleChange(e)} name='rate' type='number'></input>
          <div>
            <label name='isLike'>Like</label>
            <input onClick={() => clickRadioHandler()} checked={isLike} type='radio' name='isLike'></input>
            <label name='isLike'>DisLike</label>
            <input onClick={() => clickRadioHandler()} type='radio' name='isLike'></input>
          </div>
          <button onClick={(e) => this.props.addItemHandler(e)} type='submit'>Add movie</button>

        </StyledForm>
      </div>
    );
  }
}

export default NewItem;