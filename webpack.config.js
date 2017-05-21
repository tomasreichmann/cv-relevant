var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dirApp = path.join(__dirname, 'app');
var dirAssets = path.join(__dirname, 'assets');

const pages = [
  {
    template: 'templates/index.handlebars',
    filename: 'index.html'
  },
  {
    template: 'templates/contracting/index.handlebars',
    filename: 'contracting/index.html'
  },
  {
    template: 'templates/headhunting/index.handlebars',
    filename: 'headhunting/index.html'
  },
  {
    template: 'templates/obsazene-pozice/index.handlebars',
    filename: 'obsazene-pozice/index.html'
  },
  {
    template: 'templates/reference/index.handlebars',
    filename: 'reference/index.html'
  },

  // English
  {
    template: 'templates/en/index.handlebars',
    filename: 'en/index.html'
  },
  {
    template: 'templates/en/index.handlebars',
    filename: 'en/index.html'
  },
  {
    template: 'templates/en/contracting/index.handlebars',
    filename: 'en/contracting/index.html'
  },
  {
    template: 'templates/en/headhunting/index.handlebars',
    filename: 'en/headhunting/index.html'
  },
  {
    template: 'templates/en/filled-positions/index.handlebars',
    filename: 'en/filled-positions/index.html'
  },
  {
    template: 'templates/en/references/index.handlebars',
    filename: 'en/references/index.html'
  }
];

module.exports = {
  entry: path.join(dirApp, 'index'),
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
  ].concat(pages.map( (page) => (
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, page.template),
      filename: page.filename
    })
  ) ) ),
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
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
        query: {
          knownHelpersOnly: false,
          helperDirs: ['templates/helpers']
        }
      },

      // Image loader
      { test: /\.(jpe?g|png|gif)$/, loader: 'file?name=assets/images/[hash].[ext]' }
    ]
  },
  handlebarsLoader: {
    knownHelpersOnly: false
  },
  sassLoader: {
    includePaths: [dirAssets]
  }
};
