//主页

import React from 'react';
import {Route
    , Redirect} from 'react-router-dom'
import MyLayout from '../../componetns/layout'
import './index.css';
import AntdTable from '../table'
import Lesson from '../lesson'
import MyProps from '../props'


class Main extends React.Component {
    state = {}


    render() {
        return (
            <MyLayout history={this.props.history}>
                {/*这里用到了React文档中组合里的包含关系   子组件通过props.children获取*/}
                {/* 配置子路由，初始进来 通过重定向使默认加载/main/table */}
                <Route path='/main' render={() => <Redirect to='/main/table'/>}/>
                <Route path='/main/table' component={AntdTable}/>
                <Route path='/main/lesson' component={Lesson}/>
                <Route path='/main/props' component={MyProps}/>
            </MyLayout>
        )
    }
}


export default Main;