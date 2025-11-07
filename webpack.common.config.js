const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCSSExtractPlugin(),
        new ESLintPlugin({
            extensions: ['js'], 
            exclude: 'node_modules', 
        }),
    ]
}