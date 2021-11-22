import React from "react";
import { Route } from "react-router-dom";

import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
const App = () => (
  <div>
    {/* <SignupContainer />
    <LoginContainer /> */}
    <h1>Sky BnB</h1>
    <Route path='/signup' component={props => <SignupContainer {...props}/>}/>
    <Route path='/login' component={LoginContainer} />
  </div>
)

export default App