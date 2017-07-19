const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = function (env) {
  return {
    entry: {
      app: SRC_DIR + '/app.js',
    },
    output: {
      publicPath: '/',
      filename: '[name].bundle.js',
      path: DIST_DIR,
    },
    resolve: {
      alias: {
        assets: path.resolve(SRC_DIR, 'assets'),
      },
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })
      },{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },
       {
        test: /\.(jpg|png|svg)$/,
        use: [{
          loader: 'file-loader',
          query: {
            outputPath: 'assets/images/',
          }
        }],
      }]
    },

    plugins: [
      new ExtractTextPlugin({
        filename: '[name].bundle.css',
        allChunks: true,
        disable: env === 'dev',
      }),
      new HtmlPlugin({
        template: SRC_DIR + '/index.html',
      }),
      new webpack.NamedModulesPlugin(),
      
      new webpack.ProvidePlugin({ // inject ES5 modules as global vars
        $: 'jquery',
        jQuery: 'jquery','window.jQuery': 'jquery',
        Tether: 'tether'
      })
    ],
  };
};