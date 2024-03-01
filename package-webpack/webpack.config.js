const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TestPlugin = require('./src/plugin/index.js')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: path.resolve('./src/loader/style-loader')
                    }
                    , {
                        loader: path.resolve('./src/loader/css-loader')
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new TestPlugin()
    ],
    mode: 'development',
};