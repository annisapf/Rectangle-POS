import React, { Component } from "react";
import { loginUser } from '../UserFunctions/userFunctions';
import "./style.css"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        loginUser(user).then(res => {
            if(res) {
                //this.props.history.push('/dashboard');
                window.location = "/dashboard";
                console.log(res)
            }
            else {
                console.log("Incorrect email or password");
            }
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <div className="form-wrapper">
                            <div>
                                <h1 className='h3 mb-3 font-weight normal'>Cashier Sign in</h1>
                                <div className='form-item'>
                                    <label htmlFor='username'></label>
                                    <input type='username'
                                    className='form-control'
                                    name='username'
                                    placeholder='Username'
                                    value={ this.state.email }
                                    onChange={ this.onChange }
                                    />
                                </div>
                                <div className='form-item'>
                                    <label htmlFor='password'></label>
                                    <input type='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Password'
                                    value={ this.state.password }
                                    onChange={ this.onChange }
                                    />
                                </div>
                                <button type='button' onClick={this.onSubmit} className='btn btn-lg btn-primary btn-block'>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;