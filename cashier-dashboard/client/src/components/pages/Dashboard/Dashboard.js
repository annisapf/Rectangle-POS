import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";


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
                    <Sidebar />
                    <div>
                        <h1>
                             Welcome { this.state.username }
                        </h1>
               
                       
                    </div>
            </div>
        );
    } 
}

export default DashBoard;