import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';


export const Footer=()=>{

    return(
        <div id='footer'>
            <footer className=' w-full h-1/3 bg-footer-color text-white bg-slate-500' >
                <div className='container'>
                <div className='row flex justify-around'>
                    {/* Links */}
                    <div className='col-sm-4 flex justify-center'>
                        
                        <img src='img/Logo2.png' alt='Logo' className=' w-1/4'/>   
                        

                        {/* Navigation in Footer */}
                        <div className='mt-3'> 
                            <ul class="border-l-2 border-l-white font-bold pl-2">
                                <Link to="/terms"><li className="footer-list">Terms</li></Link>
                                <Link to="/about"><li className="footer-list">About us</li></Link>
                                <Link to="/contact"><li className="footer-list">Contact</li></Link>
                                <Link to="/admin"><li className="footer-list">Privacy Policy</li></Link>
                            </ul>
                        </div>
                    </div>
                
                    {/* Copyright */}
                    <div className='col-sm-4 copyright-text pl-24 mt-10 text-white font-bold' id='copyright-text'><span><i className="fa fa-copyright"></i></span> 2022 | Copyrights Recerved for rebornIT</div>


                    <div className='col-sm-4 mt-10 social-links' id='social-links'>
                        <div className='font-bold'>
                            Follow us on
                        </div>
                        
                        <div className=' relative' id='social-icons'>
                            <ul class="flex text-2xl ">
                                <li className=' mr-3'><a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                <li className=' mr-3'><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
                                <li className=' mr-3'><a class="youtube" href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </footer>    
        </div>
    )
}