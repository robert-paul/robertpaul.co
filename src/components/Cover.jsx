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
					<label>About me</label>
					<p>
						<strong>I've always had a love for products.</strong> When my aunt worked at Hewlett Packard in the early 90's, I would obsessively study the computers she worked on, inundating her team with countless questions, as well as begging to play another round of <a href="https://en.wikipedia.org/wiki/SkiFree" target="_blank" rel="noopener noreferrer">SkiFree</a>. I was fascinated by how such a piece of technology could exist. 
					</p>
					<br />
					<label>Beginnings</label>
					<p>
						<strong>My first job in high school</strong> came when a family friend mentioned she needed a website that could accept payments for her new side business. She looked at me and asked <em>"Could you make it? I'd give you $400"</em>. <strong>Three days later I sent her the link to her new website.</strong> The rest was history.
					</p>
					<br />
					<label>Evolving</label>
					<p>
						<strong>After working as an engineer</strong>, building multiple products for a variety of bay area startups, <strong>I sought to understand new ways of creating products using iterative methodologies</strong>. I went to graduate school at Carnegie Mellon University, the school that invented the discipline of Human-Computer Interaction.
					</p>
					<br />
					<label>Today</label>
					<p>
						I'm now a product manager that uses 8 years of cross-functional expertise to ship first-class products that people want and love. Find me at hellothisisrob@gmail.com.
					</p>
					
				</section>
			</div>
			
		</div>
	</div>
)

export default Cover;