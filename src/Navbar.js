const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>React Tutorials</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create"
                style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New blog</a>
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