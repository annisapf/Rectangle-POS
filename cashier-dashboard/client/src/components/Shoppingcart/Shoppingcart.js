import React from "react";
import "./style.css"




function Shoppingcart(props) {


    function addItem(e) {
        var cashier_product_list = JSON.parse(localStorage.getItem('cashier_product'));
        var target_product = e.target.id;
        var target_class = e.target.className;
        alert(target_class)
        
        for(var idx = 0; idx < cashier_product_list.length; idx++) {
           
            var product_item = cashier_product_list[idx];
         
            var product_item_search_id = product_item._id;
            if(target_product == product_item_search_id){
                var product_sell_price =product_item.sell_price;


                // get the items in the receipt out of the localstorage done
                // loop through the localstorage so it matches with the product you want to add not showing alert
                // when the match is found, add 1 to the number and multiply the number by the unit cost to get total_cost
                // update the localstorage cashier_product with the updated list of product items in the reciept
                // once update is done break the loop
                // re-update the local storage with the updated data
                // call refresh on the page
                



                var product_receipt_list = JSON.parse(localStorage.getItem('cart'));
                

                for(var item = 0; item < product_receipt_list.length; item++){
                    var product_receipt_item = product_receipt_list[item];
                    var product_receipt_id = product_receipt_item.pid;

                    if(target_product == product_receipt_id)
                    {
                        var number = product_receipt_list[item].number
                        
                        if(target_class.includes("plus")){
                            number = number + 1 
                        }
                        else {
                            if(number != 0){
                                number = number - 1;
                                product_receipt_list.splice(item,1)
                                break;
                            }
                        
                        }
                        
                        var total_cost = number * product_receipt_list[item].price
                        product_receipt_list[item].number = number 
                        product_receipt_list[item].total = total_cost
                        break;
                    }
                }

                if(item == product_receipt_list.length)
                {
                    var new_product_item = {
                        "pid":product_item._id,
                        "number":1,
                        "name":product_item.name,
                        "price":product_item.sell_price,
                        "total":1* product_item.sell_price
                    }

                    product_receipt_list.unshift(new_product_item)
                }


                localStorage.setItem('cart',JSON.stringify(product_receipt_list))
                window.location = "/dashboard"


            }
          
        }
       
    }

  return (

    <div className="cart-container">
        <ul className="cart">
            <li className="product" data-price="3.5" data-quantity="1">
                <div className="product-preview">
                    <div className="thumbnail">
                        <img className="image" src={props.image}/>
                    </div>
                    <div className="product-paper">
                        <div className="product-name">
                            {props.name}
                        </div>
                        <div className="product-price">
                            ${props.sell_price}
                        </div>
                    </div>
                </div>
                
                <div className="product-interactions">
                    <div className="button minus" id={props.product_id} onClick={addItem} >
                        -
                    </div>
                    <div className="button">
                        1
                    </div>
                    <div className="button plus" id={props.product_id} onClick={addItem}>
                        +
                    </div>
                </div>
            </li>
        </ul>
    </div>
    );
}

export default Shoppingcart;
