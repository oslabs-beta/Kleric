const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/App.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { 
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: { 
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    proxy: {
      '/api**': 'http://localhost:3000',
      secure: false
    }
  },

}