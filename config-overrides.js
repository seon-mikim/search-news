const path = require("path");

module.exports = function override(config) {
  // 별칭(alias) 설정 추가
  config.resolve.alias = {
    ...config.resolve.alias,
    "@components": path.resolve(__dirname, 'src/components'),
    "@pages": path.resolve(__dirname, 'src/pages'),
    "@utils": path.resolve(__dirname, 'src/utils'),
    "@hooks": path.resolve(__dirname, 'src/hooks'),
    "@redux": path.resolve(__dirname, 'src/redux'),
  };

  return config;
};