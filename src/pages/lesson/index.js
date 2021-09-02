//父子组件特性练习3答案（两个输入框均为子组件，要求值互相关联哪一个发生变化另一个会随之变化）
import React, { Component } from 'react'
import {Button} from "antd"
import Input from './components/Input'
import Welcome from "./components/welcome";

const themes={
  light:{
    color: '#000000',
    background: '#eeeeee',
  },
  dark:{
    color: '#ffffff',
    background: '#222222',
  },
}
export default class Lesson extends Component {
  state = {
    value: '',
    type: '',
    theme:themes.light,
  }

  componentDidMount() {
    console.log('组件已经挂载完毕',this.state)
  }

  componentWillUnmount() {
    console.log('组件即将卸载')
  }


  //点击修改theme
  toggleTheme = () => {
    this.setState(state => ({
      theme:
          state.theme === themes.dark
              ? themes.light
              : themes.dark,
    }),()=>{console.log(this.state.theme)});
  }

  //输入框子组件输入事件监听
  changeInput = (value, type) => {
    this.setState({
      type,
      value
    })
  }

  render() {
    let { type, value } = this.state
    let sheshidu = value
    let huashidu = value
    if (type == 'sheshidu' && !isNaN(parseFloat(value))) {
      huashidu = (parseFloat(value) - 32) / 1.8
    } else if (type == 'huashidu' && !isNaN(parseFloat(value))) {
      sheshidu = parseFloat(value) * 1.8 + 32
    }
    return (
      <div>
        <div>点击子元素变色</div>
        <Button onClick={this.toggleTheme}>修改子组件颜色</Button>
        <Welcome theme={this.state.theme}>
          {/*这里用到了React文档中组合里的包含关系   子组件通过props.children获取*/}
          <div>我是solt插槽</div>
        </Welcome>
        <div>两个输入框均为子组件，要求值互相关联哪一个发生变化另一个会随之变化</div>
        <Input type='sheshidu' value={sheshidu} changeInput={this.changeInput} />
        <Input type='huashidu' value={huashidu} changeInput={this.changeInput} />
      </div>
    )
  }
}
