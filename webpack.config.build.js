var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackConfig = require('./webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

webpackConfig.devtool = 'cheap-module-source-map';

webpackConfig.module.loaders.push({
  test: /\.s?css/,
  loader: ExtractTextPlugin.extract(
    "style",
    "css!sass")
});

webpackConfig.plugins.push(
    new CleanWebpackPlugin(['dist'])
);

// Copy files from assets to dist/assets
webpackConfig.plugins.push(
    new CopyWebpackPlugin([
        { from: 'assets', to: 'assets' }
    ])
);

// extract style file
webpackConfig.plugins.push(
    new ExtractTextPlugin("assets/styles.css")
);

webpackConfig.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
};

module.exports = webpackConfig;
