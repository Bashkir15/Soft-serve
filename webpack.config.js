var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/softServe.js',

	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/',
		filename: 'soft-serve.js',
		library: 'softserve',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},

			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	}	
}