const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: { import: './src/index.tsx' },
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
  },
  module: {
    rules: [
      {
        //  jsx/polyfills
        test: /\.(jsx?|tsx?)$/i,
        exclude: /node_modules/,
        use: ['ts-loader', 'babel-loader'],
      },
      {
        // css/sass extract+compile
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new MiniCssExtractPlugin({ filename: '[name].[hash].css' }),
  ],
};
