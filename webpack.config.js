const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: '/src/index.js',
	mode: "development",
	output: {
		path: path.resolve(__dirname, './public/dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
	],
}
