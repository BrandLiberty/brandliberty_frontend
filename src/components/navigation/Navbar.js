import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/navigation/navbar.css';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/brand_logo.png";

// const Navbar1 = () => {
  const Navbar1 = ({ isHomePage }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

   

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <nav className={color || isHomePage ? 'navbar navbar-bg' : 'navbar'}>
            <div className="nav-logo">
                {/* <p className="head-img-1">Logo</p> */}
                <img src={Logo} className="head-img-1" alt={"logo"} />
            </div>
            <div className={`nav-links ${isNavOpen ? 'open' : ''}`} >
                <Link className="link1" to="/" onClick={() => { setIsNavOpen(false); }} >Home</Link>
                <Link className="link1" to="/about" onClick={() => { setIsNavOpen(false); }}>About </Link>
                <Link className="link1" to="/services" onClick={() => { setIsNavOpen(false); }}>services</Link>
                <Link className="link1" to="/blogs" onClick={() => { setIsNavOpen(false); }}>Blogs</Link>
                <Link className="link1" to="/gallery" onClick={() => { setIsNavOpen(false); }}>Gallery</Link>
                <Link className="link1" to="/career" onClick={() => { setIsNavOpen(false); }}>Career</Link>
                <Link className="link1" to="/contact" onClick={() => { setIsNavOpen(false); }}>Contact Us</Link>
            </div>
            <div className="hamburger-icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    )
}



export default Navbar1;