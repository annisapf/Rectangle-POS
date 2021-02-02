import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import { Input, FormBtn } from "../Form/Form"
import "./style.css"

import api_cashier from "../../utils/cashier_data";
import { object } from "prop-types";

function Addcashier() {

    const [addcashierState, setAddcashierState] = useState({
        username: "annisa",
        email: "a.purbandari@gmail.com",
        password: ""
    });

    useEffect(() => {
        var cashierListPromise = api_cashier.getCashier();
        cashierListPromise
        .then((res) => {
            //setAddcashierState(addcashierState);
            console.log(res);
        });
    }, [setAddcashierState]);

    // var cashierListPromise = api_cashier.getCashier();
    // cashierListPromise
    // .then(
    //     function(response)
    //     {
    //         console.log(response.data);
    //     }
    // )
    // .catch(
    //     function(err)
    //     {
    //         console.log(err)
    //     }
    // )


    // function handleInputChange(event) {
    //     const { value } = event.target;
    //     // console.log(value);
    //     setAddcashier(value)
    //   };
    

    return (
        <div className='container-fluid pl-0 m-0'>
            <Sidebar />
            <h1>Add Cashier</h1>
             <form className="col-md-4 mb-3">
                <label>Username</label>
               
                <Input onChange="" name="cashiername" value="" placeholder="john"/>
                <label>Email</label>
           
                <Input onChange="" name="cashieremail" value="" placeholder="john@email.com"/>
                        
                <label>Password</label> 
                <Input onChange="" name="cashierpassword" value="" placeholder="password"/>
                 
                <FormBtn onClick="">
                Add
                </FormBtn> 
            </form> 
         
        </div>
    )
}

export default Addcashier;