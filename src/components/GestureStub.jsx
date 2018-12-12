import React from "react";
import { Link } from 'react-router-dom';

const GestureStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">Controlling Robots with Hand Gestures | Human-Robot Interaction</div>
		<div className="stub-desc">A natural user interface to control the movement of home robots with nonverbal hand gestures.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default GestureStub;
