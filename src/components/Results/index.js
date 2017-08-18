import React, { Component, PropTypes } from 'react';
import Form from '../Form';
import map from 'lodash/map';

class Results extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  render(){
    return (
      <div className="results">
        {map(this.props.users, (user) => (
          <div className="result-item">
            <h4>User: { user.userName }</h4>
            <h4>Artist/Band: { user.artist }</h4>
            <h4>Title: { user.songTitle }</h4>
            <h4>Notes: { user.notes }</h4>
          </div>
        ))}
      </div>
    )
  }
}

export default Results;
