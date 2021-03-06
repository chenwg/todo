var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require('../package.json');

var jsLoader = {
  test: /\.jsx?$/,
  loader: 'babel',
  query: {
    presets: ["es2015", "react", "stage-0"]
  },
  include: path.join(__dirname, '..', 'client'),
  exclude: path.join(__dirname, '..', 'node_modules')
}

var imgLoader = {
  test: /\.(png|jpg|jpeg|gif|svg)$/,
  loader: 'url',
  query: {
    name: 'assets/[name]_[hash].[ext]',
    limit: 10000,
  }
};

var htmlLoader = {
   test: /\.html$/,
   loader: 'html'
}

var cssLoader = {
  test: /(\.css)$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}

var config = {
    devtool: null,
    name: 'browser',
    context: path.join(__dirname, '..'),
    entry: {
      app: ['./client']
    },
    output: {
      path: path.join(__dirname, '..', 'dist', 'public'),
      filename: 'assets/[name]-[hash].js',
      publicPath: '/'
    },
    module: {
      loaders: [jsLoader, imgLoader, htmlLoader, cssLoader]
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss'],
      modulesDirectories: [
        'client', 'node_modules'
      ]
    },

    plugins: [
      new ExtractTextPlugin('assets/[name]-[hash].css', { allChunks: true }),
      new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html'), filename: 'index.html'}),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          VERSION: JSON.stringify(pkg.version),
          NODE_ENV: JSON.stringify('production'),
          APIENDPOINT: JSON.stringify('/api')
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
};

module.exports = config;
