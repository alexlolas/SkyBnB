import React from "react";
import { Link } from "react-router-dom";
import { GlobeIcon, SearchIcon }from '../svg/svg'


class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = { show: true }
    this.handleClick = this.handleClick.bind(this)
    console.log(this.state)
  }

  componentDidMount(){
    this.documentListener = (e) => {
      this.setState({show: false})
    }
    
    document.addEventListener('click', this.documentListener, true)
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.documentListener, true)
  }

  handleClick(){
    this.setState({ show: !this.state.show })
  }

  render(){
    
    if (!this.props.currentUser) {
      return (
        <div>

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
        
            <div className="header-right" >
              Become a host
            <div className="dropdown">
                <div className="far fa-user-circle" onClick={this.handleClick} ></div>
              
            {/* {this.state.show ? ( */}

              <div className="dropdown-menu">
              <ul className="dropdown-content" onClick={() => this.props.openModal('login')}>Log In</ul>
              <ul className="dropdown-content" onClick={() => this.props.openModal('signup')}>Sign Up</ul>
              </div>
             {/* ) : null}  */}
            

            </div>
            </div>     
        </div>
        </div>
      )
    } else {
      return (
        <div>
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
                <ul className="dropdown-content">Welcome {this.props.currentUser.firstName}</ul>
                <ul className="dropdown-content" onClick={() => this.props.logout()}>Logout</ul>
              </div>

            </div>
            </div>
          


            
          
        </div>
         

        </div>
      )
    }
  }
}

export default Navbar