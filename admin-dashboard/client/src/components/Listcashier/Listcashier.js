import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import Card from "../Card/Card"

import api_cashier from "../../utils/cashier_data"

function Listcashier() {

    const [addcashierState, setAddcashierState] = useState([]);

    useEffect(() => {
        loadCashiers()
    }, [setAddcashierState]);

    function loadCashiers(){
        var merchantData = {
            mid : localStorage.mid
        }
        var cashierListPromise = api_cashier.getCashier(merchantData);
        cashierListPromise
        .then(
            function(response)
            {
                setAddcashierState(response.data)
                //console.log(response.data);
            }
        )
        .catch(
            function(err)
            {
                console.log(err)
            }
        )
    };

    
    return (
            <div>
                <Sidebar />
                <h1>List Cashier</h1>
                {addcashierState.map(cashier => (
                    <Card
                    username={cashier.username}
                    email={cashier.email}
                    />
                ))}
            </div>
    )
    
}

export default Listcashier;