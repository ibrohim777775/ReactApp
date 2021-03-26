import React, { Component } from 'react';
import { StyledDiv } from '../Styles/UserInfoStyled';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    }
  };

  render() {
    console.log('render userInfo');

    console.log(this.props);
    return (
      <div>
        <h1>Salom</h1>
      </div>
    );
  }
}

export default UserInfo;