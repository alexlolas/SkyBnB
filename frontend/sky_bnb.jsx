import React from "react";
import ReactDOM  from "react-dom";

//testing imports

import * as SessionUtil from './util/session_api_util'
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  
  //For Testing
  window.login = SessionUtil.login
  window.signup = SessionUtil.signup
  window.logout = SessionUtil.logout
  ReactDOM.render(<h1>Sky BnB</h1>, root)
})