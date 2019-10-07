const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "funny-utils.min.js", //打包之后生成的文件名，可以随意写。
        library: 'funnyUtils',  // 指定类库名,主要用于直接引用的方式(比如使用script 标签)
        libraryTarget: 'umd',   // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
        path: path.resolve(__dirname, 'dist'),
        globalObject: "this",   // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
        libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.ts$/,
            use: {
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.web.json'
                }
            },
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }

};
