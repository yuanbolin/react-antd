import React from "react";

class Index extends React.Component {
    render() {
        let {theme}=this.props
        return (
            <div className="App" style={{...theme}}>
                {/*父组件的传过来的主体内容通过this.props.children接收*/}
                {this.props.children}
            </div>
        );
    }
}
export default Index;
