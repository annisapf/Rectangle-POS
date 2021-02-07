import React, { Component, useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import { Input, FormBtn } from "../../Form/Form"
import "./style.css"


function Addproduct() {

    
    return (
        <div className='container-fluid pl-0 m-0'>
            <Sidebar />
            <h1>Add Product</h1>
            <form className="col-md-4 mb-3">
                <label>Product Category</label>
               
                <Input onChange="" name="productname" value="" placeholder="food"/>
                <label>Product Item</label> 
        
                <Input onChange="" name="productemail" value="" placeholder="sandwich"/>
                        
                <label>Product Description</label> 
                <Input onChange="" name="productpassword" value="" placeholder="cheese sandwich"/>
                 
                <FormBtn onClick="">
                Add
                </FormBtn>
            </form>
         
        </div>
    )
}

export default Addproduct;