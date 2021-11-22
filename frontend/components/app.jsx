import React from "react";
import { Route } from "react-router-dom";

import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
const App = () => (
  <div>
    <h1>Sky BnB</h1>
    <SignupContainer />
    <LoginContainer />
  </div>
)

export default App