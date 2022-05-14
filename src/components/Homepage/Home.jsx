import "../Homepage/Home.css";
import StandartButton from "../../BaseComponents/StandartButton/index";


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
                    <div className="seeMoreBtn duration-700 hover:translate-x-5">
                    {/* <button type="button" class="btn btn-success">See more</button> */}
                    <StandartButton children={"See more"} extraTailwindClasses={"px-3 py-2 font-bold"}/>
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