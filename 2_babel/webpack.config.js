const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: "bundle.js",
    chunkFilename: '[name].[chunkhash].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },      
      {
        test: /\.(png|gif|jpe?g)$/i,
        use: "file-loader"
      },
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.scss', '.css']
  },
  devtool: 'source-map',
  plugins: [ 
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
  ]
};