import {useState,useEffect} from 'react'
function Loan({ index,amount,interest,status }){
  return(
    <div className="loan">
      <div>Loan Amount:{amount}</div>
      <div>Interest:{interest}</div>
      <div>Status:{status}</div>
    </div>
  )
}
function LoanDetails() {
  const [loan,setloan]=useState([]);
  

  const getDetails= ()=>{  fetch("http://loan-assessment.onrender.com/getDetails").then((response)=>{
    if(!response.ok){
      throw new Error("Error in request");
    }
    const result=response.json();
    result.then((data)=>{
      console.log(data);
      const loanarray=data.loan;
      console.log(loanarray);
      setloan(loanarray);
    })
  }).catch((err)=>{
    console.log(err);
  })

}
    return (
      <>
       <div className="loan">
        <h1>Loan Details</h1>
        {loan.map(
          (item,index)=>{
         return (<Loan amount={item.LoanAmount} interest={item.Interest} status={item.Status} index={index} />)

        })}
       
       </div>
      </>
    )
  }
  
  export default LoanDetails;
  