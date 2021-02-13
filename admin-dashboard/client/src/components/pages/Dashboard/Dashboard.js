import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import "./style.css"

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }
    
    render() {
        return (
            <div className="container-fluid pl-0">
                    <Sidebar />
                    <div className="outwrapper-dashboard">
                        <h1>
                             Welcome { this.state.first_name }
                        </h1>

                    

                    <div className="row">
                        <div className="wrapper-dashboard col-sm-3">
	                        <div className="outer-product">
		                        <div className="content-product animated fadeInLeft">
			                        <span className="bg-product animated fadeInDown">Cashier</span>
			                        <h3>Total Cashier: 4</h3>
		                        </div>	
                            </div>
                        </div>

                        <div className="wrapper-dashboard col-sm-3">
	                        <div className="outer-product">
		                        <div className="content-product animated fadeInLeft">
			                        <span className="bg-product animated fadeInDown">Product</span>
			                        <h3>Total Product: 100</h3>
		                        </div>	
                            </div>
                        </div>
                        
                       
                        </div>

                    </div>
            </div>
        );
    } 
}

export default DashBoard;