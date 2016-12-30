var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './src/soft-serve.js',
	output: {
		path: path.resolve(__dirname, './dist/'),
		publicPath: '/',
		filename: 'soft-serve.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	}	
}