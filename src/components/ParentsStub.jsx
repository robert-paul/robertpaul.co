import React from "react";
import { Link } from 'react-router-dom';

const ParentsStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">KidFinder | IxDS</div>
		<div className="stub-desc">A service that connects parents in the same school district to help each other with kid transporation, babysitting, and parent support.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default ParentsStub;
