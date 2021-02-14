import React, { Component, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import "./style.css"

import api_cashier from "../../../utils/cashier_data"
import api_product from "../../../utils/product_data"

function DashBoard() {
    // constructor() {
    //     super()
    //     this.state = {
    //         first_name: '',
    //         last_name: '',
    //         email: '',
    //         password: ''
    //     }
    // }

    // componentDidMount() {
    //     const token = localStorage.usertoken;
    //     const decoded = jwt_decode(token);
    //     this.setState({
    //         first_name: decoded.first_name,
    //         last_name: decoded.last_name,
    //         email: decoded.email
    //     })
    // }

    const [cashier_data_length, setCashierData] = useState(0);
    const [product_data_length, setProductData] = useState(0);
  

    useEffect(() => {
        loadCashierData()
    }, [setCashierData]);

    useEffect(() => {
        loadProductData()
    }, [setProductData]);

    function loadCashierData() {
        var cashierData = {
            mid: localStorage.mid,
            username: localStorage.first_name
        }
        var cashierdataListPromise = api_cashier.getCashier(cashierData)
        cashierdataListPromise
        .then(
            function(response)
            {
                setCashierData(response.data.length)
                
                
                console.log(response.data)
            }
        )
        .catch(
            function(error)
            {
                console.log(error)
            }
        )
    }

    function loadProductData() {
        var productData = {
            mid: localStorage.mid,
        }
        var productdataListPromise = api_product.getProduct(productData)
        productdataListPromise
        .then(
            function(response)
            {
                setProductData(response.data.length)
               
                
                
                console.log(response.data)
            }
        )
        .catch(
            function(error)
            {
                console.log(error)
            }
        )
    }


        return (
            <div className="container-fluid pl-0">
                    <Sidebar />

                    <h1>
                            Welcome {localStorage.first_name}
                        </h1>


                    <div className="outwrapper-dashboard">
                     
                    

                        <div className="row">
                                <div className="wrapper-dashboard col-sm-3">
                                    <div className="outer-product">
                                        <div className="content-product animated fadeInLeft">
                                            <span className="bg-product animated fadeInDown">Cashier</span>
                                            <h3>Total Cashier: {cashier_data_length}</h3>
                                        </div>	
                                    </div>
                                </div>
        
                                <div className="wrapper-dashboard col-sm-3">
                                    <div className="outer-product">
                                        <div className="content-product animated fadeInLeft">
                                            <span className="bg-product animated fadeInDown">Product</span>
                                            <h3>Total Product: {product_data_length}</h3>
                                        </div>	
                                    </div>
                                </div>  
                        </div>
                    </div>
            </div>
        );
    } 


export default DashBoard;