import React, { Component } from 'react';
import NavBar from '../NavBar';
import Form from '../Form';
import Results from '../Results';
import './App.css';
const USERS_URL = 'https://tiny-lasagna-server.herokuapp.com/collections/playlisting';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch(USERS_URL)
      .then(res => {
        return res.json();
      })
      .then(users => {
        this.addUsers(users);
      });
  }

  addUserToApi = (user) => {
    fetch(USERS_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
  }

  addUser = (user) => {
    // Asynchronous call to add user to API.
    this.addUserToApi(user);
    // Add user to 'users' in our App state.
    const { users } = this.state;
    users.push(user);
    this.setState({ users });
  }

  addUsers = (users) => {
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
        <div className="over-wrapper">
          <div className="top-content">
            <NavBar />
          </div>
          <div className="middle-content">
            <div className="middle-content-item">
              <Form addUser={this.addUser} />
            </div>
            <div className="middle-content-item">
              <Results users={this.state.users} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
