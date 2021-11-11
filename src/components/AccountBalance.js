// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
           <h4 style= {{"text-align": "center"}}>Account Balance</h4>
           <h5 style= {{"text-align": "center", "font-weight": "normal"}}>{this.props.accountBalance} </h5>
        </div>
    );
  }
}

export default AccountBalance;