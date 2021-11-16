// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
        <>
        <center style={{backgroundColor: 'rgb(100, 200, 0)'}}>
          <h1> User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
          <img src="https://www.pngitem.com/pimgs/m/75-753817_transparent-customer-icon-png-remarketing-icons-png-download.png" alt="user" width="240" height="300"/>
          <Link to="/">Return to Home</Link>
          </center>
        </>
    );
  }
}

export default UserProfile;
