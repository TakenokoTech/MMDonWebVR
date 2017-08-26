const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const reactSetting = {
    entry: { bundle: './src/jsx/app.jsx' },
    output: {
        //path: path.join(__dirname, 'public/js/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: { extensions: ["*", ".js", ".jsx"] }
};

const sassSetting = {
    entry: { style: './src/sass/index.scss' },
    output: {
        //path:  path.join(__dirname, 'public/css/'),
        filename: '[name].css'
    },
    module: {
        rules: [
            {
                test: /.scss$/,
                use: ExtractTextPlugin.extract({ use: ["css-loader", "sass-loader"] })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}

module.exports = [reactSetting, sassSetting];