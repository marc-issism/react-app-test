import { useState } from "react";

// Stateless Functional Component
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;