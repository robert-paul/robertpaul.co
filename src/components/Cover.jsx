import React from 'react';

const Cover = () => (
	<div className="viewport-wrap" >
		<div className="flex-item">
			<img className="cover-image bg-screen" src={require('../images/rob-paul-2.jpg') } alt="Portrait of Robert Paul" />
			<img className="cover-image sm-screen" src={require('../images/rob-paul.jpg') } alt="Robert Paul running a sprint"/>
		</div>
		<div className="flex-item">
			<div className="cover-info">
				<section>
					<h1 className="cover-rhythm-1">
						Robert Paul
					</h1>
					<h3 className="cover-label cover-rhythm-2" >
						Product Manager & Engineer / Design Geek
					</h3>
					<label>About m<span className="rm-ls">e</span></label>
					<p>
						<strong className="yellow">I've always had a love for products.</strong> After working as an engineer, building multiple products for a variety of bay area startups, I sought to understand new ways of creating products using iterative methodologies. I went to graduate school at Carnegie Mellon University for Human-Computer Interaction.
					</p>
					<br />
					<br />
					<label>Toda<span className="rm-ls">y</span></label>
					<p>
						I'm now a product manager that uses <strong className="yellow">8 years of cross-functional expertise</strong> to ship first-class products that people want and love. Find me at hellothisisrob@gmail.com.
					</p>
					
				</section>
			</div>
			
		</div>
	</div>
)

export default Cover;