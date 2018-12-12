import React from "react";
import { Link } from 'react-router-dom';

const CraftStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">DIY Craft Making App | Construction Junction</div>
		<div className="stub-desc">A service that offers DIY project ideas with step-by-step guides using surplus reusable materials.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default CraftStub;
