import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";


import "./style.css"


import api_shopping from "../../utils/shopping_data"
import api_transaction from "../../utils/transaction_data";



function Finalreceipt() {



    const [shoppingcart, setShoppingcart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    )
    const [result, setResult] = useState([]);
    const [subtotalReceipt, setSubtotalReceipt] = useState([]);
    const [taxReceipt, setTaxReceipt] = useState([])
    const [totalpriceReceipt, setTotalpriceReceipt] = useState([])


    useEffect(() => {
        loadShoppings()
    }, [setResult]);

    useEffect(() => {
        loadPrice()
    }, [setTotalpriceReceipt])

    function loadPrice() {


        var all_cart_product = localStorage.getItem('cart')

        if(all_cart_product == null) {
            setSubtotalReceipt(0)
            setTaxReceipt(0)
            setTotalpriceReceipt(0)
            return;
        }


        var all_cart_product = JSON.parse(all_cart_product)



        //initilaize subtotal receipt, tax and total price to zero
        //loop all product and sum all total price 
        //calculate 10% of total price 
        //add 10% to the sum of the total price


        var subtotal_price_receipt = 0;
        var tax_receipt = 0;
        var total_price_receipt = 0;

        for (var item = 0; item < all_cart_product.length; item++) {
            
            total_price_receipt = total_price_receipt + all_cart_product[item].total

            

        }
        setSubtotalReceipt((total_price_receipt - (total_price_receipt*0.1)).toFixed(2))
        setTaxReceipt((total_price_receipt*0.1).toFixed(2))
        setTotalpriceReceipt(total_price_receipt.toFixed(2))
    }

    function loadShoppings() {
        var shoppingData = {
            mid: localStorage.mid,
        
        }
        var shoppingListPromise = api_shopping.getShopping(shoppingData);
        shoppingListPromise
        .then(
            function(response)
            {
                setResult(response.data)
                localStorage.setItem('cashier_product', JSON.stringify(response.data))
                console.log(response.data);
            }
        )
        .catch(
            function(error)
            {
                console.log(error)
            }
        )
    };


    function clickSubmitTransaction(event)
    {

        var product_list_array_localstorage = localStorage.cart;
        var product_list_items_localstorage = JSON.parse(product_list_array_localstorage)
        var cashier_id_localstorage = localStorage.usertoken;
        var total_item_localstorage = product_list_items_localstorage.length;
        var merchant_id_localstorage = localStorage.mid;
        var cashier_name_localstorage = localStorage.username;

        var transaction_data = {
            product_list : product_list_items_localstorage,
            total_price: totalpriceReceipt,
            subtotal_price: subtotalReceipt,
            tax: taxReceipt,
            total_item: total_item_localstorage,
            cashier_id: cashier_id_localstorage,
            mid: merchant_id_localstorage,
            cashier_name : cashier_name_localstorage
        }
           

        console.log(transaction_data);
        var transactionListPromise = api_transaction.addTransaction(transaction_data);

        console.log( transactionListPromise );

        transactionListPromise.then(
            function(response)
            {
                console.log(response.data)
            }
        ).catch(
            function(err)
            {
                console.log(err);
            }
        )
    }


    
        return (
                <div className="receipt">
                    <div className="container">
                        <div className="row">
                            <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                                <div className="row">
                                    <div className="col-xl">
                                        <p>
                                            <strong>Sydney Cafe</strong>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-xl-12">
                                        <p>
                                            <em>15-02-21</em>
                                        </p>
                                    </div>
                                    
                                    <div className="col-xl-6">
                                        <p>
                                            <em>Receipt #: 34522677W</em>
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="text-center">
                                        <h1>Receipt</h1>
                                    </div>
                
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>#</th>
                                                <th className="text-center">Price</th>
                                                <th className="text-center">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                        {shoppingcart.map((cart, index) => {
                                            return(
                                                    <tr key={index}>
                                                        <td className="col-md-3 text-center">{cart.name}</td>
                                                        <td className="col-md-3 text-center"> {cart.number} </td>
                                                        <td className="col-md-3 text-center">${cart.price}</td>
                                                        <td className="col-md-3 text-center">${cart.total}</td>
                                                    </tr>
                                            )})}

                                    
                                             <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td className="text-right">
                                                <p>
                                                    <strong>Subtotal: </strong>
                                                </p>
                                                <p>
                                                    <strong>Tax: </strong>
                                                 </p></td>
                                                <td className="text-center">
                                                <p>
                                                    <strong>${subtotalReceipt}</strong>
                                                </p>
                                                <p>
                                                    <strong>${taxReceipt}</strong>
                                                </p></td>
                                            </tr>
                                            <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td className="text-right"><h4><strong>Total: </strong></h4></td>
                                                <td className="text-center text-danger"><h4><strong>${totalpriceReceipt}</strong></h4></td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                    <Link className="btn btn-success btn-block" to="/dashboard" onClick={clickSubmitTransaction}>Close Transaction</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Finalreceipt;