import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import { Input, FormBtn } from "../Form/Form"
import "./style.css"

class Profile extends Component {


    render() {
        return (
            <div className='container-fluid pl-0 m-0'>
                <Sidebar />
                <h1>Add Cashier</h1>
                <form className="col-md-4 mb-3">
                    <label>Username</label>
                    <Input onChange="" name="cashiername" value="" placeholder="john"/>
                    <label>Email</label> 
                    <Input onChange="" name="cashieremail" value="" placeholder="john@email.com"/>
                        
                    <FormBtn onClick="">
                    Add
                    </FormBtn>
                </form>
                <p>{}</p>
            </div>
        )
    }
}

export default Profile;