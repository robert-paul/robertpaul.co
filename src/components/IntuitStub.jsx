import React from "react";
import { Link } from 'react-router-dom';

const IntuitStub = () => (
	<div className="lg-width stub-layout">
		<Link to={process.env.PUBLIC_URL + '/intuit'} className="container-fluid">
			<div className="row">
				<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
					<div className="stub-left-layout">
						<div className="stub-label">QuickBooks | Intuit</div>
						<div className="stub-desc">Designing a new help experience for QuickBooks</div>
						<br />
						<br />
						<div className="stub-platform">Web application</div>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
					<div className="stub-right-layout">
						<video muted preloaded="none" playsInline loop className="stub-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/solution-lg.mp4")} type="video/mp4" />
                        </video>
					
						{/*<video muted preloaded="none" playsInline loop className="stub-img" autoPlay="autoplay">
							<source src={require("../videos/1.mp4")} type="video/mp4" />
						</video>
                        */}
					</div>
					
				</div>
			</div>
		</Link>
	</div>
);

export default IntuitStub;
