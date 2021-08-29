## 创建应用
 ####  1. 首先在本地新建web文件夹，进入文件夹内。根据以下图片操作输入cmd然后回车打开cmd命令窗口。
![img.png](img.png)
在cmd命令行中运行以下命令，未安装yarn的请先下载yarn

```js
yarn create react-app antd-demo   //下载react框架代码项目名称叫做antd-demo

npm install -g yarn  //全局下载yarn

yarn --version   //下载yarn后运行查看版本代表成功
```

####  2. 下载完成后使用IDEA打开antd-demo目录，可以看到package.json中并没有我们需要的u库antd和路由react-router-dom，还需要我们再另外下载，运行以下命令。
```js
yarn add antd    //项目依赖中加入antd包
yarn add @ant-design/icons  //项目依赖中加入antd图标包
yarn add react-router-dom    //项目依赖中加入react-router-dom包
```
![img_1.png](img_1.png)
完成依赖下载后运行yarn start命令启动项目。

