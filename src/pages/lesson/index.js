import React, {Component} from 'react'

export default class Lesson extends Component {
    state = {}

    componentDidMount() {
        console.log('组件已经挂载完毕', this.state)
    }

    componentWillUnmount() {
        console.log('组件即将卸载')
    }


    render() {

        return (
            <div>
                <div>在此完成作业要求</div>
            </div>
        )
    }
}

