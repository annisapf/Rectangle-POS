import React, { Component } from "react";

import Receipt from "../../Receipt/Receipt"
import Shoppingcart from "../../../components/Shoppingcart/Shoppingcart"

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    // componentDidMount() {
    //     const token = localStorage.usertoken;
    //     const decoded = jwt_decode(token);
    //     this.setState({
    //         username: decoded.username,
    //         // last_name: decoded.last_name,
    //         email: decoded.email
    //     })
    // }
    
    render() {
        return (
            <div className="container-fluid pl-0">
                    <Receipt/>
                    <div>
                        <h1>
                             Welcome { this.state.username }
                        </h1>
                        <Shoppingcart/>
                       
                    </div>
            </div>
        );
    } 
}

export default DashBoard;