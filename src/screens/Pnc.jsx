import React from 'react';

const Pnc = () => (
    <div>
        <img src={require("../images/dolores1.JPG")} className="project-big-img" />
        <div className="project-summary">
            <h1 className="project-summary-h1">Designing a new financial product for growth-stage companies.</h1>
            <br />
            <p>From product discovery to MVP launch, here's how me and my team created a new payment product line for middle-market businesses.</p>
            <br />
            <br />
            <label className="project-summary-label">project summary</label>
            <ul className="project-summary-ul">
                <li>🔨 Lead Product Designer</li>
                <li>🗓 Jan 2018 to Aug 2018 (8 Months)</li>
                <li>🏠 PNC Bank</li>
                <li>🖥️ Desktop Web Application</li>
            </ul>
        </div>

        <div className="project-glimpse-layout">
            <div className="narrow-content">
                <h2 className="project-section-title project-glimpse-section-title">A glimpse into the final product</h2>
                <label className="project-glimpse-label">
                {/*<span className="project-glimpse-emoji" role="img" aria-label="Sad emotion">😫</span>*/}Problem</label>
                <p>Customers have to navigate across 3 different products to complete a single end-to-end financial task, and each product has its own broken experience.
                </p>
                <br />
                <br />
                <label className="project-glimpse-label">
                {/*<span className="project-glimpse-emoji" role="img" aria-label="Happy emotion">😄</span>*/}Solution </label>
                <p>A new product line that has all that functionality in one place. Companies can perform invoice management, settle payments, and manage their virtual cards.
                </p>
            </div>

            <div className="project-glimpse-img-layout">
                <img className="project-glimpse-img" src={require("../images/pnc/home.png")} />
                <label className="project-glimpse-img-caption">
                    The home page now has an auto-generated "to-do" list with recent relevant activity
                </label>
            </div>

            <div className="project-glimpse-img-layout">
                <img className="project-glimpse-img" src={require("../images/pnc/flow.png")} />
                <label className="project-glimpse-img-caption">
                    Tasks are now chunked into discrete steps
                </label>
            </div>
        </div>

        {/* Company info */}
        <div className="body">
            <h2 className="project-section-title">About the Company</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src={require("../images/pnc-screenshot.png")} className="project-company-img" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="project-content project-company-desc">
                            <h3 className="project-h3">If you've been to the East Coast or Midwest, you probably know PNC Bank.</h3>
                            <br />
                            <p className="project-p">Over 2/3rds of the companies on the Forbes 500 list use PNC Bank's financial products to manage the cash flow of their business.</p>
                            <p className="project-p">As part of their recent initiative, PNC's goal is to 2x their business in five years and this project is a large part of achieving that goal.</p>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>

        

        {/* VALUE RISK */}
        <div className="">

        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

    </div>
)

export default Pnc;