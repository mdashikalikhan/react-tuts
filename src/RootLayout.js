import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Breadcrumb from "./Breadcrumb";
import './index.css';

export const RootLayout = ()=>{
    return ( 
    <div className="App">
      <Navbar />
      <Breadcrumb/>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;