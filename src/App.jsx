
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

import Nav from "./Nav.jsx";
import Profile from "./Profile.jsx";
import LoanDetails from "./LoanDetails.jsx";
import Grievance from "./Grievance.jsx";
import './App.css'
function App() {
  if(process.env_NODE_ENV === 'production'){
    disableReactDevTools(); 
  }
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/loandetails" element={<LoanDetails />} />
          <Route path="/grievance" element={<Grievance /> } />

        </Routes>

    </Router>
  )
}

export default App
