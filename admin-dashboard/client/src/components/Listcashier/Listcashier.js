import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"


//import api_add_cashier from "../../utils/api_cashier_data"

class Profile extends Component {


    render() {
        return (
            <div className='container-fluid pl-0 m-0'>
                <Sidebar />
                <h1>List Cashier</h1>
               
           
            </div>
        )
    }
}

export default Profile;