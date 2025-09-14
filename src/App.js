
import './App.css';
import BlogDetails from './BlogDetails';
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
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


