import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const path = require("path");
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1583680502836_7820";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: "127.0.0.1",
  //     // 端口号
  //     port: "3306",
  //     // 用户名
  //     user: "root",
  //     // 密码
  //     password: "flrshe!@!!1211",
  //     // 数据库名
  //     database: "qx",
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  config.cluster = {
    listen: {
      port: 7010,
      hostname: "0.0.0.0",
    },
  };
  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "qx",
    username: "root",
    password: "FLRshe!@!!1211",
    timezone: "+08:00",
  };

  // 禁用 csrf, 解决 http 请求 403 问题 （不推荐）
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ["*"],
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  config.static = {
    prefix: "/",
    dir: path.join(appInfo.baseDir, "app/public"),
    dynamic: true,
    preload: false,
    maxAge: 0,
    buffer: false,
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
