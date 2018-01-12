//Dependencies
import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import reverse from 'lodash/reverse';
//Internals
import Form from '../Form';
import './styles.css'

class Results extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render(){
    return (
      <div className="results">
        {map(reverse(this.props.users), (user, index) => (
          <div className="result-item" key={`${user.userName}-${index}`}>
            <h4>User: { user.userName }</h4>
            <h4>Artist/Band: { user.artist }</h4>
            <h4>Title: { user.songTitle }</h4>
            <h4>Notes: { user.notes }</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
