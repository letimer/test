'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 浏览器输出的信息
    ctx.body = 'hello, egg';
  }
}

module.exports = HomeController;
