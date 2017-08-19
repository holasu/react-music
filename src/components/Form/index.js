import React, { Component, PropTypes } from 'react';
import './styles.css';

class Form extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      artist: "",
      songTitle: "",
      notes: ""
    }
  }

  handleUserInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      userName: "",
      artist: "",
      songTitle: "",
      notes: ""
    })
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(event) => this.handleUserInput(event, 'userName')}
            value={ this.state.userName }
            placeholder="Username"
          />
          <input
            onChange={(event) => this.handleUserInput(event, 'artist')}
            value={ this.state.artist }
            placeholder="Artist"
          />
          <input
            onChange={(event) => this.handleUserInput(event, 'songTitle')}
            value={ this.state.songTitle }
            placeholder="Song Title"
          />
          <input
            onChange={(event) => this.handleUserInput(event, 'notes')}
            value={ this.state.notes }
            placeholder="Notes"
          />
          <button type="submit">Add Artist</button>
        </form>
      </div>
    )
  }
}

export default Form;
