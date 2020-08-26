'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this); //app  ctx(request, response)   controller  service  config

    // 假设list是从数据库获取的数据
    let list =  [
      {
        pic: "http://thd:9999/public/img/p1.jpg",
        name: "养生堂天然维生素E软胶囊230粒（200粒+15粒*2盒或200粒+30粒1盒随机发货） ve美容（祛黄褐斑） 延缓衰老",
        type: "维生素E230粒",
        price: 168,
        num: 1
      },
      {
        pic: "http://thd:9999/public/img/p2.jpg",
        name: "妮佳 moony 纸尿裤XL46片（12-17kg)大号婴儿尿不湿",
        type: "XL46",
        price: 89,
        num: 1
      },
      {
        pic: "http://thd:9999/public/img/p3.jpg",
        name: "爱他美（Aptamil） 卓萃婴儿配方奶粉（0—6月龄，1段） 380g",
        type: "白金版380克",
        price: 170,
        num: 1
      },
      {
        pic: "http://thd:9999/public/img/p4.jpg",
        name: "袜子",
        type: "1~3岁",
        price: 25,
        num: 1
      }
    ];

    // 响应请求
    ctx.body = list;
  }

  async other() {
    // this.config
    let port = this.app.config.cluster.listen.port 
    let host = this.app.config.cluster.listen.hostname 

    let result = `http://${host}:${port}/public/img/qq2.jpg`;
    console.log(result);

    // http://thd:9999/public/img/qq.jpg
    this.ctx.body = result;
  }
}

module.exports = HomeController;
