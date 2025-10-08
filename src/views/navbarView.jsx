import { useState } from "react";
import { IoPeople } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import "/src/style/navbar.css";

export function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false); 

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#" className="logo"> <img src="assets\MoWieIcon.png" width="50"></img> MoWie</a>
            </div>
            <div className="navbar-right">
                {/* Hamburger menu */}
                <div className="hamburger" onClick={handleClick}>
                    <GiHamburgerMenu size={30}/>
                </div>
                {/* Toggle based on website size */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><button className="nav-button" onClick={() => window.location.href = "#watchlist"}><TiHome /> Watchlist</button></li>
                    <li><button className="nav-button" onClick={() => window.location.href = "#friends"}><FaTrophy /> Friends</button></li>
                    <li><button className="nav-button" onClick={() => window.location.href = "#about"}><IoPeople /> About Us</button></li>
                    <li><button className="nav-button" onClick={() => window.location.href = "#auth"}><FaUserCircle /> {props.user ? "My Profile" : "Login"}</button></li> 
                </ul>
            </div>
        </nav>
    );
}   