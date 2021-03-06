const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const aliases = require('./aliases.js');
const commons = require('./common.js');

module.exports = {
    title: 'Presentation',
    baseUrl: '/',
    host: 'localhost',
    port: 3000,
    entry: {
        main: [
            'babel-polyfill',
            './src/main',
        ]
    },

    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
            '.json',
            '.css',
            '.html',
            '.less',
        ],
        alias: aliases,
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: commons.root('src')
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=10000',
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: true, // inject ?hash at the end of the files...
            minify: false,
            chunksSortMode: function compare(a, b) {
                // common always first
                if (a.names[0] === 'common') {
                    return -1;
                }
                // main always last
                if (a.names[0] === 'main') {
                    return 1;
                }
                // vendor before main
                if (a.names[0] === 'vendor' && b.names[0] === 'main') {
                    return -1;
                }
                else {
                    return 1;
                }
                // a must be equal to b
                return 0;
            }
        })
    ],
};

