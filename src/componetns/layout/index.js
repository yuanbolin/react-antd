//layout布局

import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import './index.css';
const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class MyLayout extends React.Component {
    state = {}

    //menu跳转
    handleClick = (e) => {
        if (e || e.key) this.props.history.push(e.key);
    }


    render() {
        return (
            <Layout className={'containerBox'}>
                <Header className={'headerBox'}>React+antd 示例项目</Header>
                <Layout>
                    <Sider theme={'light'} width={256}>
                        {/*侧边导航栏，可切换子路由*/}
                        <Menu
                            onClick={this.handleClick}
                            style={{width: 256}}
                            defaultSelectedKeys={['/main/table']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" icon={<Icon type='setting' />} title="练习">
                                <Menu.Item key="/main/table">Table表格</Menu.Item>
                                <Menu.Item key="/main/props">父子组件传值</Menu.Item>
                                <Menu.Item key="/main/lesson">作业练习</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<Icon type='mail' />} title="Navigation One">
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<Icon type='appstore' />} title="Navigation Two">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub4" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className={'contentBox'}>
                        {this.props.children}
                    </Content>
                </Layout>
                <Footer style={{textAlign: 'center'}}>Copyright© 2021 若维技术部出品</Footer>
            </Layout>
        )
    }
}


export default MyLayout;
