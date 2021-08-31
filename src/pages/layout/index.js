//layout布局，子路由配置文件

import React from 'react';
import {Layout, Menu, Table, Tag, Space} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Route, Link, Redirect} from 'react-router-dom'
import './index.css';
import AntdTable from '../表格'
import Lesson from '../作业练习'

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class Home extends React.Component {
    state = {}

    //menu跳转
    handleClick = (e) => {
        if (e || e.key) this.props.history.push(e.key);
    }


    render() {


        return (
            <Layout className={'containerBox'}>
                <Header className={'HeaderBox'}>React+antd 示例项目</Header>
                <Layout>
                    <Sider theme={'light'} width={256}>
                        {/*侧边导航栏，可切换子路由*/}
                        <Menu
                            onClick={this.handleClick}
                            style={{width: 256}}
                            defaultSelectedKeys={['/home/table']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" icon={<SettingOutlined/>} title="练习">
                                <Menu.Item key="/home/table">Table表格</Menu.Item>
                                <Menu.Item key="/home/lesson">作业答案</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<MailOutlined/>} title="Navigation One">
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<AppstoreOutlined/>} title="Navigation Two">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub4" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className={'ContentBox'}>
                        {/*配置子路由，初始进来 通过重定向使默认加载/home/table*/}
                        <Route path='/home' render={() => <Redirect to='/home/table'/>}/>
                        <Route path='/home/table' component={AntdTable}/>
                        <Route path='/home/lesson' component={Lesson}/>

                    </Content>
                </Layout>
                <Footer style={{textAlign: 'center'}}>Copyright© 2021 若维技术部出品</Footer>
            </Layout>
        )
    }
}


export default Home;