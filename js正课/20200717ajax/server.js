var http = require('http');
var request = require('request')
var app = http.createServer(function (req, res) {
    // request('http://musicapi.leanapp.cn/artist/list', function (error, respost, body) {
        // 添加响应头
        res.setHeader("Access-Control-Allow-Origin", "*");
     
    // })

    if(req.url==='/'){
        res.end('hellow');
    }else if(req.url==='/a'){
        res.end('word hellow')
    }
});


app.listen(3001, function () {
    console.log('node is ok')
})