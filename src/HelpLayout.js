import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return ( <div className="help-layout">
       <h2>Application Help</h2> 
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quos, ipsum libero unde, soluta itaque eaque aperiam veritatis eum, nobis voluptatibus nesciunt quas ab vel eius hic sunt dignissimos facere.</p>
        <nav className="navbar">
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
            
        </nav>
        <Outlet/>
    </div> );
}
 
export default HelpLayout;