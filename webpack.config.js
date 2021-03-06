/**
 * Created by adortbud on 8/19/2016.
 */
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {

    entry: {
        'angular2' : [
            'rxjs',
            'reflect-metadata',
            'angular2/core',
            'angular2/router',
            'angular2/http'
        ],
        'app' : './src/client/app/index'
    },

    output: {
        path: __dirname + '/build/',
        publicPath : 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['','.ts','.js','.json','.css','.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: [/node_modules/]
            }
        ]
    },

    plugins: [
        new CommonsChunkPlugin({name: 'angular2', filename: 'angular2.js', minChunks: Infinity}),
        new CommonsChunkPlugin({name: 'common',   filename: 'common.js'})
    ],
    target:'electron-renderer'
};
