import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from 'react-router-dom';
import '../assets/css/navigation/navbar.css';
import logo from "../assets/images/brand_logo.png";
import { scrollToTop } from '../utils/scrollToTop';

const Navbar1 = ({ isHomePage }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <nav className={color || isHomePage ? 'navbar navbar-bg' : 'navbar'}>
            <div className="nav-logo">
                <Link to="/" onClick={() => { scrollToTop() }}><img src={logo} className="head-img-1" alt={"logo"} /></Link>
            </div>
            <div className={`nav-links ${isNavOpen ? 'open' : ''}`} >
                <NavLink exact to="/" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false);scrollToTop() }}>Home</NavLink>
                <NavLink to="/about" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false); scrollToTop()}}>About</NavLink>
                <NavLink to="/services" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false); scrollToTop()}}>Services</NavLink>
                <NavLink to="/blogs" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false);scrollToTop() }}>Blogs</NavLink>
                <NavLink to="/gallery" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false); scrollToTop()}}>Gallery</NavLink>
                <NavLink to="/career" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false); scrollToTop()}}>Career</NavLink>
                <NavLink to="/contact" className="link1" activeClassName="active" onClick={() => { setIsNavOpen(false); scrollToTop()}}>Contact Us</NavLink>
            </div>
            <div className="hamburger-icon" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    )
}

export default Navbar1;
