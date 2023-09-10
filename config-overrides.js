const path = require("path");

module.exports = function override(config) {
  // 별칭(alias) 설정 추가
  config.resolve.alias = {
    ...config.resolve.alias,
    "@components": path.resolve(__dirname, 'src/components'),
    "@hooks": path.resolve(__dirname, 'src/hooks'),
    "@interface": path.resolve(__dirname, 'src/interface'),
    "@pages": path.resolve(__dirname, 'src/pages'),
    "@redux": path.resolve(__dirname, 'src/redux'),
    "@utils": path.resolve(__dirname, 'src/utils'),
  };

  return config;
};