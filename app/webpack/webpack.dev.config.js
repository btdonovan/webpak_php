const common = require("./webpack.common.config");
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'public', 'dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
        ],
    },
})