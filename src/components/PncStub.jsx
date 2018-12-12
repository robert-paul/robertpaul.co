import React from "react";
import { Link } from 'react-router-dom';

const PncStub = () => (
	<Link to='/pnc' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">Flux | PNC Bank</div>
		<div className="stub-desc">Bringing 3 disparate financial products together into one seamless experience for middle-sized companies.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default PncStub;
