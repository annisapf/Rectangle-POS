import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import Cardproduct from "../Cardproduct/Cardproduct"

import api_product from "../../utils/product_data"

function Listproduct() {

    const [productresult, setProductresult] = useState([]);

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
                {productresult.map(product => (
                    <Cardproduct
                    name={product.name}
                    description={product.description}
                    base_price = {product.base_price}
                    sell_price = {product.sell_price}
                    total_stock = {product.total_stock}
                    tax = {product.tax}
                    />
                ))}
            </div>
    )
    
}

export default Listproduct;