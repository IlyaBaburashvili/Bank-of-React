const Credits=(props) =>{
    let creditsView = () =>{
        const {credits} =props;
        return credits.map((credit)=>{
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }
    return(
        <form className = 'add-credit'>
        <div>
            <h1>Credits</h1>
            {creditsView()}
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

export default Credits;
