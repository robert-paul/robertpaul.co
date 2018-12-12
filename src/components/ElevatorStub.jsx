import React from "react";
import { Link } from 'react-router-dom';

const ElevatorStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">PUSH FOR HELP Elevator Control | IxDS</div>
		<div className="stub-desc">An accessibility redesign of an elevator panel with improved feedback for vision-impaired and hard-of-hearing populations.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default ElevatorStub;
