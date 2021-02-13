import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { Link, withRouter } from "react-router-dom";
import "./style.css";

class Navbar extends Component {
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
        console.log(token);
        if (token) {
            const decoded = jwt_decode(token);   
            this.setState({
                first_name: decoded.first_name,
                last_name: decoded.last_name,
                email: decoded.email,
                mid : decoded.mid
            })
        }
    }


    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        localStorage.removeItem('email');
        localStorage.removeItem('mid');
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        localStorage.removeItem('all_user_data')
        this.setState({});
        this.props.history.push('/');
    }
    render() {
        const loginRegLink = (
            <ul className='navbar-nav list-group list-group-horizontal'>
                <li>
                    <Link className='btn btn-sm active mr-1 mb-1' to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link className='btn btn-sm active' to='/register'>
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className='navbar-nav list-group list-group-horizontal'>
                <li>
                    <Link className='btn btn-sm active mr-1 mb-1' to='/dashboard'>
                    <i className="far fa-smile-wink"></i> {this.state.first_name}
                    </Link>
                </li>
                <li>
                    {/* <a href="/" rel='noopener noreferrer' onClick={this.logOut.bind(this)}>
                        Logout
                    </a> */}
                    <button className="btn btn-sm active" id="logoutBtn" data-toggle="modal" data-target="#logoutModal" onClick={this.logOut.bind(this)}>
                        <div>Logout</div>
                    </button>
                </li>
            </ul>
        )
        return (
            <nav className='navbar navbar-expand-lg'>
                <div className='collapse navbar-collapse d-flex justify-content-end' id='navbar1'>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);