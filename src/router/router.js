// 主路由配置文件

import {Component} from "react"
import {BrowserRouter, Route} from 'react-router-dom'

// 引入所需的组件，用component方式渲染
import Home from '../pages/layout'
import Login from '../pages/login'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={Login}></Route>
                <Route path="/home" component={Home}></Route>
            </BrowserRouter>
        )
    }
}

