"use strict";

// import Controller from "egg";

const { Controller } = require("egg");
const path = require("path");
const fs = require("fs");

class FileController extends Controller {
    async upload() {
        const { ctx } = this;

        let file = ctx.request.files[0];
        console.log(file)
        let dest = "/public/upload/";

        // 文件将保存在服务器的静态资源目录的绝对路径下
        //f://2020/200601/egg/code/03/03egg/app/public/upload/a2.png
        let to = path.dirname(__dirname) + dest + path.basename(file.filepath);

        // 将上传的文件保存到服务器的静态资源目录下
        await fs.copyFile(file.filepath, to, function(err) {
            if(err) console.log(err)
            console.log("文件复制成功")
        });

        // 返回图片在服务器的路径
        let cluster = this.app.config.cluster.listen;
        let address = `http://${cluster.hostname}:${cluster.port}${dest}${path.basename(file.filepath)}`;
        console.log(address)

        if(file.filepath.endsWith("png") || file.filepath.endsWith("jpg")) {
            ctx.body = `<img src=${address}></img>`;
        } else {
            ctx.body = address;
        }
    }
}

module.exports = FileController;