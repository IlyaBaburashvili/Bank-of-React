import {Link} from 'react-router-dom';
import React from 'react';
import AccountBalance from './AccountBalance';



const Debits=(props) =>{
    let debitsView = () =>{
        const {debits} =props;
        return debits.map((debit)=>{
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }

    return(
        <div>
             <Link to="/Bank-of-React">Return to Home</Link>
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
        />
      </label>
      <button >Add Debits</button>
    </form>
            </center>

        </div>
        
    )
}

export default Debits;
