const path = require('path');
const webpack = require('webpack');
const root = process.cwd();

module.exports = {
  devtool: 'source-map',
  entry: [
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
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
        loader: 'url?prefix=font/&limit=10000',
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
  resolve: {
    root: path.resolve(root),
    alias: {
      '<': path.join(root, 'src/client'),
      styles: path.join(root, 'src/styles'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};
