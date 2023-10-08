module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            '@app': './src/app',
            '@images': './src/images',
            '@common': './src/common',
            '@features': './src/features',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@models': './src/models',
            '@navigation': './src/navigation',
            '@redux': './src/redux',
            '@screens': './src/screens',
            '@services': './src/services',
            '@theme': './src/theme',
          },
        },
      ],
    ],
  };
};
