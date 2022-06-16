import React from "react";
import "../Services/services.css";
import image1 from "../images/dds.png";
import image2 from "../images/ed.jpg";
import image3 from "../images/cod.png";
import image4 from "../images/smd.jpg";
import image5 from "../images/tdd.png";
import image6 from "../images/coc.png";

export const Services= () => {
    return(
        <div id="services">
			
			<div className="services-image">
				Services
			</div>

            <div className="container" >
				<div className="services-description row ">
					<div className="col-sm-12">
					Choose from our wide variety of premium and cost effective services that is
					convenient for you instead that suites best for you.
					</div>
				</div>

			<div id="services" className="service-items row">

				<div class="album">
					<img class="service-desc-image" src={image1} />
					<div class="services-title">
						<h2>Document Delivery Service</h2>
						<div class="services-desc">
							We carries your document and packages to any destination of the country within 
							the shortest possible timeframe Sending staff and vehicles to any destination to complete your delivery 
							requirement.
						</div>
					</div>
				</div>

				<div class="album ">
					<img class="service-desc-image" src={image2} />
					<div class="services-title">
						<h2>Express Delivery</h2>
						<div class="services-desc">
							We pick and deliver your consignments within the same day in Colombo and suburbs and Guarentee to 
							deliver as soon as posible withing delivery hours in same day.
						</div>
					</div>
				</div>

				<div class="album ">
					<img class="service-desc-image" src={image3} />
					<div class="services-title">
						<h2>Cash On Delivery (COD)</h2>
						<div class="services-desc">
							As a trustworthy service provider we collect cash on your behalf for the deliveries to your clients. 
							In the emerging e-Commerce market we become your delivery and cash collection partner whilst supporting 
							your business to reach any part of the island.
						</div>
					</div>
				</div>

				<div class="album ">
					<img class="service-desc-image" src={image4} />
					<div class="services-title">
						<h2>Secure Mail Delivery</h2>
						<div class="services-desc">
							Your mail bags can be delivered between you and the recipient in a safe manner. These security products 
							help our clients meet their major business goals of cost control while simultaneously providing security 
							solutions to reduce fraud-related losses.
						</div>
					</div>
				</div>

				<div class="album ">
					<img class="service-desc-image" src={image5} />
					<div class="services-title">
						<h2>Time Definite Delivery</h2>
						<div class="services-desc">
							Your documents or packages will be delivered within a specific time frame..We are the experts in for this 
							service with active, quick and responsible delivery force.
						</div>
					</div>
				</div>

				<div class="album ">
					<img class="service-desc-image" src={image6} />
					<div class="services-title">
						<h2>Courier On Call</h2>
						<div class="services-desc">
							You can arrange your pick up and delivery through a telephone call. Our courier specialists are on 
							call 24x7 to deliver a hassle-free and a convenient courier services possible.
						</div>
					</div>
				</div>

  			</div>

{/* style="width: 100%; box-shadow: 0 5px 10px rgba(0,0,0,.2); border-radius: 5%;  padding: 1.5em;
        border-radius: 1em; display: flex;" */}
			  {/* <div className="row">

			  	<div className="item flex p-6 col-sm-6" >
					<img src="img/img1.png" alt=""  className=" w-40"/>
            		<div className=" p-5">
                		<h2 className=" text-rebornit-primary font-extrabold text-xl">Document Delivery Service</h2>
                		<div className=" text-base font-semibold text-gray-500">
                    		We carries your document and packages to any destination of the country within 
                    		the shortest possible timeframe Sending staff and vehicles to any destination to complete your delivery 
                    		requirement.
                		</div>
            		</div>
        		</div>


				<div className="item flex p-6 col-sm-6" >
					<img src="img/img1.png" alt=""  className=" w-40"/>
            		<div className=" p-5">
                		<h2 className=" text-rebornit-primary font-extrabold text-xl">Document Delivery Service</h2>
                		<div className=" text-base font-semibold text-gray-500">
                    		We carries your document and packages to any destination of the country within 
                    		the shortest possible timeframe Sending staff and vehicles to any destination to complete your delivery 
                    		requirement.
                		</div>
            		</div>
        		</div>


				<div className="item flex p-6 col-sm-6" >
					<img src="img/img1.png" alt=""  className=" w-40"/>
            		<div className=" p-5">
                		<h2 className=" text-rebornit-primary font-extrabold text-xl">Document Delivery Service</h2>
                		<div className=" text-base font-semibold text-gray-500">
                    		We carries your document and packages to any destination of the country within 
                    		the shortest possible timeframe Sending staff and vehicles to any destination to complete your delivery 
                    		requirement.
                		</div>
            		</div>
        		</div>

			
			  </div> */}
			  
		</div>
    </div>
    )
}
