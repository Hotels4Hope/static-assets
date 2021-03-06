const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

module.exports = {
    entry: {
        // 37396: './src/37396.js',
        // 39624: './src/39624.js',
        // 48729: './src/48729.js',
        // 49553: './src/49553.js',
        // 51108: './src/51108.js',
        // 52342: './src/52342.js',
        // 51441: './src/51441.js',
        // 51442: './src/51442.js',
        // 51438: './src/51438.js',
        // 51821: './src/51821.js',
        // 51824: './src/51824.js',
        // 51440: './src/51440.js',
        // 52780: './src/52780.js',
        // 52783: './src/52783.js',
        // 52866: './src/52866.js',
        // 52863: './src/52863.js',
        // 52870: './src/52870.js',
        // 52918: './src/52918.js',
        // 50864: './src/50864.js',
        // 49547: './src/49547.js',
        // 51662: './src/51662.js',
        // 52975: './src/52975.js',
        // 52974: './src/52974.js',
        // 52973: './src/52973.js',
        // 51663: './src/51663.js',
        // 53474: './src/53474.js',
        // 50872: './src/50872.js',
        // 51129: './src/51129.js',
        // 51660: './src/51660.js',
        // 53739: './src/53739.js',
        // 53763: './src/53763.js',
        // 53907: './src/53907.js',
        // 54030: './src/54030.js',
        // 54036: './src/54036.js',
        // 54051: './src/54051.js',
        // 54271: './src/54271.js',
        // 54568: './src/54568.js',
        // 55776: './src/55776.js',
        // 56719: './src/56719.js',
        // 56811: './src/56811.js',
        // 56837: './src/56837.js',
        // 56875: './src/56875.js',
        // 57802: './src/57802.js',
        // 57830: './src/57830.js',
        // 58192: './src/58192.js',
        // 59020: './src/59020.js',
        // 59222: './src/59222.js',
        // 59432: './src/59432.js',
        // 59465: './src/59465.js',
        // 59533: './src/59533.js',
        // 60055: './src/60055.js',
        // 60100: './src/60100.js',
        // 60831: './src/60831.js',
        62011: './src/62011.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: '#h4h-styles',
                        },
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: true,
                        },
                    },
                ],
            },
            canPrint: false,
        }),
    ],
};
