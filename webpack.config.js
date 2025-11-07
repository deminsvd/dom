import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.config.js';
import productionConfig from './webpack.production.config.js';
import developmentConfig from './webpack.development.config.js';

export default (env, args) => {
  switch (args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};