const webpack = require('webpack');
const path = require('path');
const root = process.cwd();
const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/index',
  ],
  output: {
    path: path.join(root, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        include: root,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url-loader?prefix=font/&limit=10000',
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=100000&minetype=image/png',
      },
      {
        test: /\.jpg/,
        loader: 'file-loader',
      },
    ],
  },
  eslint: {
    failOnWarning: false,
    failOnError: false,
  },
  resolve: {
    root: path.resolve(root),
    alias: {
      '<': path.join(root, 'src/client'),
      styles: path.join(root, 'src/styles'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    contentBase: '../dist',
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({ path: './.env' }),
  ],
};
