import {HashRouter as Router,Route,Switch} from "react-router-dom";
import React from 'react'
import Login from "../login/index";
import Home from "../home/index";
import NoMatch from "../404/index";

/**
 * @Description: 路由
 * @author dongshuhuan
 * @date 2020-05-16
 */
export default function IRouter(){
    return  <Router>
        <Switch>
            <Route path = "/login" component={Login}></Route>
            <Route path = "/home/:id" component={Home}></Route>
            <Route path = "*" component={NoMatch}/>
        </Switch>

    </Router>
}
