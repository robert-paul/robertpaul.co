import React from 'react';

const About = () => (
	<div className="about-container">
		
		
		<div className="about-content">
			<div className="about-img-layout">
				<img src={require("../images/rob.jpg")} className="about-img" />
			</div>
			<p>Hi, I'm Rob!</p>
			<br />
			<p>I'm originally from Sacramento, CA, with fond childhood memories of playing basketball every day in summer and nearly getting a heat stroke in the 112° weather, then taking refuge to the air conditioned house to rack up high scores on Tony Hawk's Pro Skater.</p>
			<br />
			<p>I treat my work identity like that of a sports athelete. The team is everything, ego's don't win championships, and every day is an opportunity to improve your craft and support your teammates.</p>
			<br />
			<p>I've had the privilege of having incredible mentors and believe it's my responsibility to be a role model and mentor to the youth in my community. </p>
			<br />
			<p>When I'm not in front of my macbook you can find me training for my first half-marathon, going to a Snail Mail show, keeping my 17 plants alive, and finding a new hot sauce to add to my collection.</p>
			<br />
			<p>Say hi at hellothisisrob@gmail.com and have a wonderful rest of your day :)</p>
		</div>
		
	</div>
);

export default About;
