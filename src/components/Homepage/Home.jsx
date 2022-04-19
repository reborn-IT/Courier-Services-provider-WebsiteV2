import "../Homepage/Home.css";


export const Home=()=>{
    return(
        <div id="home" className="">
            {/* Image */}
            <div className="ImageDiv">
                <img src="img/HomeMain.png" alt="Main Image" className="MainImage" />
            </div>


            {/* Main Description */}
            <div className="container">
            <div className="row marginClass">
                <div className="col-sm-4 ">
                    <div className="purpleTxt">
                    Safe, Reliable and Express 
                    Courier & Transport Solutions 
                    that Saves Your Time!
                    </div>
                    <div className="subTxt">As the largest and leading courier service provider in the island, we 
                         handle your delivery requirements with utmost responsibility and 
                         professionalism.
                    </div>
                    <div className="seeMoreBtn">
                    <button type="button" class="btn btn-success">See more</button>
                    </div>
                </div>
                <div className="col-sm-8 TxtRightAlign">
                    <img src="img/Description.png" alt="Image" className="descriptionImg" />
                </div>
               
            </div>
            </div>

            {/* Your Delicery Solutions */}
            <div className=" ">
                <div className="">
                <div className="TitleTwo">Your Delivery Solutions</div>
                <div className="Option">
                {/* <div class="slide_wrap">
                     <div class="slide_show">
                        <div class="slide_img">
                            <div class="slide"><img src="img/img1.png" alt="Image01"/>COD</div>
                            <div class="slide"><img src="img/img6.jpg" alt="Image02"/>Secure Mail Delivery</div>
                            <div class="slide"><img src="img/img3.png" alt="Image03"/>Document Delivery</div>
                            <div class="slide"><img src="img/img4.png" alt="Image04"/>Courier on Call</div>
                            <div class="slide"><img src="img/img5.jpg" alt="Image05"/>Express Delivery</div>
                            <div class="slide"><img src="img/img2.png" alt="Image06"/>TOD</div>
                        </div> 
                    </div>
  
            <div class="slide_btn">
                <a href="#" class="prev"><i class="fas fa-angle-left"></i></a>
                <a href="#" class="next"><i class="fas fa-angle-right"></i></a>
             </div>
                </div> */}
{/* 
                <div className="slider-container">
                    <span className="slider-span" id="slider-span1"></span>
                    <span className="slider-span" id="slider-span2"></span>
                    <span className="slider-span" id="slider-span3"></span>
                    <span className="slider-span" id="slider-span4"></span>
                    <span className="slider-span" id="slider-span5"></span>
                    <span className="slider-span" id="slider-span6"></span>

                    <div className="image-slider">

                        <div className="slide-div" id="slide-1">
                            <img src="img/img1.png" alt="" className="img" id="img1" />
                            <a href="#slider-span1" className="button" id="button1"></a>
                        </div>
                       
                        <div className="slide-div" id="slide-2">
                            <img src="img/img2.png" alt="" className="img" id="img2" />
                            <a href="#slider-span2" className="button" id="button1"></a>
                        </div>

                        <div className="slide-div" id="slide-3">
                            <img src="img/img3.png" alt="" className="img" id="img2" />
                            <a href="#slider-span3" className="button" id="button1"></a>
                        </div>


                        <div className="slide-div" id="slide-4">
                            <img src="img/img4.png" alt="" className="img" id="img3" />
                            <a href="#slider-span4" className="button" id="button1"></a>
                        </div>


                        <div className="slide-div" id="slide-5">
                            <img src="img/img5.jpg" alt="" className="img" id="img5" />
                            <a href="#slider-span5" className="button" id="button1"></a>
                        </div>


                        <div className="slide-div" id="slide-6">
                            <img src="img/img6.jpg" alt="" className="img" id="img6" />
                            <a href="#slider-span6" className="button" id="button1"></a>
                        </div>

                    </div>
                </div> */}




                    <div className="slider">
                        <div className="slide-track">
                                <div className="slide">
                                    <img src="img/img1.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img2.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img3.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img4.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img5.jpg" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img6.jpg" alt="Image" />
                                </div>


                                {/* Dublicate */}

                                <div className="slide">
                                    <img src="img/img1.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img2.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img3.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img4.png" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img5.jpg" alt="Image" />
                                </div>

                                <div className="slide">
                                    <img src="img/img6.jpg" alt="Image" />
                                </div>
                        </div>
                    </div>

            </div>
        </div>
     </div>


            {/* Service Slider */}
            <div className="services">
                <div className="row">
                <div className="col-sm-3">
                    <aside className="aside"><i class="fa-solid fa-location-dot"></i></aside>
                    <section className="section">
                        <div>25</div>
                        <div>Branches</div>
                    </section>
                </div>
                <div className="col-sm-3">
                    <aside className="aside"><i class="fa-solid fa-truck"></i></aside>
                    <section className="section">
                        <div>300+</div>
                        <div>Deliveries Per Day</div>
                    </section>
                </div>
                <div className="col-sm-3">
                     <aside className="aside"><i class="fa-solid fa-people-group"></i></aside>
                    <section className="section">
                        <div>100+</div>
                        <div>Dealers</div>
                    </section>
                </div>
                <div className="col-sm-3">
                    <aside className="aside"><i class="fa-solid fa-chart-line"></i></aside>
                    <section className="section">
                        <div>5</div>
                        <div>Years Experince</div>
                    </section>
                </div>
            </div>
            </div>
        </div>
    )
}