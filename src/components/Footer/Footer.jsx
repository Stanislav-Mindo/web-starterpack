import React from "react";
import "./Footer.css"

const Footer = () => {
  return(
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">

        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="logo" width={120}/>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> 
            Ea voluptate obcaecati odio fugit quisquam 
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">123 Kiev, Ukraine</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Footer