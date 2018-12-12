import React from "react";
import { Link } from 'react-router-dom';

const CouplesaddonStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">TV Discussion for Couples | IxDS</div>
		<div className="stub-desc">An add-on feature for Prime Video that shows couples fun discussion questions after watching a movie.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default CouplesaddonStub;
