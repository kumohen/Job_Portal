

import Navbar from "./component/Navbar";
import Home from "./screens/Home";
import DetailJob from "./component/DetailJob"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Profile from "./screens/Profile";
import JobApply from "./screens/JobApply"
import JobView from "./screens/JobView"
import JobApplicant from "./screens/JobApplicant"
import CreateJobPost from "./screens/CreateJobPost"
import UserApplication from "./screens/UserApplication"
import AppJobDetail from "./screens/AppJobDetail"

import { BrowserRouter, Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
           <BrowserRouter>
           <Navbar style={{marginBottom:"120px"}}  />
           <br />
           <br />
           <br />
           <Switch >
             <Route path="/"  exact component={Home} />
             <Route path="/job/:id"  exact component={DetailJob} />
             <Route path="/login"  exact component={Login} />
             <Route path="/register"  exact component={Register} />
             <Route path="/profile/:id"  exact component={Profile} />
             <Route path="/createJobApp"  exact component={CreateJobPost} />
             <Route path="/jobView"  exact component={JobView} />
             <Route path="/apply/:id"  exact component={JobApply} />
             <Route path="/myapplication"  exact component={UserApplication} />
             <Route path="/job/application/:id"  exact component={JobApplicant} />
             <Route path="/myapplication/:appId/job/:jobid"  exact component={AppJobDetail} />
             </Switch>
           </BrowserRouter>
      
    </div>
  );
}

export default App;
