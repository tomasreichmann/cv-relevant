var webpackConfig = require('./webpack.config');

webpackConfig.devtool = '#cheap-module-eval-source-map';

webpackConfig.output = {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].[hash].js'
};

webpackConfig.module.loaders.push([
    // CSS / SASS
    { test: /\.s?css/, loader: 'style!css?sourceMap!sass?sourceMap' }
])

module.exports = webpackConfig;
