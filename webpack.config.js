const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

// Majority of this cribbed from Tyler Mcginnis' React Fundamentals Course
// https://github.com/tylermcginnis/React-Fundamentals/commit/c0ae2c3f46b75b71f2e7bd5d05ef2d68c704d141#diff-11e9f7f953edc64ba14b0cc350ae7b9d

const config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
          { test: /\.(js)$/, use: 'babel-loader' },
          { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
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

module.export = config; 