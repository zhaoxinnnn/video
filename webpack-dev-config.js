const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");

module.exports = {
    entry : "./src/app/app.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(less|css)$/,
            use: ["style-loader", "css-loader", "less-loader"]
        }, {
            test: /\.(png|jpg|gif|md)$/,
            use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ['url-loader?limit=10000&mimetype=image/svg+xml']
        }],
    },
    plugins: [
        new htmlWebpackPlugin({
            template : "./src/www/index.html"
        }),
        new openBrowserWebpackPlugin({
            url : "http://localhost:3100"
        })
    ],
    devServer: {
        port : 3100,
        //可以在局域网中使用ip访问
        host : "0.0.0.0",
        disableHostCheck : true
    }

}