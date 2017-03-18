const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const stockAppRouter = require('./routes/stockApp');
const webpackConfig = require('./webpack.config');
const app = express();

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {  
     publicPath: webpackConfig.output.publicPath,  
     stats: {colors: true}  
}));
app.use(require("webpack-hot-middleware")(compiler));

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Register Routers.
app.use('/', stockAppRouter);
app.listen(3000);

console.log('App is listening on Port 3000');
