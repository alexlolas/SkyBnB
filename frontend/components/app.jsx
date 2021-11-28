import React from "react";
import { Route, Switch} from "react-router-dom";



import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import ListingIndexContainer from './listing/listing_index_container'

import ListingFormContainer from './listing/listing_form_container'
import EditListingContainer from "./listing/edit_listing_container";
import NavbarContainer from './navbar/navbar_container'
import SplashContainer from "./listing/splash/splash_container";
import Modal from "./modal/modal";
const App = () => (
  <div>
    <NavbarContainer />
    <Modal />
      <Switch> 
        <Route exact path='/' component={SplashContainer} />
        <Route exact path='/listings' component={ListingIndexContainer}/>
        <Route exact path='/listings/create' component={ListingFormContainer} />
        <Route exact path='/listings/:listingId/edit' component={EditListingContainer}/>

      </Switch>
    {/* <Route path='/signup' component={props => <SignupContainer {...props}/>}/>
    <Route path='/login' component={LoginContainer} /> */}
  </div>
)

export default App