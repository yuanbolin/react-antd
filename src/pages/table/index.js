import React,{ Component } from 'react'   //引入必要依赖
import { Table, Tag, Popconfirm } from 'antd'   //按需引入UI组件
import './index.css'  //样式表


class MyTable extends Component {
    state = {pageNumber: 10}

    componentDidMount() {
    }


    render() {
        // Table里的数据记得要加key值
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
                    <span>
                        <Popconfirm placement="topLeft" title="确认要通过这条收支申请?"
                                    onConfirm={() => {
                                        console.log('我点击了同意')
                                    }} okText="确认" cancelText="取消">
                            <Tag
                                color="#2db7f5"
                            >
                                同意
                            </Tag>
                        </Popconfirm>
                        <Popconfirm placement="topLeft" title="确认要拒绝这条收支申请?"
                                    onConfirm={() => {
                                        console.log('我点击了拒绝')
                                    }} okText="确认" cancelText="取消">
                            <Tag
                                color="#f50"
                            >
                                拒绝
                            </Tag>
                        </Popconfirm>

                    </span>

                ),
            }
        ];

        let data = []
        const refer = [
            {
                name: 'John Brown',
                danhao: 123531564864632,
                shouzhi: 1,
                price: 120,
                remark: '更换机油',
                time: '2021 11:48:12 GMT+0800',
            },
            {
                name: 'Jim Green',
                danhao: 78941234889443,
                shouzhi: 1,
                price: 99,
                remark: "更换空调滤芯",
                time: '2021 13:31:54 GMT+0800',
            },
            {
                name: 'Joe Black',
                danhao: 3457213125458,
                shouzhi: 0,
                price: 156,
                remark: "火花塞进货2盒",
                time: '2021 15:38:44 GMT+0800',
            },
        ];


        for (let i = 0; i < 30; i++) {
            data.push({key: 'i' + i, ...refer[i % 3]})
        }

        return (
            <Table
                rowkey={record => record.id}
                // 分页器配置  具体api参考分页器组件
                pagination={{
                    showQuickJumper: true,
                    showSizeChanger: true,
                    onChange: (pageNumber) => {
                        console.log('Page: ', pageNumber);
                    }
                }}
                columns={columns}
                dataSource={data}
            />
        )
    }
}

export default MyTable
