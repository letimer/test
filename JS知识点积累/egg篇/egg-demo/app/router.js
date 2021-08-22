'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //app是全局对象，只会实例化一次，而router和controller则继承好了app,直接使用即可
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product',controller.product.index)
};
