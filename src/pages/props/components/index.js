//父子组件传值教程
import {Component} from 'react'   //引入必要依赖
import './index.css'
import {Button} from "antd";
import {MinusCircleOutlined, PlusCircleOutlined} from "@ant-design/icons";  //样式表


class MyProps extends Component {
    constructor(props) {
        super(props);
    }


    handleChange=(type)=>{
        this.props.changeNum(type)
    }

    render() {
        const {num} = this.props
        return (
            <>
                <Button icon={<PlusCircleOutlined/>} type="danger"  onClick={()=>this.handleChange('plus')}/>
                <div className="myprops_content">
                    当前是：{num}
                </div>
                <Button icon={<MinusCircleOutlined/>} type="primary"  onClick={()=>this.handleChange('minus')}/>
            </>
        )
    }
}

export default MyProps
