import {Link} from 'react-router-dom';
import React,{ Component } from 'react';
import AccountBalance from './AccountBalance';
import './account.css'

const Debits=(props) =>{
    let debitsView = () =>{
        const {debits} =props;
        return debits.map((debit)=>{
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }

    return(
        <>
        <Link to="/"><button type="button"> Home </button></Link>
        <div className = "summary">        
          <center><h1>Debits</h1>
            {debitsView()}
            <br/>
            <AccountBalance accountBalance={props.accountBalance} />
            <br/>
    <form onSubmit = {props.addDebit}>
     <label>
        Description
        <input
          type="text"
          name="Description"
       />
      </label> 
      <label>
        Amount
           <input
          type="number"
           name="Amount"
           step="0.01"
           pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
        />
      </label>
      <button >Add Debits</button>
    </form>
            </center>

        </div></>
        
    )
}

export default Debits;
