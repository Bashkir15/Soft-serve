var webpack = require('webpack');
var path = require('path');

module.exports = {
	cache: true,
	devtool: 'cheap-module-source-map',

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
				include: [
					path.join(__dirname, 'src')
				],
				exclude: /node_modules/,
				query: {
					cacheDirectory: true
				}
			},

			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
}