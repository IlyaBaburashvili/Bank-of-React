import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Debits from './components/Debits';
import axios from "axios";
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
          accountBalance: 0,
          currentUser:{
              userName: 'John',
              memberSince:'01/01/01',
          },
      debits: [],
      credits: []
 }
 }
 
 async componentDidMount(){
     let debits = await axios.get("https://moj-api.herokuapp.com/debits")
     let debits = await axios.get("https://moj-api.herokuapp.com/credits")
 
     debits = debits.data
     credits = credits.data
 
     let debitSum = 0, creditSum = 0;
     debits.array.forEach((debit) => {
         debitSum+=debit.amount
     })
     credits.array.forEach((credit) => {
         creditSum+=credit.amount
     })
 
     let accountBalance = creditSum-debitSum;
     this.setState({debits, credits, accountBalance})
 }
 
 addDebit = (e) =>{
 
 }
 
 render(){
     const {debits }=this.state;
 
     const DebitsComponent = () => (<Debits addDebit={this.addDebit}debits={debits}/>)
 
     return(
         <Router>
             <Switch>
                 <Route exact path="/debits" render={DebitsComponent}/>
             </Switch>
         </Router>
     );
 }
 }
 export default App;
 

export default App;
