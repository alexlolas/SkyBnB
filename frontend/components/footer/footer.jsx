import React from "react";

const Footer = () => {
  return (
    <div className="footer-box">
      <div className="footer-left-box">
        <a href="https://github.com/alexlolas/SkyBnB"><img className="github-logo" src="https://picturelistings.s3.us-west-1.amazonaws.com/GitHub-Mark-120px-plus.png"  />
        </a>
      </div>
      <div className="footer-middle-box">
        <div className="contact-info-head">Contact Info </div>
        <div className="contact-info-item">alexanderlolas@yahoo.com</div>
       
        <div className="contact-info-item">(650)759-8159</div>
       
        <div className="contact-info-item">San Francisco, CA</div>

      </div>
      <div className="footer-right-box">
        <div className="contact-info-head"> Main Techongolies </div>
        <div className="contact-info-item">Ruby on Rails</div>
        <div className="contact-info-item">Javascript</div>
        <div className="contact-info-item">React</div>
        <div className="contact-info-item">Redux</div>
      </div>
    </div>
  )
}

export default Footer