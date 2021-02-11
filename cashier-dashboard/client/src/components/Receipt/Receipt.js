import React, { useEffect, useState } from "react";

import Item from './Item';
import "./style.css"

function Receipt() {


        
    const [shoppingcart, setShoppingcart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    )


        return (
                <aside>
                    <div class="container">
                        <div class="row">
                            <div class="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                                <div class="row">
                                    <div class="col-xl">
                                        <p>
                                            <strong>Sydney Cafe</strong>
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-xl-12">
                                        <p>
                                            <em>15-02-21</em>
                                        </p>
                                    </div>
                                    
                                    <div class="col-xl-6">
                                        <p>
                                            <em>Receipt #: 34522677W</em>
                                        </p>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="text-center">
                                        <h1>Receipt</h1>
                                    </div>
                
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>#</th>
                                                <th class="text-center">Price</th>
                                                <th class="text-center">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                        {shoppingcart.map((cart => {
                                            return(
                                                    <tr>
                                                        <td className="col-md-3 text-center">{cart.name}</td>
                                                        <td className="col-md-3 text-center"> {cart.number} </td>
                                                        <td className="col-md-3 text-center">${cart.price}</td>
                                                        <td className="col-md-3 text-center">${cart.total}</td>
                                                    </tr>
                                            )
                                            }))}

                                    
                                             <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td class="text-right">
                                                <p>
                                                    <strong>Subtotal: </strong>
                                                </p>
                                                <p>
                                                    <strong>Tax: </strong>
                                                 </p></td>
                                                <td class="text-center">
                                                <p>
                                                    <strong>$27</strong>
                                                </p>
                                                <p>
                                                    <strong>$3</strong>
                                                </p></td>
                                            </tr>
                                            <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td class="text-right"><h4><strong>Total: </strong></h4></td>
                                                <td class="text-center text-danger"><h4><strong>$30</strong></h4></td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                <button type="button" class="btn btn-success btn-lg btn-block">
                                Pay Now   <span class="glyphicon glyphicon-chevron-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
}

export default Receipt;