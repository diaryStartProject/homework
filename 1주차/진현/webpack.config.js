const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    stats: 'errors-only'
  },

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
        test: /\.svg$/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}
