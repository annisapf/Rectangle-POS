import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"

import api_transaction from "../../utils/transaction_data"

import Table from "../Table/Table"

import "./style.css"

function Transaction() {

    const [cashiertransaction, setCashierTrannsaction] = useState([]);

    useEffect(() => {
        loadTransaction()
    }, [setCashierTrannsaction]);

    function loadTransaction() {
        var transactionData = {
            mid: localStorage.mid
        }
        var transactionListPromise = api_transaction.getTransaction(transactionData);
        transactionListPromise
        .then(
            function(response)
            {
                setCashierTrannsaction(response.data)
            }
        )
        .catch(
            function(error)
            {
                console.log(error)
            }
        )
    };
    
    return (
            <div>
                <Sidebar />
                <h1>Transaction History</h1>

                <div class="table-wrapper table-responsive-sm">

                <table class="table table-hover">
                    <thead>

                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Cashier Name</th>
                        <th>Product Purchased</th>
                        <th>Subtotal Price</th>
                        <th>Tax</th>
                        <th>Total Price</th>
                    </tr>
                    
                    </thead>

                    <tbody>

                    {cashiertransaction.map((transaction, index) => {

                    return(
                        <tr key={index}>
                            <td className="">{index+1}</td>
                            <td className="">{transaction.created}</td>
                            <td className=""> {transaction.cashier_name} </td>
                            <td className="">{transaction.product_list_name}</td>
                            <td className="">${transaction.subtotal_price}</td>
                            <td className="">${transaction.tax}</td>
                            <td className="">${transaction.total_price}</td>
                        </tr>           
                    )})}
  
                    
                    </tbody>
                
                </table>

                </div>

                
            </div>
    )
    
}

export default Transaction;