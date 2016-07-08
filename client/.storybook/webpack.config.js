const path = require('path');

var jsLoader = {
  test: /\.jsx?$/,
  loader: 'babel',
  query: {
    presets: ["es2015", "react", "stage-0"]
  },
  include: path.join(__dirname, '..', 'client'),
  exclude: path.join(__dirname, '..', 'node_modules')
};

var cssLoader = {
  test: /(\.css)$/,
  loaders: ['style', 'css'],
  include: path.resolve(__dirname, '../')
}

var imgLoader = {
  test: /\.(png|jpg|jpeg|gif|svg)$/,
  loader: 'url',
  query: {
    name: 'images/[name]_[hash].[ext]',
    limit: 10000,
  }
}

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    modulesDirectories: [
      'client', 'node_modules'
    ]
  },
  module: {
    context: path.join(__dirname, '..', 'client'),
    loaders: [jsLoader, cssLoader, imgLoader]
  }
}
