import React, { Component } from "react";
import { loginUser } from '../UserFunctions/userFunctions';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
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
            email: this.state.email,
            password: this.state.password
        }
        loginUser(user).then(res => {
            if(res) {
                //this.props.history.push('/dashboard');
                window.location = "/dashboard";
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
                        <form noValidate onSubmit={ this.onSubmit }>
                            <h1 className='h3 mb-3 font-weight normal'>Sign in</h1>
                            <div className='form-item'>
                                <label htmlFor='email'></label>
                                <input type='email'
                                className='form-control'
                                name='email'
                                placeholder='Email'
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
                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;