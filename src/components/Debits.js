const Debits=(props) =>{
    let debitsView = () =>{
        const {debits} =props;
        return debits.map((debit)=>{
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }
    return(
        <form className = 'add-debit'>
        <div>
            <h1>Debits</h1>
            {debitsView()}
        </div>
        <div className = 'description'>
          <label>Description
            <input type='text' placeholder='Description'/>
          </label>
        </div>
        <div className = 'amount'>
          <label>Amount
            <input type='number' placeholder='Amount'/>
          </label>
        </div>
        <input type='submit' value='Add'/>
      </form>
    )
}

export default Debits;
