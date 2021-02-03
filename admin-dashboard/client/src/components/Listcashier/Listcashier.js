import React, { Component, useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import Card from "../Card/Card"

import api_cashier from "../../utils/cashier_data"

function Listcashier() {

    const [result, setResult] = useState([]);

    useEffect(() => {
        loadCashiers()
    }, [setResult]);

    function loadCashiers(){
    
        var cashierListPromise = api_cashier.getCashier();
        cashierListPromise
        .then(
            function(response)
            {
                setResult(response.data)
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
                {result.map(cashier => (
                    <Card
                    username={cashier.username}
                    email={cashier.email}
                    />
                ))}
            </div>
    )
    
}

export default Listcashier;