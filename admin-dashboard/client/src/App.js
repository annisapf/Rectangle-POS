import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Addcashier from "./components/Addcashier/Addcashier";
import Addproduct from "./components/pages/Addproduct/Addproduct";

import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Auth';


class App extends Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid pl-0 pr-0 m-0">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className='container-fluid m-0 p-0'>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/addcashier" component={Addcashier} />
                            <Route exact path="/dashboard" component={Auth(Dashboard)} />
                            <Route exact path="/addproduct" component={Addproduct} />
                        </div>
                    </div>
                </Router>
        );
    }
}
export default App;
