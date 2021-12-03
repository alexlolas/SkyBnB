import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

class Splash extends React.Component{
  render(){
    return (
      <div>

        <div className="true-background">
  
        <div className="background-home">
          <div className="splash-box">
            <div className="text-box">

          <h1 className="splash-text">Not sure where to go? Pefect.</h1>
            </div>
          <Link to="/listings">
          <button className="splash-button">Im Flexible</button>
          </Link>

          </div>
  
        </div>
        </div>
         <Footer />
      </div>
    )
  }
}

export default Splash