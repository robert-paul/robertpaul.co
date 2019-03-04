import React from 'react';

const introCollapse = (event) => {

    let item = event.currentTarget.nextSibling;
    let chevron = event.currentTarget.querySelector(".intro-dropdown-icon");
    console.log(item);
    console.log(chevron);

    if (item.getAttribute('data-toggle') === "collapsed") {
        
        item.classList.add("show");
        item.setAttribute('data-toggle', 'shown');
        chevron.classList.add("rotate");

        //item.classList.remove("collapse");
    }
    else if (item.getAttribute('data-toggle') === "shown") {
       
        item.classList.remove("show");
        item.setAttribute('data-toggle', 'collapsed');
        chevron.classList.remove("rotate");
    }

    
   
    
}

const Intro = () => (
	<div className="intro-layout">
        <h3 className="intro-h3">How I Work</h3>
        <br />
		<p className="intro-p">
        As a previous software engineer with a Master&#8217;s in Human-Computer Interaction, I prototype product ideas in a variety of fidelities 📝 📱 💻 and test them with users 🗣💬. 
        </p>
        <br />
        <br />
        <p className="intro-p">Here are some techniques I use to tackle big product risks...</p>
        <br />

        
        <div className="row no-gutters intro-item-layout" onClick={introCollapse}>
            <div className="col-10 intro-item-desc-layout">
                <p className="intro-item-desc">
                    <strong>Value Risk</strong> Do people want this product?
                </p>
            </div>
            <div className="col-2 intro-item-desc-layout">
                <div className="intro-dropdown-icon">
                    ▾
                </div>
            </div>
        </div>
        <div className="collapse" data-toggle="collapsed">
            <ul className="intro-ul">
                <li className="intro-li">"Speed dating"</li>
                <li className="intro-li">Fake door demand test</li>
                <li className="intro-li">Landing page demand test</li>
                <li className="intro-li">Sean Ellis product/market fit test</li>
                <li className="intro-li">Money value test</li>
                <li className="intro-li">Reputation value test</li>
                <li className="intro-li">Time value test</li>
                <li className="intro-li">Access value test</li>
                <li className="intro-li">A/B testing</li>
                <li className="intro-li">Invite-only testing</li>
            </ul>
        </div>


        <div className="row no-gutters intro-item-layout" onClick={introCollapse}>
            <div className="col-10 intro-item-desc-layout">
                <p className="intro-item-desc">
                <strong>Usability Risk</strong> Can people use this product?
                </p>
            </div>
            <div className="col-2 intro-item-desc-layout">
                <div className="intro-dropdown-icon">
                    ▾
                </div>
            </div>
        </div>
        <div className="collapse" data-toggle="collapsed">
            <ul className="intro-ul">
                <li className="intro-li">Task driven usability test</li>
                <li className="intro-li">Think aloud usability test</li>
                <li className="intro-li">Heuristic usability evaluation</li>
                <li className="intro-li">Cognitive walkthrough</li>
            </ul>
        </div>


        <div className="row no-gutters intro-item-layout" onClick={introCollapse}>
            <div className="col-10 intro-item-desc-layout">
                <p className="intro-item-desc">
                <strong>Business Risk</strong> Can this sustain a viable business?
                </p>
            </div>
            <div className="col-2 intro-item-desc-layout">
                <div className="intro-dropdown-icon">
                    ▾
                </div>
            </div>
        </div>
        <div className="collapse" data-toggle="collapsed">
            <ul className="intro-ul"> 
                <li className="intro-li">Money value test</li>
                <li className="intro-li">Validate whether there is an addressable and sizable market</li>
                <li className="intro-li">Discover the constraints on marketing the product</li>
                <li className="intro-li">Address potential product cannabilization</li>
            </ul>
        </div>



        <div className="row no-gutters intro-item-layout" onClick={introCollapse}>
            <div className="col-10 intro-item-desc-layout">
                <p className="intro-item-desc">
                <strong>Technical Risk</strong> Can we build this product?
                </p>
            </div>
            <div className="col-2 intro-item-desc-layout">
                <div className="intro-dropdown-icon">
                    ▾
                </div>
            </div>
        </div>
        <div className="collapse" data-toggle="collapsed">
            <ul className="intro-ul">
                <li className="intro-li">"Hello world" prototype to address tech risk</li>
                <li className="intro-li">Live data prototyping</li>
                <li className="intro-li">Including engineering early-on in design process</li>
                <li className="intro-li">Prototype-as-spec, for realistic time estimations</li>
                <li className="intro-li">Scoping and addressing tech risk early on</li>
            </ul>
        </div>
	</div>
)

export default Intro;