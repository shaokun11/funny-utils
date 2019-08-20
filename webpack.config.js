const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "index.min.js",
        library: 'kunlib',
        path: path.resolve(__dirname, 'dist-web'),
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