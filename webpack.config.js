var webpack = require('webpack');
var path = require('path');
const autoprefixer = require('autoprefixer');

const theme = require('./theme');
const paths = require('./src/commons/paths');

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
        extensions: ["webpack.js",".js",".jsx",".html"],
        alias: {
            '@':paths.appSrc
        }
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
            test: /\.css$/,
            loader:'style-loader!css-loader'

        },
        {
            test: /\.less$/,
            use: [
              require.resolve('style-loader'),
              ({ resource }) => ({
                  loader: 'css-loader',
                  options: {
                      importLoaders: 1,
                      modules: /\.module\.less/.test(resource),
                      localIdentName: '[name]__[local]___[hash:base64:5]',
                  },
              }),
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
                      plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                              browsers: [
                            '>1%',
                            'last 4 versions',
                            'Firefox ESR',
                            'not ie < 9', // React doesn't support IE8 anyway
                          ],
                          flexbox: 'no-2009',
                        }),
                  ],
                },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
                modifyVars:theme,
            }
          },
        ],
      }
    ]
    }
}