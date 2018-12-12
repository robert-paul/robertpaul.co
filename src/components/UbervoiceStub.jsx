import React from "react";
import { Link } from 'react-router-dom';

const UbervoiceStub = () => (
	<Link to='/uber-voice' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">Uber Voice | IxDS</div>
		<div className="stub-desc">A voice assistant for autonomous vehicle ride sharing.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default UbervoiceStub;
