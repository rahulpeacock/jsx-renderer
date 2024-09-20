const path = require('node:path');

module.exports = {
  mode: 'none',
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
