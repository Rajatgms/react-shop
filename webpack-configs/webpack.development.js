const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
