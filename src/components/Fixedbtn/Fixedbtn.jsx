import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Fixedbtn/Fixedbtn.css';

export const Fixedbtn=()=>{


    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    const [isMobile,setIsMobile]=useState(false);

    return( 
    <div>
        <div id="track" className='fixPosition'>
                {/* Book a delivery Button */}
                 <div className='btnDiv'>
                        <Link
                            exact
                            to="/sender_details"
                            activeClassName="active"
                            className="nav-links-"
                            onClick={click ? handleClick : null}
                        >
                            <button className='btn btn-primary' id='scroll_btn1' onClick={()=>setIsMobile(false)}>
                                <span><i class="fa-solid fa-van-shuttle"></i></span>
                                <span id='scroll_Txt1'>Book a delivery</span>
                            </button>
                    </Link>
                </div> 

                {/* Track my Item Button */}
                <div className='btnDiv'>
                        <Link
                            exact
                            to="/tracker"
                            activeClassName="active"
                            className="nav-links-"
                            onClick={click ? handleClick : null}
                        >
                            <button className='btn btn-primary' id='scroll_btn2' onClick={()=>setIsMobile(false)}>
                                <span><i class="fa-solid fa-magnifying-glass-location"></i></span>
                                <span id='scroll_Txt2'>Track my Item</span>
                            </button>
                    
                        </Link>                    
                </div>       
        </div>
    </div>
    )
}