//父子组件传值教程
import {Component} from 'react'   //引入必要依赖

import Content from './components'
import './index.css'  //样式表


class MyProps extends Component {
    state = {
        num: 0
    }


    changeNum = (type) => {
        if (type == 'minus') {
            this.setState(state => {
                if (state.num == 0) return
                state.num--
                return {
                    num: state.num
                }
            })
        } else if (type == 'plus') {
            this.setState(state => {
                state.num++
                return {
                    num: state.num
                }
            })
        }
    }

    render() {
        const {num} = this.state
        return (
            <div className="myprops_container">
                <Content changeNum={this.changeNum} num={num}></Content>
            </div>
        )
    }
}

export default MyProps
