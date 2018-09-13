var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=10000&reload=true',
        './src/index',
    ],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname + '/build'),
        publicPath: path.join(__dirname,'/static/')
    },
    devtool: "source-map",
    mode: 'development',
    resolve: {
        extensions: ["webpack.js",".js",".jsx",".html"]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader:'babel-loader',
            query: {
                plugins: [['import',{
                    libraryName: 'antd',
                    style: 'css'
                }]],
                presets: ['es2015', 'react', 'stage-0']
            }
        },{
            test:/\.css|less$/,
            loader: "style-loader!css-loader"
        },{
            test : /\.less$/,
            use:[
                'style-loader',
                {
                    loader:'css-loader',options:{importLoaders:1}
                },
                'less-loader'
            ]
        }]
    }
}