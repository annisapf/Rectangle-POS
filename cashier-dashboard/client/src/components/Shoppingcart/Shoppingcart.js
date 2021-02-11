import React from "react";
import "./style.css"


function Shoppingcart(props) {

  return (

    <div class="cart-container">
        <ul className="cart">
            <li class="product" data-price="3.5" data-quantity="1">
                <div class="product-preview">
                    <div class="thumbnail">
                        <img class="image" src={props.image}/>
                    </div>
                    <div class="product-paper">
                        <div class="product-name">
                            {props.name}
                        </div>
                        <div class="product-price">
                            ${props.sell_price}
                        </div>
                    </div>
                </div>
                
                <div class="product-interactions">
                    <div class="button minus">
                        -
                    </div>
                    <div class="button">
                        1
                    </div>
                    <div class="button plus">
                        +
                    </div>
                </div>
            </li>
        </ul>
    </div>
    );
}

export default Shoppingcart;
