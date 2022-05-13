import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Fixedbtn } from './components/Fixedbtn/Fixedbtn';
import Contact from './components/Contact/Contact';
import { Services } from './components/Services/Services';
import { Book } from './components/Book a Delivery/Book';
import { Book2 } from './components/Book a Delivery/Book2';
import { Book3 } from './components/Book a Delivery/Book3';
import { Branch } from './components/Branch/Branch';
import { Terms } from './components/Terms/Terms';
import { Tracker } from './components/Tracker/Tracker';

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
          <Route path='/book' element={<Book />}/>
          <Route path='/book2' element={<Book2 />}/>
          <Route path='/branch' element={<Branch />}/>
          <Route path='/book3' element={<Book3 />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='/tracker' element={<Tracker />}/>
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
