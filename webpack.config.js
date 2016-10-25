var path = require('path');
module.exports = {
    context: path.join(__dirname, '/app'),
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:9090/',
            'webpack/hot/only-dev-server',
            './index.js', //入口文件
        ]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:9090
    }
}
