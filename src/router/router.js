// 主路由配置文件

import React, {Component} from "react"
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom'

// 引入所需的组件，用component方式渲染
import Main from '../pages/main'
import Login from '../pages/login'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => <Redirect to='/login'/>}/>
                    <Route path='/login' component={Login}/>
                    <Route path="/main" component={Main}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

