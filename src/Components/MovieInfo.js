import React, { Component } from 'react';
import queryString from 'query-string';
import { StyledDiv } from '../Styles/MovieInfoStyled';
import { Link } from 'react-router-dom';

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }


  componentDidMount() {
    let id = +this.props.match.params.id;
    // console.log(id);
    let fakeItem = this.props.item.filter((i) => i.id === id);
    let item = fakeItem[0];
    console.log(item);

    this.setState({ item });
  }
  render() {
    // const { item } = this.props;
    // console.log(item[0]);
    // console.log(location.id)
    // console.log(this.props);
    const { item } = this.state;
    const { updateMovie, handleChange } = this.props;
    return (
      <StyledDiv>
        <h1>{item.title}</h1>
        <form>
          <div>
            <label htmlFor='title'>Title Movie</label>
            <input onChange={(e) => handleChange(e)} name='title' placeholder={item.title}></input>
          </div>
          <div>
            <label htmlFor='genre'>genre Movie</label>
            <input onChange={(e) => handleChange(e)} name='genre' placeholder={item.genre}></input>
          </div>
          <div>
            <label htmlFor='rate'>rate Movie</label>
            <input onChange={(e) => handleChange(e)} name='rate' min='1' max='10' type='number' placeholder={item.rate}></input>
          </div>
          <div>
            <label htmlFor='stock'>stock Movie</label>
            <input onChange={(e) => handleChange(e)} name='stock' type='number' min='1' max='100' placeholder={item.stock}></input>
          </div>

          <div>
            <label htmlFor='isLike'>isLike?</label>
            <input type='checkbox' onChange={(e) => handleChange(e)} name='isLike'></input>
          </div>
          <div>
            <Link to='/movies'>

              <button onClick={(e) => updateMovie(e, item.id)}>Update</button>
            </Link>
          </div>

        </form>

      </StyledDiv>
    );
  }
}

export default MovieInfo;