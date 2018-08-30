import React from 'react';

const Cover = () => (
	<div className="viewport-wrap" >
		<div className="flex-item">
			<img className="cover-image bg-screen" src={require('../images/rob-paul-2.jpg') } alt="Portrait of Robert Paul" />
			<img className="cover-image sm-screen" src={require('../images/rob-paul.jpg') } alt="Robert Paul running a sprint"/>
		</div>
		<div className="flex-item flex-center">
			<div className="cover-info">
				<section>
					<h1 className="cover-rhythm-1">
						Robert Paul
					</h1>
					<h3 className="cover-label cover-rhythm-2" >
						Product Manager & Engineer / Design Geek
					</h3>
					<label>About me</label>
					<p>
						<strong className="yellow">I've always had a love for products.</strong> After working as an engineer, building multiple products for a variety of bay area startups, I sought to understand new ways of creating products using quick iterative methodologies and measuring its success. This led me to earning my master's degree in Human-Computer Interaction at Carnegie Mellon University.
					</p>
					<br />
					<br />
					<label>Today</label>
					<p>
						I am now a product manager that uses 8 years of cross-functional expertise to ship first-class products that people want and love. Find me at <u>hellothisisrob@gmail.com</u>.
					</p>
					
				</section>
			</div>
			
		</div>
	</div>
)

export default Cover;