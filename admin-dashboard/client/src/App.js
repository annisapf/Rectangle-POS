import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Addcashier from "./components/Addcashier/Addcashier";
import Addproduct from "./components/Addproduct/Addproduct";
import User from "./components/pages/User/User";
import Listcashier from "./components/Listcashier/Listcashier"
import Listproduct from "./components/Listproduct/Listproduct"
import Transaction from "./components/Transaction/Transaction"

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
                        <div>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/addcashier" component={Addcashier} />
                            <Route exact path="/listcashier" component={Listcashier} />
                            <Route exact path="/dashboard" component={Auth(Dashboard)} />
                            <Route exact path="/addproduct" component={Addproduct} />
                            <Route exact path="/listproduct" component={Listproduct} />
                            <Route exact path="/transaction" component={Transaction} />
                            <Route exact path="/userprofile" component={Auth(User)}/>
                        </div>
                    </div>
                </Router>
        );
    }
}
export default App;
