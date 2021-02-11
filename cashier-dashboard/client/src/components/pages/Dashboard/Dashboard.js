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


    useEffect(() => {
        loadShoppings()
    }, [setResult]);

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
                    
                    <Receipt/>
                    
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
                                    />
                                </div>
                        
                            )})} 
                        
                        </div>
       
                    </div>
            </div>
        );
    } 


export default DashBoard;