const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer:{
        contentBase: path.resolve(__dirname,"ronewa"),
        compress:true,
        publicPath: "ronewa",
        writeToDisk: true
    },
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'ronewa/js'),
  },
  module:{
      rules:[
          {
          test: /\.(scss)$/,
          use:[
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                  loader: 'css-loader'
              },
              {
                  loader: 'postcss-loader',
                  options:{
                      plugins: function(){
                          return[
                              require('autoprefixer')
                          ];
                      }
                  }
              },
              {
                  loader: 'sass-loader'
              }
          ]
      },
      {
          test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
          use:[
              {
                  loader: 'file-loader',
                  options:{
                      name: '[name].[ext]',
                      outputPath: '../fonts/',
                      public: '../fonts/'
                  }
              }
          ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
        filename: '../css/app.css'
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
  ]
};