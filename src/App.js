import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Aboutus />
        <Contact />
        <Services /> 
      </Router>
    </div>
  );
}

export default App;
