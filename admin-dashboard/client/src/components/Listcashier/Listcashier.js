import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import CardCashier from "../CardCashier/Cardcashier"

import api_cashier from "../../utils/cashier_data"

import "./style.css"

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

                    <div className="row outwrap">

                    {result.map((cashier, index) => {
                        return(
                            
                            <div className="col-sm" key={index}>
                            <CardCashier
                            username={cashier.username}
                            email={cashier.email}
                            />
                            </div>

                        )})}
    
                        
                       

                    </div>
            </div>
    )
    
}

export default Listcashier;