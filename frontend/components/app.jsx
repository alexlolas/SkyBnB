import React from "react";
import { Route } from "react-router-dom";



import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import ListingIndexContainer from './listing/listing_index_container'
import NavbarContainer from './navbar/navbar_container'
import Modal from "./modal/modal";
const App = () => (
  <div>
    <NavbarContainer />
    <Modal />
    {/* <ListingIndexContainer /> */}

    <Route path='/listings' component={ListingIndexContainer}/>
    {/* <Route path='/signup' component={props => <SignupContainer {...props}/>}/>
    <Route path='/login' component={LoginContainer} /> */}
  </div>
)

export default App