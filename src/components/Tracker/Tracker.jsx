import '../Tracker/Tracker.css';
import { useState } from 'react';


export const Tracker=()=>{

    const [open,setOpen]=useState(true)

    return (
        <div id='tracker' style={{backgroundImage: `url("")`}}>
            <div className='title'>Track Your Delivery</div>
            <div className='container'>
            <div className='row'>
                <div className='tracker-card'>
                     <div class="mb-3">
                        <label for="delivery_code" class="form-label">Enter Your Delivery Cade:</label><br/>
                        <input type="text" class="" id="delivery_code"/>
                        <span><button onClick={()=>setOpen(!open)} data-toggle="modal" data-target="#myModal"><i class="fa fa-search" aria-hidden="true"></i></button></span>
                    </div>


                 {/* Tracking Details */}
                {
                  open?<div className='track-block'>
                 <div className='track-details'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Name :</label><br/>
                            <label>Sithum Dashantha</label>
                        </div>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Booking Date :</label><br/>
                            <label>Sithum Dashantha</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Delivery Address :</label><br/>
                            <label>Sithum Dashantha</label>
                        </div>
                        <div className='col-sm-6'>
                            <label className='track-details-title'>Delivery Date :</label><br/>
                            <label>Sithum Dashantha</label>
                        </div>
                    </div>
                </div>


                      {/* Tracker */}

                      <div class="card-body">
                         <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">

                            <div class="step completed">
                                <div class="step-icon-wrap">
                                    <div class="step-icon"><i class="pe-7s-cart"></i></div>
                                </div>
                                     <h4 class="step-title">Confirmed Order</h4>
                            </div>


                            <div class="step completed">
                                <div class="step-icon-wrap">
                                    <div class="step-icon"><i class="pe-7s-config"></i></div>
                                </div>
                                    <h4 class="step-title">In Transit</h4>
                            </div>


                            

                        
                            <div class="step">
                                <div class="step-icon-wrap">
                                    <div class="step-icon"><i class="pe-7s-car"></i></div>
                                </div>
                                    <h4 class="step-title">Pickup</h4>
                            </div>


                            <div class="step">
                                <div class="step-icon-wrap">
                                    <div class="step-icon"><i class="pe-7s-home"></i></div>
                                </div>
                                    <h4 class="step-title">Product Delivered</h4>
                            </div>
            
                        </div>
                     </div>
      

                </div>:null
                }

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