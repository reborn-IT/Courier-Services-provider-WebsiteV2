import React from "react";
import "../Aboutus/aboutus.css";
import image from "../images/imgabout.jpg";

function Aboutus() {
    return(
        <div id="aboutus">
          <div className="container">
            <div className="row">
              <div className="aboutus">
                  <div className="aboutus-des">
                    <h1>About Us</h1>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo in, impedit quod dicta est facilis consectetur 
                      laborum eius vitae voluptate asperiores, vel ipsa laboriosam odit esse beatae nesciunt architecto deserunt.
                  </div>
                  <div className="aboutus-img">
                    <img src={image} width="400" height="300" alt='' />
                  </div>   
              </div>
            </div>

              <div className="row">
              <div class="aboutus-card">
                
                <div class="about-card col-md-6">
                  <div class="about-card-img"></div>
                  <div>
                    <div className="aboutcard-heading">Vision</div>
                    <div className="aboutcard-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? 
                    Autem optio assumenda vero repellendus!</div>
                  </div>
                </div>

                <div class="about-card col-md-6">
                  <div class="about-card-img"></div>
                <div>
                    <div className="aboutcard-heading">Mission</div>
                    <div className="aboutcard-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, consectetur quae? 
                    Autem optio assumenda vero repellendus!</div>

                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
}

export default Aboutus;