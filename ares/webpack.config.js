const webpack = require('webpack');

const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SourceMapPath = require('./js/source-map-path');
const EntryPoints = require('./js/entry-points');

const env = process.env.NODE_ENV;

module.exports = () => {
    console.log('Webpack: ', process.env.NODE_ENV);
    return {
        entry() {
            return EntryPoints();
        },
        output: {
            filename: 'dist/[name].js',
            path: `${__dirname}`,
        },
        // optimization: {
        //     nodeEnv: false,
        // },
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: false,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false,
                                // eslint-disable-next-line prefer-template
                                additionalData: '$env: ' + env + ';',
                            },
                        },
                    ],
                },
            ],
        },
        devtool: env === 'production' ? '' : 'hidden-source-map',
        plugins: [
            new Dotenv(),
            new webpack.SourceMapDevToolPlugin({
                filename: 'dist/[name].map',
                sourceRoot: SourceMapPath(),
            }),
            new MiniCssExtractPlugin({
                moduleFilename: ({name}) => `./site_configs/[name]/styles/${name.slice(-5)}.css`,
            }),
        ],
    };
};
