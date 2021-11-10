import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          <p><Link to="/userProfile">User Profile</Link></p>
          <p><Link to="/LogIn">Login</Link></p>
          <p><Link to="/Debits">Debit</Link></p>
          <p><Link to="/Credits">Credit</Link></p>
          

          <AccountBalance accountBalance={this.props.accountBalance}/>
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
