const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    entry: {
        popup: './src/ts/popup.ts',
        background: './src/ts/background/index.ts',
        content: './src/ts/content/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },

    cache: true,
    devtool: 'eval-cheap-module-source-map',

    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts']
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './manifest.json' },
            { from: './src/images', to: './images'},
            { from: './src/views'}
        ])
    ]
};
