var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


const config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
      },
      module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
        ]
      },
      devServer: {
          historyApiFallback: true
      },
      plugins: [
          new HtmlWebpackPlugin({
              template: 'app/index.html'
          })
      ],
      mode: "development"
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            } 
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;