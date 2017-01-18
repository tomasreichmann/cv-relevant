var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dirApp = path.join(__dirname, 'app');
var dirAssets = path.join(__dirname, 'assets');

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'lodash'
        ],
        bundle: path.join(dirApp, 'index')
    },
    resolve: {
        modulesDirectories: [
            'node_modules'
        ],
        root: [
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.OccurenceOrderPlugin(true),

        new webpack.ProvidePlugin({
            // jQuery
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',

            // lodash
            '_': 'lodash'
        }),

        new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.handlebars'),
            output: {
                path: 'dist',
                filename: 'index.html'
            },
            inject: true
        })
    ],
    module: {
        loaders: [
            // Babel loader
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    compact: true
                }
            },

            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

            // Handlebars
            { test: /\.handlebars$/, loader: 'handlebars-loader' },

            // STYLES
            { test: /\.css$/, loader: 'style!css' },

            // CSS / SASS
            { test: /\.scss/, loader: 'style!css?sourceMap!sass?sourceMap' },

            // Image loader
            { test: /\.(jpe*g|png|gif)$/, loader: 'file?name=assets/images/[hash].[ext]' }
        ]
    },
    sassLoader: {
        includePaths: [dirAssets]
    }
};
