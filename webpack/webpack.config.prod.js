module.exports = {
  mode: 'production',
  entry: ['./src/index.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    clean: true,
  },
  plugins: [...require('./webpack.plugins')],
  resolve: {
    extensions: ['.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      ...require('./webpack.aliases'),
    },
  },
  stats: 'errors-warnings',
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
}
