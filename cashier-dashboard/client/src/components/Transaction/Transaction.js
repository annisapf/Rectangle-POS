import React, { useEffect, useState } from "react";

import Receipt from "../Receipt/Receipt"

import "./style.css"



function Transaction() {

    const [shoppingcart, setShoppingcart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    )

    const [result, setResult] = useState([]);
    const [subtotalReceipt, setSubtotalReceipt] = useState([]);
    const [taxReceipt, setTaxReceipt] = useState([])
    const [totalpriceReceipt, setTotalpriceReceipt] = useState([])


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

    


    

        return (
            <div className="container-fluid pl-0">
                    
                    <Receipt
                    subtotal={subtotalReceipt}
                    tax={taxReceipt}
                     total_price={totalpriceReceipt}
                    />
                    
            </div>
        );
    } 


export default Transaction;