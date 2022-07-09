const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    'entry':{
        'app': './src/app.js',
        'admin': './src/admin.js'
    },
    'output': {
        'path': path.resolve(__dirname, 'output'),
        'filename': '[name].[contenthash].bundle.js',
    },
    'module': {
        'rules':[
            {
                test: /\.(js|jsx)$/i,
                include:path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [['@babel/preset-env', {"targets": "defaults" }], '@babel/preset-react']
                  }
                }
              },
            {
                'test':/\.css$/i,
                'use':[{'loader':'style-loader'}, {'loader':'css-loader'}],
            },


        ],
    },
    'plugins': [
        new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
        new CleanWebpackPlugin(),

    ],
    'mode':'production',
};
