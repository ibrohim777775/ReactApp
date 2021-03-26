import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { StyledDiv } from '../Styles/UsersStyled';
import Clock from './Clock';
import UserInfo from './UserInfo';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }
  render() {
    const { users } = this.state;
    return (
      <StyledDiv>


        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>adress city</th>
              <th>phone</th>
              <th>Company name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(item => (
              <tr key={item.id}>
                <td>
                  <Link to={`/users/${item.id}`}>
                    {item.name}

                  </Link>
                </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Route
          path='/users/:id'
          render={(props) => (
            <UserInfo {...props} users={users} />
          )}
        />
      </StyledDiv>
    );
  }
}

export default Users;