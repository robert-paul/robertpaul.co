import React from 'react';

const Intuit = () => (
    <div>       
        <video muted preloaded="none" playsInline loop className="project-big-img" autoPlay="autoplay" >
            <source src={require("../images/intuit/banner-vid.mp4")} type="video/mp4" />
		</video>
        <div className="project-summary">
            <h1 className="project-summary-h1">Designing a new help experience for QuickBooks</h1>
            <br />
            <p>From product discovery to production code, here's how I reduced subscription churn by 2% and saved Intuit $30,000,000.</p>
            <br />
            <br />
            <label className="project-summary-label">project summary</label>
            <ul className="project-summary-ul">
                <li>🔨 Design Technologist</li>
                <li>🗓 Jan 2019 to Feb 2019 (2 Months)</li>
                <li>🏠 QuickBooks | Intuit</li>
                <li>🖥️ Desktop Web Application</li>
            </ul>
        </div>

        <img src={require("../images/intuit/intuit-team.jpg")} className="project-team-img" />
        <label className="project-glimpse-img-caption">
                    Me and my teammates Kirsten and Alexis
                </label>
        <img src={require("../images/intuit/fortune-cookie.jpg")} className="project-cookie-img" />

        <div className="project-glimpse-layout">
            <div className="narrow-content">
                <h2 className="project-section-title project-glimpse-section-title">A glimpse into the final product</h2>
                <label className="project-glimpse-label">
                {/*<span className="project-glimpse-emoji" role="img" aria-label="Sad emotion">😫</span>*/}Problem</label>
                <p>Users cannot reference help content and complete their tasks at the same time, which causes more problems for users to learn the product and get their job done.
                </p>
                <br />
                <br />
                <label className="project-glimpse-label">
                {/*<span className="project-glimpse-emoji" role="img" aria-label="Happy emotion">😄</span>*/}Solution </label>
                <p>A responsive sidebar experience where users can search and access the help content they need and successfully complete their tasks at the same time. Solving this required augmenting existing design patterns, aligning across distributed engineering teams, and pushing new code for 3 disparate codebases.
                </p>
                <br />
                <p>At scale, this saved Intuit 30 million dollars in support costs and reduced subscription churn by 2%.</p>
            </div>

            <div className="project-glimpse-img-layout">
                <video muted preloaded="none" playsInline loop className="project-glimpse-img" autoPlay="autoplay" >
                    <source src={require("../images/intuit/solution-lg.mp4")} type="video/mp4" />
                </video>
                <label className="project-glimpse-img-caption">
                    New responsive sidebar help experience
                </label>
            </div>
        </div>

        {/* Company info */}
        <div className="lg-width">
            
            <h2 className="project-section-title">About the Company</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/qbo-sm.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">I work on the QuickBooks product</h3>
                            <br />
                            <p className="project-p">Over 4 million small business owners depend on QuickBooks to run their business day-to-day.</p>
                            <br />
                            <p className="project-p">The product helps them invoice their customers, keep track of expenses, and get paid for the services their business provides.</p>
                        </div>
                    </div>
                </div>
              
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="narrow-content" >
                <h3 className="project-h3" style={{textAlign:"center"}}>I am part of 3 teams</h3>
                <br />
                <br />
                <div className="project-slack-layout">
                    <p>The design systems team</p>
                    <img src={require("../images/intuit/slack-1.jpg")} className="project-slack-img" />
                    <br />
                    <br />
                    <p>The design technology team</p>
                    <img src={require("../images/intuit/slack-2.jpg")} className="project-slack-img" />
                    <br />
                    <br />
                    <p>The help feature team</p>
                    <img src={require("../images/intuit/slack-3.jpg")} className="project-slack-img" />
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <h3 className="project-h3" style={{textAlign:"center"}}>Here is some of my recent work on the help feature</h3>
                <br />
                <p className="project-p"><strong>30% of users use the help feature on weekly basis.</strong> The help feature plays a big role in helping users learn the product and reducing subscription churn.</p>
                <br />
                <p className="project-p">After running moderated user tests and observing users use the product, I discovered <strong>a big problem</strong> with the current help experience.</p>
            </div>

            {/* PROBLEM */}
            <h2 className="project-section-title">Problem</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/problem-sm.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">Users can't follow along with help content and do tasks at the same time</h3>
                            <br />
                            <p className="project-p">When the help feature is opened, it obscures the exact parts of the interface they need to click to complete their tasks. </p>
                            <br />
                            <p className="project-p">These high recovery costs are particularly frustrating when the user is interacting with their customers, or needs to quickly solve the problem under deadline.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* EARLY SOLUTIONS & SOlUTION 1 */}
            <h2 className="project-section-title">Early Solutions</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/minimize-sm.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">Minimizing the help feature</h3>
                            <br />
                            <p className="project-p">This solution turned out to cause a host of other usability problems. A large portion of users didn't know what would happen when clicking the minimize button. </p>
                            <br />
                            <p className="project-p">Those that did minimize the help panel often struggled navigating their task with switching between minimizing and re-opening the help feature.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* SOLUTION 2 */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/popout-md.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">Popping out help into a new window</h3>
                            <br />
                            <p className="project-p">While this solution allowed users to bring the help feature side by side with the QuickBooks product, popping out a feature into a new window is not a common design pattern and often was a frustrating surprise during user testing.</p>
                            <br />
                            <p className="project-p">Additionally, there was some technical risk as the feature would need to be completely re-architected and <strong>could not work with existing code</strong>. As well, adblockers could potentially disable the <code><strong>window.open</strong></code> functionality all together, making the help feature completely broken for users.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WINNING SOLUTION */}
            <h2 className="project-section-title">Winning solution</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/solution-lg.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">A responsive sidebar help experience</h3>
                            <br />
                            <p className="project-p">Users can read help content and complete their tasks at the same time. This allowed users to know which actions they could take on the interface, and allowed easier understanding of how to use QuickBooks features. </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


            <div className="narrow-content" >
                <h3 className="project-h3" style={{textAlign:"center"}}>Easy, right?</h3>
                <br />
                <p className="project-p">No, the reality of implementation was a difficult feat.</p>
                <br />
                <p className="project-p">The QuickBooks product has hundreds of moving pieces and interface permutations. All of this I had to methodically QA and account for.</p>
            </div>

            {/* Challenge */}
            <h2 className="project-section-title">Trickiest challenge</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/trowser.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">Existing full page takeover design pattern</h3>
                            <br />
                            <p className="project-p">This recurring 'Trowser' full bleed design pattern is a required step for users to complete certain tasks.</p>
                            <br />
                            <p className="project-p">The trowser completely breaks the help feature being persistent throughout the entire experience.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="narrow-content">
                <p className="project-p">Solving this required aligning across <strong>3 different distributed engineering teams</strong> in Edmonton Canada, San Diego, and Bangalore India.</p>
                <br />
                <p className="project-p">After weeks of solving the technical risk, a solution was found that involved coordinating simultaneous merges in 3 separate codebases.</p>
            </div>

            {/* RESULT */}
            <h2 className="project-section-title">Result</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <video muted preloaded="none" playsInline loop className="project-company-img" autoPlay="autoplay" >
                            <source src={require("../images/intuit/solution-lg.mp4")} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">The impact was huge</h3>
                            <br />
                            <p className="project-p">✅ 57% decrease in customer care calls.</p>
                            <br />
                            <p className="project-p">✅ Subscription churn decreased by 2%.</p>
                            <br />
                            <p className="project-p">✅ Intuit saves $30,000,000 this year.</p>
                            <img src={require("../images/intuit/kirsten.jpg")} className="project-slack-result" />
                        </div>
                    </div>
                </div>
            </div>



        </div>

        <br />
       
    </div>
)

export default Intuit;