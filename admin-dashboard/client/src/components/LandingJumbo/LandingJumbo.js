import React, { Component } from "react";


class LandingJumbo extends Component {
    render() {
        return (
            <div className="jumbotron mt-5 landingJumbo">
                <div className='col-sm-8 mx-auto jumboText'>
                    <h1 className='d-flex justify-content-center companyName'>
                        <div className="sidebar-brand-icon rotate-n-15 mr-2">
                            <i className="far fa-building" />
                        </div> 
                        <div>Rectangle Store</div>
                    </h1>
                    <h3 className='text-center companySlogan'>Two Times Bigger and Better Than a Square</h3>
                </div>
            </div>
        );
    } 
}

export default LandingJumbo;