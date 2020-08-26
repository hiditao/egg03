'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get("/goods", controller.home.goodlist);

  router.post("/login", controller.user.login);
  router.post("/register", controller.user.regist)

  router.post("/upload", controller.file.upload);

};
