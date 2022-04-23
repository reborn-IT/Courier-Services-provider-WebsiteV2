import '../Book a Delivery/Book.css';
import { Link } from 'react-router-dom';

export const Book2 = ()=>{

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

                    <div class="mb-3">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <label for="name" class="form-label">Receiver's Name:</label>
                        <input type="text" class="" id="name" aria-describedby="emailHelp"/>
                    
                    </div>
  
                    <div class="mb-3">
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                        <label for="address" class="form-label">Receiver's Address:</label>
                        <input type="text" class="" id="address"/>
                    </div>
  
                    <div class="mb-3">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <label for="contact" class="form-label">Receiver's Contact:</label>
                        <input type="tel" class="" id="contact"/>
                    </div>

                    <div class="mb-3">
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                        <label for="altcontact" class="form-label">Receiver's Contact incase:</label>
                        <input type="password" class="" id="altcontact"/>
                    </div>

                    <div class="mb-3">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <label for="email" class="form-label">Receiver's Email:</label>
                        <input type="email" class="" id="email"/>
                    </div>
                        <div className='nextBtn'>
                        <Link to="/book"><button type="submit" class="btn btn-primary previous">Previous</button></Link>
                        <Link to="/book3"><button type="submit" class="btn btn-primary">Next</button></Link>
                  
                    </div>
                    </form>
                   </div>
            </div>
        </div>
    )
}

