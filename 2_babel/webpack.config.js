const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'public'),
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets:
                [
                  "@babel/env", 
                  "@babel/preset-react"
                ]
            }
          }
        ]
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
    })
  ],  
  externals: {
    react: reactExternal,
    'react-dom': reactDOMExternal,
  }
};