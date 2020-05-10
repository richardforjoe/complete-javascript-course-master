/* eslint-disable no-undef */
const path = require('path'); //node package
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		//. current folder - file it will look for all dependencies
		'./src/js/index.js',
	],
	output: {
		// where to save bundle files
		path: path.resolve(__dirname, 'dist'), // absolute path
		filename: 'js/bundle.js',
	},
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			//options
			filename: 'index.html',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
