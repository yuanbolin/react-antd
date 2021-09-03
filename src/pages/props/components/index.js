//父子组件传值教程
import React,{ Component } from 'react'   //引入必要依赖
import './index.css'
import { Button } from "antd";

class MyProps extends Component {

    handleChange=(type)=>{
        this.props.changeNum(type)
    }

    render() {
        const {num} = this.props
        return (
            <>
                <Button icon={"plus-circle"} type="danger"  onClick={()=>this.handleChange('plus')}/>
                <div className="myprops_content">
                    当前是：{num}
                </div>
                <Button icon={"minus-circle"} type="primary"  onClick={()=>this.handleChange('minus')}/>
            </>
        )
    }
}

export default MyProps
