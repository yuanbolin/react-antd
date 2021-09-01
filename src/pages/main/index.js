//主页

import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
import MyLayout from '../../componetns/layout'
import './index.css';
import AntdTable from '../table'
import Lesson from '../lesson'


class Main extends React.Component {
    state = {}


    render() {
        return (
            <MyLayout history={this.props.history}>
                {/*这里用到了React文档中组合里的包含关系   子组件通过props.children获取*/}
                {/* 配置子路由，初始进来 通过重定向使默认加载/main/table */}
                <Route key={'/main'} path='/main' render={() => <Redirect to='/main/table'/>}/>
                <Route key={'/main/table'} path='/main/table' component={AntdTable}/>
                <Route key={'/main/lesson'} path='/main/lesson' component={Lesson}/>
            </MyLayout>
        )
    }
}


export default Main;