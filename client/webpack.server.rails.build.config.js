/* eslint comma-dangle: ['error',
 {'functions': 'never', 'arrays': 'only-multiline', 'objects': 'only-multiline'} ] */

// Common webpack configuration for server bundle

const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {

  // the project dir
  context: __dirname,
  entry: [
    './app/bundles/Spolth/startup/serverRegistration'
  ],
  output: {
    filename: 'server-bundle.js',
    path: '../app/assets/webpack'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: { libs: path.join(process.cwd(), 'app', 'libs') }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
