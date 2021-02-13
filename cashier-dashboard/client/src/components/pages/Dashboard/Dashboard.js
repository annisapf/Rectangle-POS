import React, { useEffect, useState } from "react";
import {
    CardGroup
  } from 'reactstrap';

import Receipt from "../../Receipt/Receipt"
import Shoppingcart from "../../../components/Shoppingcart/Shoppingcart"

import api_shopping from "../../../utils/shopping_data"

import "./style.css"

function DashBoard() {

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



    

        return (
            <div className="container-fluid pl-0">
                    
                    <Receipt
                    subtotal={subtotalReceipt}
                    tax={taxReceipt}
                     total_price={totalpriceReceipt}
                    />
                    
                    <div>
                        <h1>
                             Welcome Cashier
                        </h1>

                        <div className="row wrapper">
                       
                            {result.map((product, index) => {
                            return (
                           
                                <div className="col-md" key={index}>
                                    <Shoppingcart
                                    name={product.name}
                                    sell_price={product.sell_price}
                                    image={product.image}
                                    product_id={product._id}
                                    />
                                </div>
                        
                            )})} 
                        
                        </div>
       
                    </div>
            </div>
        );
    } 


export default DashBoard;