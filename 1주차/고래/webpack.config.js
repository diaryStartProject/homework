const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: '@/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    devServer: {
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.css|\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ESLintPlugin({
            extensions: '/\.js|.jsx$/',
            exclude: '/node_modules/'
        }),
    ]
};
