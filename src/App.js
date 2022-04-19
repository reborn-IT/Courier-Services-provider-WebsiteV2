import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import { Home } from './components/Homepage/Home';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Fixedbtn } from './components/Fixedbtn/Fixedbtn';
import Calculator from './components/Calculator/Calculator';
import Contact from './components/Contact/Contact';
import { Services } from './components/Services/Services';

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
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
