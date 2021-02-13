import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import CardProduct from "../CardProduct/Cardproduct"

import api_product from "../../utils/product_data"

import "./style.css"

function Listproduct() {

    const [productresult, setProductresult] = useState([]);
    // const [image_display, setImage] = userState(
    //     "http://localhost:5001/client/src/assets/productimage/coffee.jpg")

    useEffect(() => {
        loadProduct()
    }, [setProductresult]);

    function loadProduct(){
        var merchantData = {
            mid : localStorage.mid
        }
        var productListPromise = api_product.getProduct(merchantData);
        productListPromise
        .then(
            function(response)
            {
                setProductresult(response.data)
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
                <h1>List Product</h1>
                
                <div className="row outter">

                    {productresult.map((product, index) => {

                        return(

                        <div className="col-sm" key={index}>

                        <CardProduct
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        base_price = {product.base_price}
                        sell_price = {product.sell_price}
                        total_stock = {product.total_stock}
                        tax = {product.tax}
                        />

                        </div>

                    )})}


                </div>
            </div>
    )
    
}

export default Listproduct;