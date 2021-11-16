import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';


class Home extends Component {
  render() {
    return (
        <div style={{backgroundColor: '#82CAFF'}}>
          <center>
          <h1 style= {{"text-align": "center"}}>Bank of React</h1>
         <center> <img src="https://d28wu8o6itv89t.cloudfront.net/images/bankjpg-1591875524478.jpeg" alt="bank"/></center>
          <p className = "links" style= {{"text-align": "center"}}><Link to="/userProfile">User Profile</Link> &nbsp;&nbsp;<Link to="/LogIn">Login</Link> 
          &nbsp;&nbsp;<Link to="/Debits">Debit</Link>&nbsp;&nbsp;<Link to="/Credits">Credit</Link></p>
         <div className="Balance" >
         <AccountBalance accountBalance={this.props.accountBalance}/>
         </div></center>
        </div>
    );
  }
}

export default Home;
// // src/components/Home.js

// import React, {Component} from 'react';
// import AccountBalance from './AccountBalance';

// class Home extends Component {
//   render() {
//     return (
//         <div>
//           <img src="https://picsum.photos/201" alt="bank"/>
//           <h1>Bank of React</h1>
          
//           <AccountBalance accountBalance={this.props.accountBalance}/>
//         </div>
//     );
//   }
// }

// export default Home;
