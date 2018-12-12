import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="width">
		<Link to="/" className="nav-link-left">Robert Paul</Link>
		<Link to="/about" className="nav-link-right">About</Link>
	</nav>

);

export default Navbar;