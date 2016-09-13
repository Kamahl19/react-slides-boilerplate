const webpack = require('webpack');
const lodash = require('lodash');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const baseConfig = require('./config.base');
const commons = require('./common');

module.exports = lodash.merge(baseConfig, {
    devtool: 'source-map',
    debug: false,

    output: {
        path: commons.root('dist'),
        filename: '[name].bundle.[hash].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },

    module: {
        loaders: baseConfig.module.loaders.concat([{
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.less$/,
            loader: 'style!css!less!postcss'
        }, {
            test: /\.json$/,
            loader: 'json',
        }])
    },

    plugins: baseConfig.plugins.concat([
        new CopyWebpackPlugin([{ from: 'public', to: 'public' }]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.DedupePlugin(),
    ]),

    postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
    ],
});
