var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './docs/scripts/main.js',
	output: {
		path: path.resolve(__dirname, './docs/scripts/'),
		publicPath: '/',
		filename: 'docs.js'
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
	},

	node: {
		console: 'true',
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}