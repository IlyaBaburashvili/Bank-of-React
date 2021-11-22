import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
        <div style={{backgroundColor: '#82CAFF'}}>
          <h1 style= {{"text-align": "center"}}>Bank of React</h1>
          <p style= {{"text-align": "center"}}><Link to="/Bank-of-React/userProfile">User Profile</Link> &nbsp;&nbsp;<Link to="/Bank-of-React/LogIn">Login</Link> 
          &nbsp;&nbsp;<Link to="/Bank-of-React/Debits">Debit</Link>&nbsp;&nbsp;<Link to="/Bank-of-React/Credits">Credit</Link></p>
        
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;

