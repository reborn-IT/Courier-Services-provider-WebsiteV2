import React from 'react';
import { Link } from 'react-router-dom';
// import '../Footer/Footer.css'


export const Footer=()=>{

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return(
        <div>
            <footer  id="footer" className='container w-full h-1/3 bg-footer-color text-white' >
            <div className='row'>
 
                <div className='col-sm-5 flex'>
                    <div className=''>
                        <img src='img/Logo2.png' alt='Logo' className='logo'/>   
                    </div>

                    {/* Navigation in Footer */}
                    <div className=' '> 
                            <ul class="footer-link">
                                <Link to="/terms"><li className="footer-list">Terms</li></Link>
                                <Link to="/about"><li className="footer-list">About us</li></Link>
                                <Link to="/contact"><li className="footer-list">Contact</li></Link>
                                <Link to="/contactnew"><li className="footer-list">Privacy Policy</li></Link>
                            </ul>
                    </div>
                </div>
                
                <div className='col-sm-3'><span><i class="fa fa-copyright"></i></span> 2022 | Copyrights Recerved for rebornIT</div>
                <div className='col-sm-4'>
                    <div className=''>
                        Follow us on
                    </div>

                    <div className=''>
                            <ul class="flex text-2xl ">
                                <li className=' mr-3'><a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                <li className=' mr-3'><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
                                <li className=' mr-3'><a class="youtube" href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </footer>    
    </div>
    )
}