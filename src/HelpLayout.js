import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return ( <div className="help-layout">
       <h2>Application Help</h2> 
       <nav className="navbar">
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
            
        </nav>
       
        <Outlet/>
    </div> );
}
 
export default HelpLayout;