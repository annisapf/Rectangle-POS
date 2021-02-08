import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"
import { Input, FormBtn } from "../Form/Form"
import "./style.css"

import api_product from "../../utils/product_data";

function Addproduct() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [base_price, setBaseprice] = useState("");
    const [sell_price, setSellprice] = useState("");
    const [total_stock, setTotalstock] = useState("");
    const [tax, setTax] = useState("");
    
    function handleInputChangeName(event) {
        const { value } = event.target;
        console.log(value);
        setName(value);
    }

    function handleInputChangeDescription(event) {
        const { value } = event.target;
        console.log(value);
        setDescription(value)

    };

    function handleInputChangeBaseprice(event) {
        const { value } = event.target;
        console.log(value);
        setBaseprice(value)
    };


    
    function handleInputChangeSellprice(event) {
        const { value } = event.target;
        console.log(value);
        setSellprice(value)
    };

    function handleInputChangeTotalstock(event) {
        const { value } = event.target;
        console.log(value);
        setTotalstock(value)
    };


    function handleInputChangeTax(event) {
        const { value } = event.target;
        console.log(value);
        setTax(value)
    };

    function onChangeHandlerImage(event) {
        console.log(event.target.files[0])
    }

    function clickSubmitProduct(event)
    {
        var product_data = {
            name: name,
            description : description,
            base_price : base_price,
            sell_price: sell_price,
            total_stock : total_stock,
            tax : tax,
            mid : localStorage.mid
        }

        console.log(product_data);
        var productListPromise = api_product.addProduct(product_data);

        console.log( productListPromise );

        productListPromise.then(
            function(response)
            {
                console.log(response.data)
                // window.location = "/listproduct"
            }
        ).catch(
            function(err)
            {
                console.log(err);
            }
        )
    }


    return (
        <div className='container-fluid pl-0 m-0'>
            <Sidebar />
            <h1>Add Product</h1>
            <div className="productform" enctype="multipart/form-data">

                
                <div className="title">Add a product</div>
                <div className="subtitle">Let's add a product</div>

                     <div className=" input-container">
                        <label>Product Name</label>
                        <Input onChange={handleInputChangeName} name="productname" className="input" value={name} placeholder="coffee"/>
                    </div>

                    <div className="input-container">
                        <label>Product Description</label>
                        <Input onChange={handleInputChangeDescription} name="productname" className="input" value={description} placeholder="greatest beverage"/>
                    </div>

                    <div className="input-container">
                        <label>Product Base Price</label> 
                        <Input onChange={handleInputChangeBaseprice} name="productemail"  className="input" value={base_price} placeholder="10"/>
                    </div>

                    <div className="input-container">
                        <label>Product Sell Price</label> 
                        <Input onChange={handleInputChangeSellprice} name="productpassword"  className="input" value={sell_price} placeholder="12"/>
                    </div>

                    <div className="input-container">
                        <label>Product Total Stock</label> 
                        <Input onChange={handleInputChangeTotalstock} name="productpassword"  className="input" value={total_stock} placeholder="100"/>
                    </div>

                    <div className="input-container">
                        <label>Product Tax</label> 
                        <Input onChange={handleInputChangeTax} name="productpassword" className="input" value={tax} placeholder="2.5"/>
                    </div>

                    <div className="input-container">
                        <label>Product Image</label>
                        <Input onChange={onChangeHandlerImage} className="input" type="file" name="productimage" value=""/>
                    </div>

                    <div className="input-container">
                        <FormBtn onClick={clickSubmitProduct}>
                        Add
                        </FormBtn>
                    </div>

            </div>
         
        </div>
    )
}

export default Addproduct;