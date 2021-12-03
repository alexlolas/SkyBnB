import React from "react";
import { Route, Switch} from "react-router-dom";
import ScrollToTop from "./scroll_to_top";


import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import ListingIndexContainer from './listing/listing_index_container'

import ListingFormContainer from './listing/listing_form_container'
import EditListingContainer from "./listing/edit_listing_container";
import ReviewFormContainer from "./review/review_form_container";
import ListingShowContainer from './listing/listing_show_container'
import NavbarContainer from './navbar/navbar_container'
import SplashContainer from "./splash/splash_container";
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
const App = () => (
  <div>
    <ScrollToTop />
    <NavbarContainer />
    <Modal />
      <Switch> 
        <Route exact path='/' component={SplashContainer} />
        <Route exact path='/listings' component={ListingIndexContainer}/>
        <ProtectedRoute exact path='/listings/create' component={ListingFormContainer} />
        <Route exact path='/listings/:listingId' component={ListingShowContainer}/>
        <ProtectedRoute exact path='/listings/:listingId/edit' component={EditListingContainer}/>
        <ProtectedRoute exact path='/reviews/:create' component={ReviewFormContainer}/>


      </Switch>
    {/* <Route path='/signup' component={props => <SignupContainer {...props}/>}/>
    <Route path='/login' component={LoginContainer} /> */}
  </div>
)

export default App