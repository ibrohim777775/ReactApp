import React, { Component } from 'react';
import '../Styles/NavMovies.css';

class NavMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [
        { id: 1, title: 'Action' },
        { id: 2, title: 'Thriller' },
        { id: 3, title: 'Comedy' },
        { id: 4, title: 'History' }
      ]
    }
  }

  render() {
    const { genres } = this.state;
    return (
      <div className='navbar'>
        <ul>
          <li onClick={() => this.props.filtrHandler('all')}>All types</li>
          {genres.map((item) =>
            <li onClick={() => this.props.filtrHandler(item)} key={item.id}>{item.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default NavMovies;