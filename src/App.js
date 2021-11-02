import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      }
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;
// import React, {Component} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Debits from './components/Debits';
// import Home from './components/Home';
// import UserProfile from './components/UserProfile';
// import axios from "axios";
// import './App.css';

// class App extends Component {
//   constructor(props) {
//       super(props);
//       this.state={
//           accountBalance: 500,
//           currentUser:{
//               userName: 'John',
//               memberSince:'01/01/01',
//           },
//       debits: [],
//       credits: []
//  }
//  }
 
// //  async componentDidMount(){
// //      let debits = await axios.get("https://moj-api.herokuapp.com/debits")
// //      let credits = await axios.get("https://moj-api.herokuapp.com/credits")
 
// //      debits = debits.data
// //      credits = credits.data
 
// //      let debitSum = 0, creditSum = 0;
// //      debits.array.forEach((debit) => {
// //          debitSum+=debit.amount
// //      })
// //      credits.array.forEach((credit) => {
// //          creditSum+=credit.amount
// //      })
 
// //      let accountBalance = creditSum-debitSum;
// //      this.setState({debits, credits, accountBalance})
// //  }
 
// //  addDebit = (e) =>{
 
// //  }
 
//  render(){
//     //  const {debits }=this.state;
 
//     // // const DebitsComponent = () => (<Debits addDebit={this.addDebit}debits={debits}/>)
//       const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
//     //  const UserProfileComponent = () => (
//     //      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
//     //  );

//      return(
//          <Router>
           
//              <div>
//              <Route exact path="/" render={HomeComponent}/>
//              </div>
//             {/* <Route exact path="/userProfile" render={UserProfileComponent}/> */}
             
//              {/* <Switch>
//                <Route exact path="/debits" render={DebitsComponent}/>
//              </Switch> */}
//          </Router>
//      );
//  }
//  }

 

// export default App;
