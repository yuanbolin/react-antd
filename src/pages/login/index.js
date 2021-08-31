import {Component} from 'react'   //引入必要依赖
import {Button, Form, Input} from 'antd'   //按需引入UI组件
import {UserOutlined, LockOutlined} from '@ant-design/icons';    //按需引入图标
import './index.css'  //样式表
import logo from '../../assets/logo.png'   //引入图片

const FormItem = Form.Item  //定义别名，不定义直接用没问题，只是推荐这么用。

class Login extends Component {
    state = {loading: false}

    componentDidMount() {
        //先清理内存
        this.clearStorage()
    }

    //验证成功
    onFinish = values => {
        //展示loading
        this.setState({
            loading: true
        })
        //要传的数据
        let newParams = {
            username: values.username && values.username.replace(/^\s+|\s+$/g, ''), // 去除首尾空格
            password: values.password
        }

        console.log('正在发送参数给后台..', JSON.stringify(newParams))
        //模拟1000延迟登录接口效果
        setTimeout(() => {
            console.log('正在存储接口返回信息..')
            sessionStorage.setItem('token', 'token_test')
            sessionStorage.setItem('name', '游客')
            sessionStorage.setItem('id', '123456')
            sessionStorage.setItem('touxiang', '')
            sessionStorage.setItem('roleName', '游客访问')
            this.setState(
                {
                    loading: false
                },
                () => {
                    this.props.history.push("/home");
                }
            )
        }, 1000)
    }

    //清空sessionStorage缓存
    clearStorage = () => {
        sessionStorage.setItem('openKeys', null)
        sessionStorage.setItem('menuSelectKeys', null)
        sessionStorage.setItem('name', null)
        sessionStorage.setItem('id', null)
        sessionStorage.setItem('phone', null)
        sessionStorage.setItem('token', null)
        sessionStorage.setItem('roleName', null)
    }

    //验证错误
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="Login">
                <div className="loginBox">
                    <div className="content">
                        <img src={logo} alt='图标' style={{height: '70px', margin: `0 auto 47px`}}/>
                        <Form onFinish={this.onFinish}
                              onFinishFailed={this.onFinishFailed} className='login-form'>
                            <FormItem
                                // label="Username"
                                name="username"
                                rules={[{required: true, message: '请输入用户名'}]}>
                                <Input prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder='用户名'/>
                            </FormItem>
                            <FormItem
                                // label="Password"
                                name="password"
                                rules={[{required: true, message: '请输入密码'}]}>
                                <Input prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type='password' placeholder='密 码'/>
                            </FormItem>
                            <FormItem>
                                {/*button的htmlType一定要是submit才能触发form的onFinish*/}
                                <Button type='primary' htmlType='submit' className="loginFormButton"
                                        loading={this.state.loading}>
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
