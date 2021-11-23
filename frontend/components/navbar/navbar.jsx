import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon, SearchIcon }from '../svg/svg'


class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if (!this.props.currentUser ) {
      return (
        <div className="header">
          <img className="header-icon" 
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" 
          />

          <div className="search-bar">
            <input className="search-bar-input" type="text" placeholder='Start your search' />
              <button  className="search-button">
                  <div 
                    className='search-icon'><SearchIcon />
                  </div>
             </button>
          </div>

          <div className='header-right'>
            <div className='globe-icon'><GlobeIcon /></div>
            <Link to='/signup'>SignUp</Link> 
            <Link to='/login'>Login</Link> 
            <i className="far fa-user-circle"></i>
            
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