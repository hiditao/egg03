let http = require("http");
let url = require("url");
let querystring = require("querystring");

http.createServer((req, res) => {
    // 跨域处理
    res.setHeader("Access-Control-Allow-Origin", "*");

    let urlbody = url.parse(req.url);

    if(urlbody.pathname == "/one") {
        let querybody = querystring.parse(urlbody.query);
        console.log(querybody);
        res.end("ok");
    }

    if(urlbody.pathname == "/two") {
        console.log(req.method);
        if(req.method == "POST") {
            req.on("data", function(result) {
                console.log(JSON.parse(result));
            })
        }
        res.end("2222")
    }

    if(urlbody.pathname == "/three") {
        let querybody = querystring.parse(urlbody.query);
        console.log(querybody);
        res.end("3333")
    }

    if(urlbody.pathname == "/four") {
        req.on("data", function(result) {
            // console.log(JSON.parse(result)); //{ name: '宋江', age: 30 }
            console.log(decodeURI(result)); //name=宋江&age=30
        })
    }

    if(urlbody.pathname == "/jsonp") {
        let querybody = querystring.parse(urlbody.query);
        // fn({msg: "ok", code: 1})
        res.end(`${querybody.cb}({msg: "ok", code: 1})`);
    }

}).listen(9999)