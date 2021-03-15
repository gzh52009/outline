// const path = require('path');
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function(config){
//     // @->src
//     // 修改配置
//     config.resolve.alias['@'] = path.join(__dirname,'./src/')
//     config.resolve.alias['@com'] = path.join(__dirname,'./src/components')

//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);

//     return config;
// }

import {override,addDecoratorsLegacy,disableEsLint,useBabelRc} from 'customize-cra'

module.exports = override(
    // 添加babel Decorators插件
    addDecoratorsLegacy(),

    // 禁用ESlint检测
    disableEsLint(),

    // 使用.babelrc文件配置
    useBabelRc()
)