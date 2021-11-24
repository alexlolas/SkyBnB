import React from "react";
import ReactDOM  from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
//testing imports

import * as SessionUtil from './util/session_api_util'
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },

      session: {
        id: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  //For Testing
  window.login = SessionUtil.login
  window.signup = SessionUtil.signup
  window.logout = SessionUtil.logout
  window.getState = store.getState
  window.dispatch = store.dispatch
  ReactDOM.render(<Root store={store} />, root)
})