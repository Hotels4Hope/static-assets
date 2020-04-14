const webpack = require('webpack');

module.exports = {
    entry: {
        11111: './src/11111.js',
        39624: './src/39624.js',
        60265: './src/60265.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devtool: 'hidden-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map',
            append: '\n//# sourceMappingURL=https://dev-static.hotelsforhope.com/ares/dist/[url]'
        })
    ]
};