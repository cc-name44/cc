// 1.导入express
var express = require('express');
// 2.创建服务
var app = express()
// 3.给服务设置端口号
app.listen(3000,function(){
    console.log('ok')
})
// 4.处理接口
// 4.1接口地址是什么-------  /
// 4.2处理什么请求 --------  get


app.get('/',function(req,res){
    // 4.3请求参数 
    var{a,b} = req.require
    // 4.4响应的内容
    res.send(username+password+vert)
})
