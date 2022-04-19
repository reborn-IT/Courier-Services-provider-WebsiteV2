import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import Calculator from './components/Calculator/Calculator';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Aboutus />
        <Contact />
        <Services />
        <Calculator /> 
      </Router>
    </div>
  );
}

export default App;
