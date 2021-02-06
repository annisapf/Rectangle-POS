import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import { Input, FormBtn } from "../Form/Form"
import "./style.css"

import api_cashier from "../../utils/cashier_data";

function Addcashier() {

    const [add, setAdd] = useState([]);

    useEffect(() => {
        saveCashier()
    }, [setAdd]);

    function saveCashier(){
        var cashierAddPromise = api_cashier.addCashier();
        cashierAddPromise
        .then(
            function(response) 
            {
                console.log(response.data);
                //setAddcashierState(response.data);
            }
        )
        .catch(
            function(error)
            {
                console.log(error)
            }
        )
    };


    function handleInputChange(event) {
        const { value } = event.target;
        // console.log(value);
        setAdd(value)
      };
    

    return (
        <div className='container-fluid pl-0 m-0'>
            <Sidebar />
            <h1>Add Cashier</h1>
             <form className="col-md-4 mb-3">
                <label>Username</label>
               
                <Input onChange={handleInputChange} name="cashiername" value={add} placeholder="john"/>
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