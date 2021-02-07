import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
// import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar"

class Profile extends Component {
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
            <div className='container-fluid pl-0 m-0'>
                <Sidebar />
              
            </div>
        )
    }
}

export default Profile;