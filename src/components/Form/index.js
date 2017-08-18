import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      artist: "",
      songTitle: "",
      notes: ""
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input onChange={(event) => this.handleUserInput(event, 'userName')} value={ this.state.userName } />
          <input onChange={(event) => this.handleUserInput(event, 'artist')} value={ this.state.artist } />
          <input onChange={(event) => this.handleUserInput(event, 'songTitle')} value={ this.state.songTitle } />
          <input onChange={(event) => this.handleUserInput(event, 'notes')} value={ this.state.notes } />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;
