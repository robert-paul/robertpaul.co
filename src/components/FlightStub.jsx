import React from "react";
import { Link } from 'react-router-dom';

const FlightStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">Flight Discovery for Long Distance Couples</div>
		<div className="stub-desc">A better flight discovery tool for the specific needs of couples in long distance relationships.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default FlightStub;
