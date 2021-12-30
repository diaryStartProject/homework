const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, "assets", "js")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['style-loader','css-loader'],
            }
        ]
    }
};