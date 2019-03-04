import React from "react";
import { Link } from 'react-router-dom';

const PncStub = () => (
	<div className="lg-width">
		<a href='/pnc' className="container-fluid">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
					<div className="stub-left-layout">
						<div className="stub-label">PNC Bank</div>
						<div className="stub-desc">Designing a new financial product for growth-stage companies</div>
						<br />
						<br />
						<div className="stub-platform">Web application</div>
							{//<div className="stub-button">Read more</div>
							}
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
					<div className="">
						{/*
						<img src={require("../images/new-test-img.png")} className="stub-img" />
						*/}
						<video muted preloaded="none" playsInline loop className="stub-img" autoPlay="autoplay">
							<source src={require("../videos/1.mp4")} type="video/mp4" />
						</video>
					</div>
					
				</div>
			</div>
		</a>
	</div>
);

export default PncStub;
