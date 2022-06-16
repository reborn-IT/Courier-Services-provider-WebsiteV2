import '../Book a Delivery/Book.css';
import { Link } from 'react-router-dom';
import StandartButton from "../../BaseComponents/StandartButton/index";


export const Receiver_Details = ()=>{

    return (
        <div id='Book' style={{backgroundImage: `url("../../../public/img/bookadelivery.jpg")`}}>
           
            <div className='container'>
                     {/* Topic */}
                   <div className='topic row'>
                       <div className='col-sm-12'>Book a Delivery</div>
                    </div>

                   {/* Form */}
                   <div className='row'>
                   <form className='form'>

                   <div class="mb-3">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                        <label for="" class="topic">Receiver's Info:</label>
                    </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <label for="name" class="form-label">Receiver's Name:</label>
                        <input type="text" class="" id="name" aria-describedby="emailHelp" autoFocus/>
                    
                    </div>
  
                    <div class="mb-3 input-field">
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                        <label for="address" class="form-label">Receiver's Address:</label>
                        <input type="text" class="" id="address"/>
                    </div>
  
                    <div class="mb-3 input-field">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <label for="contact" class="form-label">Receiver's Contact:</label>
                        <input type="tel" class="" id="contact"/>
                    </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                        <label for="altcontact" class="form-label">Receiver's Contact incase:</label>
                        <input type="password" class="" id="altcontact"/>
                    </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <label for="email" class="form-label">Receiver's Email:</label>
                        <input type="email" class="" id="email"/>
                    </div>
                        <div className='nextBtn row flex justify-center'>
                            <div className='col-sm-4'>
                                 <Link to="/sender_details"><StandartButton children={"Previous"} extraTailwindClasses={"px-5 py-2 mt-3 font-bold bg-gray-400 "} /></Link>
                            </div>

                            <div className='col-sm-4 '>
                            <Link to="/delivery_details"><StandartButton children={"Next"} extraTailwindClasses={"px-16 py-2 mt-3 font-bold bg-rebornit-primary"} /></Link>
                            </div>                           
                           
                        </div>
                    </form>
                   </div>
            </div>
        </div>
    )
}

