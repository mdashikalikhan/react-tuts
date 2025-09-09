
import './App.css';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/'  element={<Home/>}/> 
            <Route path='/create' element={<Create/>} /> 
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}


