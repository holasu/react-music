import React, { Component } from 'react';
import NavBar from '../NavBar';
import Form from '../Form';
import Results from '../Results';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
    this.addUser = this.addUser.bind(this);
  }

  addUser(user) {
    const { users } = this.state;
    users.push(user);
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Form addUser={this.addUser} />
        <Results users={this.state.users} />
      </div>
    );
  }
}

export default App;
