import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import AccountBalance from './AccountBalance';
// const handleChange = (e) => {
//     console.log(e.target.value)
// }

const handleSubmit = (e) => {
    e.preventDefault();
    var inputs = document.getElementsByTagName('input');
    var description = inputs[0].value

    var amount = inputs[1].value
    console.log(description,amount)
    this.setState.addDebit(this.useState.debitsView)

}


const Debits=(props) =>{
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
    let debitsView = () =>{
        const {debits} =props;
        return debits.map((debit)=>{
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description}{date}</li>
        })
    }

    return(
        <div>
            <div style={{backgroundColor: 'grey'}}>
             <Link to="/">Return to Home</Link>
          <center><h1>Debits</h1>
            {debitsView()}
            <br/>
            <AccountBalance accountBalance={props.accountBalance} />
            <br/>
    <form onSubmit = {handleSubmit}>
     <label>
        Description
        <input
          type="text"
          name="Description"
          value ={description} onChange={(e) => setDescription(e.target.value)}/>
      </label> 
      <label>
        Amount
           <input
          type="number"
           name="Amount"
           value ={amount} onChange={(e) => setAmount(e.target.value)}/>
      </label>
      <button >Add Debits</button>
    </form>
            </center>
            </div>

        </div>
        
    )
}

export default Debits;
