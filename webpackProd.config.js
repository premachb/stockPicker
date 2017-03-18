var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './react-entry-point.jsx'
    ],
    output: {
        path: './public/js',
        publicPath: 'http://localhost:3000/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        console: true
    },
    module: {
        loaders: [
            {
                test: /\.css?$/,
                exclude: '/node_modules',
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
                query:
                {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.js?$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query:
                {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.json?$/,
                exclude: '/node_modules/',
                loader: 'json-loader',
            }
        ]
    }
};
