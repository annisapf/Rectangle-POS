import React, { useEffect, useState } from "react";

import Item from './Item';
import "./style.css"

function Receipt(props) {


        
    const [shoppingcart, setShoppingcart] = useState(
        JSON.parse(localStorage.getItem('cart'))
    )


        return (
                <aside>
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
                                                    <strong>${props.subtotal}</strong>
                                                </p>
                                                <p>
                                                    <strong>${props.tax}</strong>
                                                </p></td>
                                            </tr>
                                            <tr>
                                                <td>   </td>
                                                <td>   </td>
                                                <td className="text-right"><h4><strong>Total: </strong></h4></td>
                                                <td className="text-center text-danger"><h4><strong>${props.total_price}</strong></h4></td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                <button type="button" className="btn btn-success btn-lg btn-block">
                                Pay Now   <span className="glyphicon glyphicon-chevron-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        );
}

export default Receipt;