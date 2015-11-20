import express from 'express';
import handlebars from 'express-handlebars';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
// var express = require('express');
// var handlebars = require('express-handlebars');
// var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
// var webpackConfig = require('../webpack.config');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').load();
}

var app = express();

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('./dist'));

require('./routes')(app);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
