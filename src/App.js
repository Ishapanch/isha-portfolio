
import { BrowserRouter , Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './Components/Header';
import AboutPage from './Components/AboutPage';
import Homepage from './Homepage';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Pdf from './Components/Pdf';
import Inquiry from './Components/Inquiry';

function App() {
  return (
    <BrowserRouter> 
    
        <Header/>
        <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={Pdf}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;