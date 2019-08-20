const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "funny-utils.min.js",
        library: 'funnyUtils',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        globalObject: "this",
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