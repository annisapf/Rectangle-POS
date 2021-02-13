import React, { Component } from "react";
import "./style.css";
import homepage_image from "../../assets/images/homepage_services.png"
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        
        return (
           <div>
                <div className="join-btn">
                    <p>Get free access, today.</p>
                        <Link className="btn" to="/register">Join Now</Link>
                </div>
                <img src={homepage_image} className="image"/>
            </div>
        );
    } 
}

export default Landing;