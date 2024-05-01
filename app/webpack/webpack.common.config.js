const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.php',
            template: 'src/index.php'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(html|php)$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                ],
            },
        ],
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

module.exports = config;