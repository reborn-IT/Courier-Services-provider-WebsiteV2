import '../Book a Delivery/Book.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import StandartButton from "../../BaseComponents/StandartButton/index";


export const Delivery_Details = ()=>{

   

    const [show,setShow]=useState(false)
    const [open,setOpen]=useState(false)


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
                        <label for="" class="topic">Pickup Details:</label>
                    </div>


                    <div class="mb-3 input-field">
                        <i class="fa fa-commenting" aria-hidden="true"></i>
                        <label for="item" class="form-label">Description of the Item:</label>
                        <input type="text" class="" id="item"/>
                    </div>

                    {/* switch for pickup time schedule */}

                    <div class="mb-3">
                        <label for="" class="form-label pickup check"><span>Pickup Time Schedule</span> 
                        <span class="">
                        {/* onChange={myScheduleFunction} */}
                        <input type="checkbox" id="scheduleCheck"  onClick={()=>setShow(!show)}/>
                        </span></label>
                        {

                        show?<div id='calandar' >
                            <input type="date" name='date' />
                        </div>:null
                        }
                    </div>


                    {/* Pyment type */}
                    <div class="mb-3 input-field">
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                        <label for="payment" class="form-label">Payment Type:</label>
                        <select name="payment" id="payment">
                            <option value="visa">Visa</option>
                            <option value="axp">American Express</option>
                            <option value="paypal">Paypal</option>
                            <option value="cod">Cash on Delivery</option>
                         </select>
                    </div>

                    {/* Vehicle type */}
                    <div class="mb-3 input-field">
                         <i class="fa fa-car" aria-hidden="true"></i>
                        <label for="vehicle" class="form-label">Vehicle Type:</label>
                        <select name="vehicle" id="vehicle">
                            <option value="bike">Bike</option>
                            <option value="car">Car</option>
                            <option value="van">Van</option>
                            <option value="truck">Truck</option>
                         </select>
                    </div>

                    {/* weight select */}
                    <div class="mb-3 input-field">
                        <i class="fa fa-archive" aria-hidden="true"></i>
                        <label for="weight" class="form-label">Package Weight (Kgs):</label>
                        <input type="number" class="" id="weight" min={0.5} max={10} step={0.25}/>
                    </div>

                    <div class="mb-3 input-field">
                        <div className='deliveryFee'>
                        <label for="fee" class="form-label">Delivery Fee (LKR):</label>
                        <span className='fee'>700</span>
                        </div>
                    </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-flag" aria-hidden="true"></i>
                        <label for="note" class="form-label">Special Notes:</label>
                        <textarea class="" id="note"/>
                    </div>


                    {/* switch for immediate courioor */}
                    <div class="mb-3">
                        <label for="" class="form-label pickup check"><span>Immideate Courier</span> 
                        <span class="">
                        <input type="checkbox" id="scheduleCheck" value="immediate" onClick={()=>setOpen(!open)}/>
                        </span></label>
                            {
                              open?<div className='immediateCourier'>
                                 <p>Extra charge may apply*</p>
                             </div>:null
                            }
                    </div>

                    <div className='nextBtn row flex justify-center mt-9'>
                            <div className='col-sm-4'>
                                 <Link to="/receiver_details"><StandartButton children={"Previous"} extraTailwindClasses={"px-5 py-2 mt-3 font-bold bg-gray-400 "} /></Link>
                            </div>

                            <div className='col-sm-4 '>
                            <Link to="#"><StandartButton children={"Submit"} extraTailwindClasses={"px-12 py-2 mt-3 font-bold bg-rebornit-primary"} /></Link>
                            </div>                           
                           
                        </div>
                    </form>
                   </div>
            </div>
        </div>
    )
}

