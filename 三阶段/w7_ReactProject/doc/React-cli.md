# React脚手架

## create-react-app

### 安装

```bash
    npm install -g create-react-app
```

### 创建react项目

```bash
    create-react-app myapp
```

>项目依赖：react,react-dom,react-scripts
。【
通常情况下，我们创建spa应用时是使用npm安装项目依赖，在通过配置webpack.config.js进行配置，搭建好环境后在src编写源代码。而create-react-app是自动构建，在package.json中只有react-scripts作为依赖

### 目录结构

![folder](./img/folder.png "Optional title")


### 命令
* 启动项目
```bash
    npm start
```
* 扩展webpack配置
    * `npm run eject`
        >单向操作不可逆，npm run eject命令暴露项目的配置，这样用户就可以完全取得 webpack 文件的控制权
    * `react-app-rewired`
        >通过创建一个config-overrides.js文件来对 webpack 配置进行扩展。
        1. 配置config-overrides.js
        ```js
            const { injectBabelPlugin } = require('react-app-rewired');
            module.exports = function override(config, env) {
                // 修改配置
                config.resolve.alias['@'] = path.join(__dirname,'./src/')

                config = injectBabelPlugin([
                    "@babel/plugin-proposal-decorators", { "legacy": true }
                ], config);
                
                return config;
            }
        ```
        2. 修改package.json中的npm script
        ```json
            "scripts": {
                -   "start": "react-scripts start",
                +   "start": "react-app-rewired start",
                -   "build": "react-scripts build",
                +   "build": "react-app-rewired build",
                -   "test": "react-scripts test --env=jsdom",
                +   "test": "react-app-rewired test --env=jsdom",
                    "eject": "react-scripts eject"
            }
        ```

        > PS: react-app-rewired2.x 已经把所有配置方法移置到了`customize-cra`模块
        ```js
            const {override,addDecoratorsLegacy,disableEsLint,useBabelRc,fixBabelImports} = require('customize-cra');
            module.exports = override(
                addDecoratorsLegacy(), // 装饰器支持
                fixBabelImports('import',{ libraryName: "antd", style: "css" })
            )
        ```