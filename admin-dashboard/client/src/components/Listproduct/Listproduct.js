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

    function deleteProduct(e){

        var product_id = e.target.id;

        var merchantData = {
            product_id: product_id
        }

        var productListPromise = api_product.deleteProduct(merchantData);
        productListPromise
        .then(
            function(response)
            {
                loadProduct()
            }
        )
        .catch(
            function(err)
            {
                console.log(err)
            }
        )
    }
    
    function handleButtonClick(event){
        event.stopPropagation();

        const delete_product = event.currentTarget.getAttribute("mid")

        if(event.currentTarget.name === "delete-product") {
            console.log("delete product clicked")
            deleteProduct(delete_product)
        }
    }
    
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
                        id={product._id}
                        onClick={deleteProduct}
                        />

                        </div>

                    )})}


                </div>
            </div>
    )
    
}

export default Listproduct;