const modeConfig = env => require(`./webpack-configs/webpack.${env}`)(env);
const webpackMerge = require('webpack-merge');

module.exports = ({ mode }) => {
  return webpackMerge(
    modeConfig('common'),
    modeConfig(mode),
  );
};
