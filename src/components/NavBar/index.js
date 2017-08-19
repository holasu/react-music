import React, { Component } from 'react';
import './styles.css';

class NavBar extends Component {
  render() {
    return(
      <div className="navbar-wrapper">
        <div className="navbar">
          <h1>Favorite Artists</h1>
        </div>
        <div className="middle-page">
          <p>Share your favorite artists and songs</p>
        </div> 
      </div>
    )
  }
}

export default NavBar;
