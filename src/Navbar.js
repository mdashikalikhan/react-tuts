import { Link, NavLink } from "react-router-dom";


const Navbar = () => {



    return (
        <nav className="navbar">
            <h1>React Tutorials</h1>
            <div className="links">
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New blog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/help">Help</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                
            </div>
            
        </nav>
        // <nav class="navbar bg-primary" data-bs-theme="dark">
            
        //     <h1>React Tutorial</h1>
        //     <a href="/">Home</a>
        //     <a href="/create">New blog</a>
        // </nav>
    );
}

export default Navbar;