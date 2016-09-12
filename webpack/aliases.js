const resolve = require('path').resolve;

const src = [__dirname, '../', 'src'];

module.exports = {
    '@': resolve(...src),
};
