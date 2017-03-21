var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './react-entry-point.jsx'
    ],
    output: {
        path: '/',
        publicPath: 'http://localhost:3000/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        inline: true
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.json?$/,
                exclude: /node_modules/,
                loader: 'json-loader',
            }
        ]
    }
};