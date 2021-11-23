import React from "react";
import { Route } from "react-router-dom";



import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import NavbarContainer from './navbar/navbar_container'
const App = () => (
  <div>
    {/* <SignupContainer />
    <LoginContainer /> */}
    <NavbarContainer />
    <Route path='/signup' component={props => <SignupContainer {...props}/>}/>
    <Route path='/login' component={LoginContainer} />
  </div>
)

export default App