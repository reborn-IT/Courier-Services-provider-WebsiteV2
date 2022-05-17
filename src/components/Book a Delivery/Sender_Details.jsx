import '../Book a Delivery/Book.css';
import { Link } from 'react-router-dom';
import StandartButton from '../../BaseComponents/StandartButton/index';
import { BorderlessInput } from '../../BaseComponents/BorderlessInput/index';


export const Sender_Details = ()=>{

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
                            <label for="" class="topic">Sender's Info:</label>
                        {/* <BorderlessInput icon="fas fa-envelope"/> */}
                        </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <label for="name" class="form-label">Sender's Name:</label>
                        <input type="text" class="" id="name" aria-describedby="emailHelp" autoFocus/>
                    </div>
  
                    <div class="mb-3 input-field">
                        <i class="fa fa-address-card" aria-hidden="true"></i>
                        <label for="address" class="form-label">Sender's Address:</label>
                        <input type="text" class="" id="address"/>
                    </div>
  
                    <div class="mb-3 input-field">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <label for="contact" class="form-label">Sender's Contact:</label>
                        <input type="tel" class="" id="contact"/>
                    </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-mobile" aria-hidden="true"></i>
                        <label for="altcontact" class="form-label">Sender's Contact incase:</label>
                        <input type="password" class="" id="altcontact"/>
                    </div>

                    <div class="mb-3 input-field">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <label for="email" class="form-label">Sender's Email:</label>
                        <input type="email" class="" id="email"/>
                    </div>
                        <div className='nextBtn'>
                        <Link to="/receiver_details"><button type="submit" class="btn btn-primary">Next</button></Link>
                        
                    </div>
                    </form>
                   </div>
            </div>
        </div>
    )
}

