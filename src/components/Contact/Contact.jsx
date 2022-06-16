import React from "react";
import "../Contact/contact.css";
import {BorderlessInput} from "../../BaseComponents/BorderlessInput/index";
import StandartButton from "../../BaseComponents/StandartButton/index";

function Contact() {
    return(


	<div id="contact">
	
	<div class="container">
		<div class="section-contact">
			<div class="row justify-content-center">
				<div class="col-12 col-lg-10 col-xl-8">
					<div class="header-section text-center">
						<h2 class="title">Get In Touch
							<span class="dot"></span>
							<span class="big-title">CONTACT</span>
						</h2>
						<p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Aenean consectetur commodo risus, nec pellentesque turpis efficitur non.</p>
						
					</div>
				</div>
			</div>

		

			<div class="form-contact">

			
				<form>
					
					<div class="row">
					
						<div class="col-md-6">
							<div class="single-input">
								<i class="fas fa-user"></i>
								<input type="text" name="name" placeholder="ENTER YOUR NAME" autoFocus/>
							</div>

							
						</div>
						<div class="col-md-6">
							<div class="single-input">
								<i class="fas fa-envelope"></i>
								<input type="text" name="email" placeholder="ENTER YOUR EMAIL" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="single-input">
								<i class="fas fa-phone"></i>
								<input type="text" name="phoneNumber" placeholder="ENTER YOUR PHONE NUMBER" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="single-input">
								<i class="fas fa-check"></i>
								<input type="text" name="subject" placeholder="ENTER YOUR SUBJECT" />
							</div>
						</div>
						<div class="col-12">
							<div class="single-input">
								<i class="fas fa-comment-dots"></i>
								<textarea placeholder="ENTER YOUR MESSAGE"></textarea>
							</div>
						</div>
						<div class="col-12">
							<div class=" text-center">
								{/* <input type="submit" name="submit" value="SUBMIT NOW"  className=""/> */}
								<StandartButton children={"Submit"} extraTailwindClasses={"px-5 py-2 mt-3 font-bold bg-rebornit-primary"} />
								
							</div>
						</div>
						
					</div>
				</form>

			</div>
		</div>
	</div>
	</div>

    )
}

export default Contact;