import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import { Input, FormBtn } from "../Form/Form"
import "./style.css"

import api_cashier from "../../utils/cashier_data";
import { object } from "prop-types";

function Addcashier() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        

    function handleInputChangeUsername(event) {
        const { value } = event.target;
        console.log(value);
        setUsername(value)
    };

    function handleInputChangePassword(event) {
        const { value } = event.target;
        console.log(value);
        setPassword(value)
    };

    function handleInputChangeEmail(event) {
        const { value } = event.target;
        console.log(value);
        setEmail(value)
    };

    function clickSubmitCashier(event)
    {
        var cashier_data = {
            username : username,
            email : email,
            password: password,
            mid : localStorage.mid
        }

        console.log(cashier_data);
        var cashierListPromise = api_cashier.addCashier(cashier_data);

        console.log( cashierListPromise );

        cashierListPromise.then(
            function(response)
            {
                console.log(response.data)
                window.location = "/listcashier"
            }
        ).catch(
            function(err)
            {
                console.log(err);
            }
        )
    }

    return (
        <div className='container-fluid pl-0 m-0'>
            <Sidebar />
            <h1>Add Cashier</h1>
             <div className="cashierform col-md-4 mb-3">
                <label>Username</label>
               
                <Input onChange={handleInputChangeUsername} name="cashiername" value={username} placeholder="john"/>
                <label>Email</label>
           
                <Input onChange={handleInputChangeEmail} name="cashieremail" value={email} placeholder="john@email.com"/>
                        
                <label>Password</label> 
                <Input onChange={handleInputChangePassword} name="cashierpassword" value={password} placeholder="password"/>
                 
                <FormBtn onClick={clickSubmitCashier}>
                Add
                </FormBtn> 
            </div> 
         
        </div>
    )
}

export default Addcashier;