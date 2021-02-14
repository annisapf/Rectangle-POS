import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import { Input, FormBtn } from "../Form/Form"
import "./style.css"

import api_cashier from "../../utils/cashier_data";

import PasswordMask from 'react-password-mask'

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
             <div className="cashierform">
        
                <div className="subtitle">Let's add a cashier account</div>
                   
                   <div className=" input-container">
                        <label>Username</label>
                        <Input onChange={handleInputChangeUsername} id="name" className="input" name="cashiername" value={username} placeholder="john"/>
                    </div>        

                    <div className=" input-container">    
                        <label>Email</label>
                        <Input onChange={handleInputChangeEmail} className="input" name="cashieremail" value={email} placeholder="john@email.com"/>
                    </div>

                    <div className="input-container">
                        <label>Password</label> 
                        <PasswordMask onChange={handleInputChangePassword} className="input" name="cashierpassword" value={password} placeholder="password"/>
                    </div>

                    <div className="input-container">
                        <FormBtn onClick={clickSubmitCashier} className="submit">
                        Add
                        </FormBtn> 
                    </div>

            </div> 

         
        </div>
    )
}

export default Addcashier;