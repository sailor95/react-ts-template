const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    // favicon: 'assets/images/logo.png', // TODO: add icon
    // inject: true, // TODO: What's this?
  }),
  // TODO: Not necessary if use other CSS solution
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: '[name].[chunkhash].chunk.css',
  }),
]
