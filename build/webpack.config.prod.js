const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

  // devtool: '#inline-source-map', // or 'eval'

  output: {
    // in the case of a "plain global browser library", this
    // will be used as the reference to our module that is
    // hung off of the window object.
    library: 'js.device.selector',
    // We want webpack to build a UMD wrapper for our module
    libraryTarget: 'umd',
    // the destination file name
    filename: 'js.device.selector.min.js',
  },

  optimization: {
    minimize: true,
  },
});
