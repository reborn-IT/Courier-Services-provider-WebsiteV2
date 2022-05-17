import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Fixedbtn } from './components/Fixedbtn/Fixedbtn';
import Contact from './components/Contact/Contact';
import { Services } from './components/Services/Services';
import { Sender_Details } from './components/Book a Delivery/Sender_Details';
import { Receiver_Details } from './components/Book a Delivery/Receiver_Details';
import { Delivery_Details } from './components/Book a Delivery/Delivery_Details';
import { Branch } from './components/Branch/Branch';
import { Terms } from './components/Terms/Terms';
import { Tracker } from './components/Tracker/Tracker';
import {contactNew} from './components/ContactNew/contactNew';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      < Fixedbtn />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={< Aboutus />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/services' element={ < Services />}/>
          <Route path='/sender_details' element={<Sender_Details />}/>
          <Route path='/receiver_details' element={<Receiver_Details />}/>
          <Route path='/branch' element={<Branch />}/>
          <Route path='/delivery_details' element={<Delivery_Details />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='/tracker' element={<Tracker />}/>
          <Route path='/contactnew' element={<contactNew />}/>
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
