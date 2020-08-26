"use strict";

const { Controller } = require("egg");

class UserController extends Controller {
    async login() {

        const { ctx } = this;

        console.log(ctx.request.body);

    }

    async regist() {
        const { ctx } = this;

        console.log(ctx.request.body);

        ctx.body = "<h1>ok</h1>"
    }
}

module.exports = UserController;