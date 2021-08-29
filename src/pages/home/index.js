import React from 'react';
import {Layout, Menu, Table, Tag, Space} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import './index.css';

const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

class Home extends React.Component {
    state = {
        pageNumber: 10
    }


    render() {
        const columns = [
            {
                title: '单号',
                dataIndex: 'danhao',
                key: 'danhao',
            },
            {
                title: '收支',
                dataIndex: 'shouzhi',
                key: 'shouzhi',
                render: flag => flag ? '收入' : '支出',
            },
            {
                title: '客户姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '金额',
                dataIndex: 'price',
                key: 'price',
                render: text => <div>{'￥' + text}</div>,
            },
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                render: time => <div>{new Date(time).getTime()}</div>,
            },
            {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            },
            {
                title: '操作',
                key: 'tags',
                dataIndex: 'tags',
                render: (tags, params) => (
                    <Space size="middle">
                        <Tag
                            color="#2db7f5"
                            onClick={() => {
                                console.log(tags, params)
                            }}
                        >
                            同意
                        </Tag>
                        <Tag
                            color="#f50"
                            onClick={() => {
                                console.log(tags, params)
                            }}
                        >
                            拒绝
                        </Tag>
                    </Space>

                ),
            }
        ];
        const data = []
        const refer = [
            {
                id: '1',
                name: 'John Brown',
                danhao: 123531564864632,
                shouzhi: 1,
                price: 120,
                remark: '更换机油',
                time: '2021 11:48:12 GMT+0800',
            },
            {
                id: '2',
                name: 'Jim Green',
                danhao: 78941234889443,
                shouzhi: 1,
                price: 99,
                remark: "更换空调滤芯",
                time: '2021 13:31:54 GMT+0800',
            },
            {
                id: '3',
                name: 'Joe Black',
                danhao: 3457213125458,
                shouzhi: 0,
                price: 156,
                remark: "火花塞进货2盒",
                time: '2021 15:38:44 GMT+0800',
            },
        ];


        for (let i = 0; i < 30; i++) {
            data.push(refer[i % 3])
        }

        return (
            <Layout style={{height: '100vh'}}>
                <Header style={{background: '#7dbcea'}}>Header</Header>
                <Layout>
                    <Sider theme={'light'} width={256}>
                        <Menu
                            onClick={this.handleClick}
                            style={{width: 256}}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" icon={<MailOutlined/>} title="Navigation One">
                                <Menu.ItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<SettingOutlined/>} title="Navigation Three">
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: 20}}>
                        <Table
                            rowkey={record => record.id}
                            pagination={{
                                showQuickJumper:true,
                                showSizeChanger:true,
                                onChange: (pageNumber) => {
                                    console.log('Page: ', pageNumber);
                                }
                            }}
                            columns={columns} dataSource={data}/>
                    </Content>
                </Layout>
                <Footer style={{textAlign: 'center'}}>Copyright© 2021 若维技术部出品</Footer>
            </Layout>
        )
    }
}


export default Home;