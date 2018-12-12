import React from "react";
import { Link } from 'react-router-dom';

const TablematStub = () => (
	<Link to='/uber-voice' className="stub-layout">
		<img src={require("../images/dolores1.JPG")} className="stub-img" />
		<div className="stub-label">TableMat | IxDS</div>
		<div className="stub-desc">An IoT dinner table mat that gives instant feedback on the quality and quantity of the food on your plate.</div>
		<div className="stub-button">Read more</div>
	</Link>
);

export default TablematStub;
