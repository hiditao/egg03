"use strict";

//这种引入方式，可以使用其他变量名
// const Controller = require("egg").Controller;
// 解构赋值引入Controller
const { Controller} = require("egg");

class UserController extends Controller {
    async shop() {
        this.ctx.body = "hello";
    }
}

module.exports = UserController;
