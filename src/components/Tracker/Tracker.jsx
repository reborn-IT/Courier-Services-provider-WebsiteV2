import '../Tracker/Tracker.css';
import { useState } from 'react';
import {BorderlessInput} from "../../BaseComponents/BorderlessInput/index";
import StandartButton from "../../BaseComponents/StandartButton/index";
import DeliveryStatus from '../../BaseComponents/DeliveryStatus';
import TrackerDetail from '../../BaseComponents/TrackerDetail';


export const Tracker=()=>{

    const [open,setOpen]=useState(true)

    return (
        <div id='tracker' style={{backgroundImage: `url("")`}}>
            <div className='title'>Track Your Delivery</div>
            <div className='container'>
            <div className='row'>

            <TrackerDetail name='kumesh' booking_date='2022-6-8' delivery_address='djdbcjckb' delivery_date='2022-6-8' />
                      {/* Tracker */}
                     <DeliveryStatus status='InTransit'/>


                <div className='tracker-card'>
                     <div class="mb-3 flex justify-evenly align-middle">
                        {/* <label for="delivery_code" class="form-label">Enter Your Delivery Cade:</label><br/>
                        <input type="text" class="" id="delivery_code"/> */}
                        <div className=' flex-grow-1'>
                            <BorderlessInput placeholder='Enter your Delivery Code' icon='fa fa-shopping-cart'/>
                        </div>

                        <div className=' w-28 p-3 mt-4'>
                            <span className=' inline-blok w-20 pl-3'><button onClick={()=>setOpen(!open)} data-toggle="modal" data-target="#myModal"  className=' w-20 h-12 shadow-md'><i class="fa fa-search text-lg" aria-hidden="true"></i></button></span>
                        </div>   
                     </div>



{/* 
            
                        <!-- The Modal --> */}
                        <div class="modal" id="myModal">
                            <div class="modal-dialog modal-dialog-centered">
                                 <div class="modal-content">

                         {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h4 class="modal-title">Information Not found</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div class="modal-body">
                             Delivery Information Not Found
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                         </div>
                    </div>
                </div>

                {/* end of tracker card */}
                </div>
                
               
            </div>
            </div>
        </div>
    );
}