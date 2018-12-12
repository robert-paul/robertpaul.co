import React from 'react';

const introCollapse = (event) => {

    let item = event.target.nextElementSibling;

    if (item.getAttribute('data-toggle') === "collapsed") {
        
        item.classList.add("show");
        item.setAttribute('data-toggle', 'shown');
        //item.classList.remove("collapse");
    }
    else if (item.getAttribute('data-toggle') === "shown") {
       
        item.classList.remove("show");
        item.setAttribute('data-toggle', 'collapsed');
    }
   
    /*
    let collapsableItem = event.target.nextSibling;
    if (collapsableItem.style.display === "none") {
        collapsableItem.style.display = "block";
    }
    else if (collapsableItem.style.display === "block") {
        collapsableItem.style.display = "none";
    }
    else if (collapsableItem.style.display === null) {
        collapsableItem.style.display = "none";
    }
    */

}

const Intro = () => (
	<div className="intro-layout">
        <h3 className="intro-h3">How I Work</h3>
        <br />
		<p className="intro-p">
        With a background in engineering, I can prototype product ideas in a variety of fidelities 📓 📝 📱 💻 and test them with users 🗣💬. 
        </p>
        <br />
        <p className="intro-p-bold">Here are some techniques I use to tackle product risks:</p>
        <br />
        <p className="intro-p-click" onClick={introCollapse}><strong>Value Risk</strong> Do people want this product? <span className="intro-chevron">▾</span></p>
        <div className="collapse" data-toggle="collapsed">
            <ul className="intro-ul">
                <li className="intro-li">Need validation by testing storyboard sketches</li>
                <li className="intro-li">Fake door demand test</li>
                <li className="intro-li">Landing page demand test</li>
                <li className="intro-li">Sean Ellis product/market fit test</li>
                <li className="intro-li">Money value test</li>
                <li className="intro-li">Reputation value test</li>
                <li className="intro-li">Time value test</li>
                <li className="intro-li">Access value test</li>
                <li className="intro-li">A/B testing</li>
                <li className="intro-li">Invite-only testing</li>
                <li className="intro-li">Shadowing users do their job</li>
            </ul>
        </div>
        <p className="intro-p-click" onClick={introCollapse}><strong>Usability Risk</strong> Can people use this product? <span className="intro-chevron">&#9656;</span></p>
        <div className="collapse">
            <ul className="intro-ul">
                <li className="intro-li">Task/goal driven usability test</li>
                <li className="intro-li">Think aloud usability test</li>
                <li className="intro-li">Comprehension usability test</li>
                <li className="intro-li">Heuristic usability evaluation</li>
                <li className="intro-li">Card sorting for information architecture</li>
                <li className="intro-li">Cognitive walkthrough</li>
            </ul>
        </div>
        <p className="intro-p-click" onClick={introCollapse}><strong>Business Risk</strong> Can this sustain a viable business? <span className="intro-chevron">&#9656;</span></p>
        <div className="collapse">
            <ul className="intro-ul"> 
                <li className="intro-li">Partner with finance to understand how the business makes money</li>
                <li className="intro-li">Partner with marketing to understand if there is an addressable and sizable market</li>
                <li className="intro-li">Partner with sales to understand constraints on selling product</li>
                <li className="intro-li">Partner with other product teams to identify product cannabalization risks</li>
            </ul>
        </div>
        <p className="intro-p-click" onClick={introCollapse}><strong>Technical Risk</strong> Can we build this product? <span className="intro-chevron">&#9656;</span></p>
        <div className="collapse">
            <ul className="intro-ul">
                <li className="intro-li">Live data prototyping</li>
                <li className="intro-li">Including engineering early on in product development process</li>
                <li className="intro-li">Prototype as spec, for realistic time estimations</li>
                <li className="intro-li">Scoping and addressing tech risk early on</li>
            </ul>
        </div>
	</div>
)

export default Intro;