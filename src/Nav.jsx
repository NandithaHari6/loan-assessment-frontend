import {Link} from "react-router-dom";

function Nav() {
    return (
      <>
      <div className="nav">
            <Link className="link" to="/profile">Profile</Link>
            <Link className="link" to="/loandetails">Loan Details</Link>
            <Link className="link" to="/grievance">Grievance Redressal </Link>
      </div>
       
      </>
    )
  }
  
  export default Nav;
  