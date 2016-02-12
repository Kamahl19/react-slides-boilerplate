const webpack = require('webpack');
const merge = require('lodash.merge');
const baseConfig = require('./config.base');

module.exports = merge(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client'
    ].concat(baseConfig.entry),
    plugins: baseConfig.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ])
});
