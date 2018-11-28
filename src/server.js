

const config = require('./commons/env');
var express = require('express');
var BodyParser = require('body-parser');
var Logger = require('logger');
var path = require('path');

// webpack hot reload 
var webpack = require('webpack');
var webpack_config = require('../webpack.config.js');
var compiler = webpack(webpack_config);

var proxy = require('http-proxy-middleware');


// var log = Logger.getLogger(module);

var app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({
    extended:false
}))
app.use(express.static(path.join(__dirname,'../')));
// log.info('process in ' + process.env.NODE_ENV);

const ApiProxyConfig = {
    target: config.backendUrl,
    changeOrigin:true,
    ws:true
}

const ApiProxy = proxy(ApiProxyConfig);


app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:webpack_config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler))


app.use('/api',ApiProxy);


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../index.html'));
})

app.listen(config.port,"0.0.0.0", () => {
    console.log("server running at " + config.port);
    // console.log("process.env.NODE_ENV  " + process.env.NODE_ENV);
    // log.info("server running at", config.port);
})