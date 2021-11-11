import {Link} from 'react-router-dom';

const handleSubmit = (e) => {
    e.preventDefault();
    var inputs = document.getElementsByTagName('input');
    var description = inputs[0].value
    var amount = inputs[1].value
    console.log(description,amount)

}

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
             <Link to="/">Return to Home</Link>
             <center>
            <h1>Credits</h1>
            {creditsView()}
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
      <button>Add Credits</button>
    </form></center>
        </div>
    )
}

export default Credits;