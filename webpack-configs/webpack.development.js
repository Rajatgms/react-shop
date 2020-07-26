const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = () => ({
  devtool: 'source-map',
  devServer: {
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
});
