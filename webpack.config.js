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
  // entry 
  entry: {
    main: './src/index.js',
    vendor: './src/testvendor.js'
  } ,
  // output
  output: {
    filename: '[name].[hash].js',
    publicPath: 'http://localhost:8080/',
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]  // @import, url()
      }
    ]
  },
  // externals: {
  //   react: reactExternal,
  //   'react-dom': reactDOMExternal,
  // },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // mode
mode: 'development',
  // plugins,
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}