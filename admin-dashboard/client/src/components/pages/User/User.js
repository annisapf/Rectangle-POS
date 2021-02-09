import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"

import "./style.css"

class Roster extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
            </div>
        );
    } 
}

export default Roster;