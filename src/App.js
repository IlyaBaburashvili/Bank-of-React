import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import axios from "axios";
import Debits from './components/Debits';
import Credits from './components/Credits';
import AccountBalance from './components/AccountBalance';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
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
 
     let debitSum = 0, creditSum = 0;
     
     credits.forEach((credit) => {
         creditSum+=credit.amount
     });
     debits.forEach((debit) => {
      debitSum+=debit.amount
  })
 
     let accountBalance = creditSum-debitSum;

    this.setState({debits, credits,accountBalance});
  }

  
   addDebit = (e) =>{
      e.preventDefault();
      var today = new Date();
      // var description = e.target[0].value
      // var amount = e.target[1].value
      // console.log(description,amount)
      let newDebit = {
        'id': Math.floor(Math.random()*100000)+1,
        'amount': e.target[1].value,
        'date':   (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()),
        'description': e.target[0].value
      };

      let updatedDebits = [...this.state.debits]
      updatedDebits.push(newDebit);
      this.setState({debits: updatedDebits})

      let newBalance = Number(this.state.accountBalance) - Number(e.target[1].value);
      this.setState({accountBalance: newBalance})
  }

  addCredit = (e) =>{
    e.preventDefault();
      var today = new Date();
    let newCredit = {
      'id': Math.floor(Math.random()*100000)+1,
        'amount': e.target[1].value,
        'date':   (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()),
        'description': e.target[0].value
    };

    let updatedCredits = [...this.state.credits]
    updatedCredits.push(newCredit);
    this.setState({credits: updatedCredits})

    let newBalance = Number(this.state.accountBalance) + Number(e.target[1].value);
    this.setState({accountBalance: newBalance})
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
  render() {
    const {debits,credits }=this.state;
    
    const CreditsComponent = () => (<Credits addCredit={this.addCredit}credits={credits} accountBalance={this.state.accountBalance}/>)
    const DebitsComponent = () => (<Debits addDebit={this.addDebit}debits={debits} accountBalance={this.state.accountBalance}/>)

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

 
 