'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async goodlist() {
    const { ctx } = this;

    // 获取get请求携带的参数
    let obj = ctx.request.query; 
    if(obj.name == "张三" && obj.pwd == "123") {
      ctx.body = {code: 1, msg: "验证成功"}
    }
  }
}

module.exports = HomeController;
