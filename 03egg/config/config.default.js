/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598426984734_1272';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.cluster = {
    listen: {
      path: "",
      port: 8080,
      hostname: "localhost"
    }
  }

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  // post请求参数会有安全验证问题，需要关闭安全认证
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    }
  }

  config.multipart = {
    mode: "file"
  }

  return {
    ...config,
    ...userConfig,
  };
};
