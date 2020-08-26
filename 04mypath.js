let path = require("path");

// console.log(__dirname);
// console.log(__filename);

// 获取目录部分
let dir = path.dirname("F:\\2020\\H200601\\egg\\code\\03\\03egg\\logs\\03egg\\03egg-web.log");
console.log(dir); //F:\2020\H200601\egg\code\03\03egg\logs\03egg

// 获取文件名称
let name = path.basename("F:\\2020\\H200601\\egg\\code\\03\\03egg\\logs\\03egg\\03egg-web.log");
console.log(name); //03egg-web.log

// join 拼接路径
let dest = path.join("f:", "public", "img", "a.png");
console.log(dest); //f:\public\img\a.png