const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Caching',
    //     }),
    // ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'public', 'dist'),
        clean: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};