import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Router from './router/router';
import reportWebVitals from './reportWebVitals';
import './App.css';

import { ConfigProvider } from 'antd';
import zh_CN from "antd/lib/locale/zh_CN";
import moment from "moment";
// 时间中文化
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(
    <React.StrictMode>
        {/*antd组件的中文化*/}
        <ConfigProvider locale={zh_CN}>
            <Router/>
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
