import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

class Splash extends React.Component{
  render(){
    return (
      <div>

        <div className="true-background">
  
        <div className="background-home">
            <div className="text-box">
          <div className="splash-box">

          <h1 className="splash-text">Not sure where to go? Pefect.</h1>
            </div>
          <div className='button-box'>

          <Link to="/listings">
                <button className="splash-button"> <div className="button-text">Im Flexible</div></button>
          </Link>
          </div>
          </div>

  
        </div>
        </div>
         <Footer />
      </div>
    )
  }
}

export default Splash