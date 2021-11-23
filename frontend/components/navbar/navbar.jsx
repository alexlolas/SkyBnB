import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if (!this.props.currentUser ) {
      return (
        <div className="header">
          <img className="header-icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"  />
          <input className="search-bar" type="text" />
          <div className='header-right'>
            <Link to='/signup'>SignUp</Link> 
            <Link to='/login'>Login</Link> 

          </div>
        </div>
      )
    } else {
      return (
        <div>
          Welcome! {this.props.currentUser.firstName}
        </div>
      )
    }
  }
}

export default Navbar