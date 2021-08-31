import {Component} from 'react'   //引入必要依赖
import {Button, Form, Input, Space, Table, Tag} from 'antd'   //按需引入UI组件
import {UserOutlined, LockOutlined} from '@ant-design/icons';    //按需引入图标
import './index.css'  //样式表
import logo from '../../assets/logo.png'   //引入图片

const FormItem = Form.Item  //定义别名，不定义直接用没问题，只是推荐这么用。

class Login extends Component {
    state = {pageNumber: 10}

    componentDidMount() {
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
        )
    }
}

export default Login
