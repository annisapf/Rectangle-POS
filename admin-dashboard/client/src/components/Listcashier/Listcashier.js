import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import Cardcashier from "../Cardcashier/Cardcashier"

import api_cashier from "../../utils/cashier_data"

function Listcashier() {

    const [result, setResult] = useState([]);

    useEffect(() => {
        loadCashiers()
    }, [setResult]);

    function loadCashiers(){
        var merchantData = {
            mid : localStorage.mid
        }
        var cashierListPromise = api_cashier.getCashier(merchantData);
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
                    <Cardcashier
                    username={cashier.username}
                    email={cashier.email}
                    />
                ))}
            </div>
    )
    
}

export default Listcashier;