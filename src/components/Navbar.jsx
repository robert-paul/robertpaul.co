import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="lg-width">
		<a href="/" className="nav-link-left">Robert Paul</a>
		
		<a href="/about" className="nav-link-right">About</a>
		<a href="/" className="nav-link-right" style={{marginRight: "20px"}}>Work</a>
	</nav>

);

export default Navbar;