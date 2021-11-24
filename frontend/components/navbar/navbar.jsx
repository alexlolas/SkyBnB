import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon, SearchIcon }from '../svg/svg'


class Navbar extends React.Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render(){
    
    if (!this.props.currentUser) {
      return (
        <div className="header">
          
          <Link to='/'>
            <img className="header-icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            />
          </Link>
         
          

          <div className="search-bar">
            <input className="search-bar-input" type="text" placeholder='Start your search' />
              <button  className="search-button">
                  <div 
                    className='search-icon'><SearchIcon />
                  </div>
             </button>
          </div>
        
            {/* <i className="far fa-user-circle"></i> */}
            <div className="header-right">
              Become a host
            <div className="dropdown">
            {/* <div>Become a host</div> */}
            <div className="far fa-user-circle"></div>
              <div className="dropdown-menu">
              <ul className="dropdown-content" onClick={() => this.props.openModal('login')}>Log In</ul>
              <ul className="dropdown-content" onClick={() => this.props.openModal('signup')}>Sign Up</ul>
              </div>

            </div>
            </div>
          


            
        
        </div>
      )
    } else {
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
        
            {/* <i className="far fa-user-circle"></i> */}
            <div className="header-right">
              Become a host
            <div className="dropdown">
            {/* <div>Become a host</div> */}
            <div className="far fa-user-circle"></div>
              <div className="dropdown-menu">
                <ul className="dropdown-content">Welcome {this.props.currentUser.firstName}</ul>
                <ul className="dropdown-content" onClick={() => this.props.logout()}>Logout</ul>
              </div>

            </div>
            </div>
          


            
        
        </div>
      )
    }
  }
}

export default Navbar