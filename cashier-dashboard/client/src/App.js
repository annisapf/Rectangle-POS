import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import User from "./components/pages/User/User";

import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Auth';


class App extends Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid pl-0 pr-0 m-0">
                        <Navbar />
                        <Route exact path="/" component={Login} />
                        <div>
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/userprofile" component={User}/>
                        </div>
                    </div>
                </Router>
        );
    }
}
export default App;
