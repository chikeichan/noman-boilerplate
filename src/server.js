/* eslint global-require: 0 */
const path = require('path');
const express = require('express');
const chalk = require('chalk');

const root = process.cwd();
const app = new express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../configuration/webpack.frontend.dev');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(root, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(root, '/dist/index.html'));
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    const logOutput = `==> 🌎  Listening on port %s. Open up ' + ${chalk.red('http://localhost:%s')} + ' in your browser.`;
    console.info(logOutput, port, port);
  }
});
