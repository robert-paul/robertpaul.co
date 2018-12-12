import React from "react";
import { Link } from 'react-router-dom';

const PedestrianStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">Pedestrian to Autonomous Vehicle Communication | Persuasive Design</div>
		<div className="stub-desc">A hardware addition for self-driving vehicles to give feedback and guide interaction with pedestrians.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default PedestrianStub;
