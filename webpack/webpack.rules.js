const { inDev } = require('./webpack.helpers')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.css$/,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: 'assets/images',
          outputPath: 'assets/images',
        },
      },
    ],
  },
  {
    // Font & SVG loader
    test: /\.(woff(2)?|ttf|otf|eot)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: 'assets/fonts',
          outputPath: 'assets/fonts',
        },
      },
    ],
  },
]
