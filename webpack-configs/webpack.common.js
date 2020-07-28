const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React Shop',
        template: 'webpack-configs/templates/index.html',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/images', to: 'images' }
        ],
      }),
    ],
  };
};
