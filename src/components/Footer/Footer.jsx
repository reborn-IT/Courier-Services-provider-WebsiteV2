import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css'


export const Footer=()=>{

    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return(
        <div>
            <footer  id="footer" className='' >
            <div className='centerTxt row'>
                
                <div className='col-sm-5'>
                    <aside className='logoDiv aside'>
                        <img src='img/Logo2.png' alt='Logo' className='logo'/>   
                    </aside>

                    {/* Navigation in Footer */}
                    <section className='linkdiv section'> 
                            <ul class="footer-link">
                                <Link to="/terms"><li className="footer-list">Terms</li></Link>
                                <Link to="/about"><li className="footer-list">About us</li></Link>
                                <Link to="/contact"><li className="footer-list">Contact</li></Link>
                                <Link to="/contactnew"><li className="footer-list">Privacy Policy</li></Link>
                            </ul>
                    </section>
                </div>
                <div className='col-sm-3 boldText copyright'>rebornIT <span><i class="fa fa-copyright"></i></span> 2022 | Copyrights Recerved</div>
                <div className='col-sm-4'>
                    <div className='boldText followus'>
                        Follow us on
                    </div>

                    <div className='socialLink'>
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-instagram"></i></a></li>
                                <li><a class="youtube" href="#"><i class="fa-brands fa-youtube"></i></a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </footer>    
    </div>
    )
}