import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import React from 'react';

import Login from "../components/login/login";
import Logout from "../components/login/logout";
import Add from "../components/add/index";
import Video from "../components/video/index";
import Main from "../components/main";

class Config extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Main}>
                    <IndexRoute component={Video}></IndexRoute>
                    <Route path="/add" component={Add}></Route>
                    <Route path="/video" component={Video}></Route>
                    <Route path="/logout" component={Logout}></Route>
                </Route>
            </Router>
        )
    }
};
export default Config;