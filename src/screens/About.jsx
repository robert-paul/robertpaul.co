import React from 'react';

const About = () => (
	<div className="about-container">
		<div className="about-content">
			<div className="about-img-layout">
				<img src={require("../images/rob-1.jpg")} className="about-img" alt="Robert Paul standing in front of a yellow brick wall." />
			</div>
			<br />
			<h3 className="about-h3">A little about me...</h3>
			<br />
			<p>🏡 Originally from Sacramento but used to live in Seattle, LA, and Pittsburgh.</p>
			<br />
			<p>🎸 In high school, I mostly played music. I've been playing piano and guitar for about 17 years now. </p>
			<br />
			<p>✈️ My first job at 18 was working as a machinist, building Boeing airplanes.</p>
			<br />
			<p>When I'm not in front of my macbook you can find me going to music shows, keeping my 17 plants alive, and finding a new hot sauce to add to my collection.</p>
			<br />
			<p>Say hi at <a className="footer-link" href="mailto:hellothisisrob@gmail.com?Subject=Hola!" target="_blank" rel="noopener" data-mce-href="mailto:hellothisisrob@gmail.com?Subject=Hola!" data-mce-selected="1"><u>hellothisisrob@gmail.com</u></a> </p>
			<br />
			<br />
			<br />
		</div>
		
	</div>
);

export default About;
