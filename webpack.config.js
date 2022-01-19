const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const webpack = require('webpack');

const isAnalyze = process.argv.includes('--analyze');
const prod = process.env.NODE_ENV || "production";

module.exports = {
  entry: {
    main: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]_bundle.js",
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias : {
      '@images': path.resolve(__dirname, 'public/images')
    }
  },
  infrastructureLogging: {
    level: 'error',
  },

  devServer: {
    port: 9000,
    stats: 'errors-only',
    historyApiFallback: true,
  },
  devtool: prod ? "cheap-source-map" : "eval-cheap-source-map",

  module: {
    rules: [
      {
        test:/\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test:/\.js$/i,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...(isAnalyze ? [new BundleAnalyzerPlugin()] : []),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin({
      banner: '이것은 배너입니다.'
    })
  ]
}
