'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 路由匹配：根据不同的路由地址，执行不同的函数
  router.get('/', controller.home.index);
  router.get("/other", controller.home.other);

  router.get("/shop", controller.sub.user.shop);

  // router.get("/login", controller.user.login);
  // router.post("/login", controller.user.login);


  // express
  // app.get("/index", (req, res)=>{})

  // http
  // if(url.parse(req.url).pathname == "/home") {}

};
