var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: './commons.js',
  }),
  new webpack.ProvidePlugin({
    React: 'react',
    ReactDOM: 'react-dom',
    reqwest: 'reqwest',
  }),
];
var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};
if(isProduction() ) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compress: {
        warnings: false
      },
    })
  );
}


module.exports = {
  entry:  {
    "index":  "./js/entry/index.js",
    "test":  "./js/entry/test.js",
  },
  output: {
    path:  "./",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  devtool: isProduction()?null:'source-map',
  module: {
    loaders: [
      {test: /\.css$/,  loader: 'style!css!'},
      {test: /\.less$/,  loader: "style!css!less!"},
      {test: /\.scss$/,  loader: "style!css!sass!"},
      {test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel'},
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins
};
