import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"


class Profile extends Component {


    render() {
        return (
            <div className='container-fluid pl-0 m-0'>
                <Sidebar />
                <h1>List Product</h1>
               
           
            </div>
        )
    }
}

export default Profile;