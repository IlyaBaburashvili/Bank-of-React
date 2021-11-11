import {Link} from 'react-router-dom';
import React, { useState } from 'react';

// const handleChange = (e) => {
//     console.log(e.target.value)
// }

const handleSubmit = (e) => {
    e.preventDefault();
    var inputs = document.getElementsByTagName('input');
    var description = inputs[0].value
    var amount = inputs[1].value
    console.log(description,amount)
    this.useState.addDebit(this.state.debitsView)

}

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
             <Link to="/">Return to Home</Link>
          <center><h1>Debits</h1>
            {debitsView()}
            <br></br>
    <form onSubmit = {handleSubmit}>
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
          type="text"
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
