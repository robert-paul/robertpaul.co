import React from "react";
import { Link } from 'react-router-dom';

const LunchmatchStub = () => (
	<Link to='/parents' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">LunchMatch | User-Centered Research</div>
		<div className="stub-desc">A service that helps friend groups discover and decide asynchronously where to have lunch.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default LunchmatchStub;
