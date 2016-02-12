const path = require('path');

module.exports = {
    entry: [
        './src/index',
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: path.join(__dirname, '../src')
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000',
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
        }]
    },
    plugins: []
};
