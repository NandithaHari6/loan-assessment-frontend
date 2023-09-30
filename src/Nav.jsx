import {Link} from "react-router-dom"

function Nav() {
    return (
      <>
      <div className="nav">
            <Link to="/profile">Profile</Link>
            <Link to="/loandetails">Loan Details</Link>
            <Link to="/grievance">Grievance Redressal </Link>
      </div>
       
      </>
    )
  }
  
  export default Nav
  