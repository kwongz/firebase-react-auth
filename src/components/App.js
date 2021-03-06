import React from "react";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
        <div className="w-100" style={{ maxWidth: '400px'}}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path ='/' component={Dashboard}/>
                <Route exact path ='/signup' component={SignUp}/>
                <Route exact path ='/login' component={LogIn}/>
                <Route path='/forgot-password' component={ForgotPassword}/>
                <Route path='/update-profile' component={UpdateProfile}/>
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>

  )
}

export default App;
