import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import axios from "axios";
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  async componentDidMount(){
     let debits = await axios.get("https://moj-api.herokuapp.com/debits")
     let credits = await axios.get("https://moj-api.herokuapp.com/credits")
 
     debits = debits.data
     credits = credits.data
 
    //  let debitSum = 0, creditSum = 0;
    //  debits.array.forEach((debit) => {
    //      debitSum+=debit.amount
    //  })
    //  credits.array.forEach((credit) => {
    //      creditSum+=credit.amount
    //  })
 
    //  let accountBalance = creditSum-debitSum;

    this.setState({debits, credits})
  }

   addDebit = (e) =>{
 
  }

  addCredit = (e) =>{
 
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
  render() {
    const {debits,credits }=this.state;
    
    const CreditsComponent = () => (<Credits addCredit={this.addCredit}credits={credits}/>)
    const DebitsComponent = () => (<Debits addDebit={this.addDebit}debits={debits}/>)

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    
    
    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/> 
            <switch>
            <Route exact path="/debits" render={DebitsComponent}/> 
            <Route exact path="/credits" render={CreditsComponent}/> 
            </switch>
          </div>
        </Router>
    );
  }

}

export default App;

 
 
 
//  render(){
//     
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
