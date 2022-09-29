module.exports = {
  mode: 'development',
  entry: ['./src/main.tsx'],
  module: {
    rules: require('./webpack.rules'),
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: require('./webpack.plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.json', '.jsx', '.tsx', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      ...require('./webpack.aliases'),
    },
  },
  stats: 'errors-warnings',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    stats: 'errors-warnings',
    hot: true, // Use HMR
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
}
