import {Link} from 'react-router-dom';
import React from 'react';
import AccountBalance from './AccountBalance';

const Credits=(props) =>{
    let creditsView = () =>{
        const {credits} =props;
        return credits.map((credit)=>{
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }
    return(
        <div>
            <center> <h1>Credits</h1>
            {creditsView()}
            <br/>
            <AccountBalance accountBalance={props.accountBalance} />
            <br/>
    <form onSubmit = {props.addCredit}>
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
        />
      </label>
      <button >Add Credits</button>
    </form>
    </center>
        </div>
    )
}

export default Credits;
