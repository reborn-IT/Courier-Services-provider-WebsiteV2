import { useEffect, useState } from "react";
// import '../DeliveryStatus/deliveryStatus.css';

function DeliveryStatus ({status="confirmed"}) {

    
    const [confirmed, setConfirmed]=useState("");
    const [inTransit, setInTransit]=useState("");
    const [pickedUp, setPickedUp]=useState("");
    const [delivered, setDelivered]=useState("");

    useEffect(() => {
        if(status==='confirmed'){
            setConfirmed("completed");

        }
        
        if(status==='InTransit'){
            setConfirmed("completed");
            setInTransit("completed");

        }
        
        if(status==='pickedUp'){
            setConfirmed("completed");
            setInTransit("completed");
            setPickedUp("completed");

        }
        if(status==='delivered'){
            setConfirmed("completed");
            setInTransit("completed");
            setPickedUp("completed");
            setDelivered("completed");
        }
    },[status]);
  

    return ( 
         <div class="card-body">
            <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                <div class={`step ${confirmed}`}>
                    <div class="step-icon-wrap">
                        <div class="step-icon"><i class="pe-7s-cart"></i></div>
                    </div>
                        <h4 class="step-title">Confirmed Order</h4>
                </div>

                <div class={`step ${inTransit}`}>
                    <div class="step-icon-wrap">
                        <div class="step-icon"><i class="pe-7s-config"></i></div>
                    </div>
                        <h4 class="step-title">In Transit</h4>
                </div>

                     
                <div class={`step ${pickedUp}`}>
                    <div class="step-icon-wrap">
                        <div class="step-icon"><i class="pe-7s-car"></i></div>
                    </div>
                        <h4 class="step-title">Pickup</h4>
                </div>


                <div class={`step ${delivered}`}>
                    <div class="step-icon-wrap">
                        <div class="step-icon"><i class="pe-7s-home"></i></div>
                    </div>
                        <h4 class="step-title">Product Delivered</h4>
                </div>
            
            </div>
        </div>
     );
}

export default DeliveryStatus;