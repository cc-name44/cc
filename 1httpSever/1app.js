// 1: 导入 express
var express = require('express');
// 2：创建服务
var app = express();
// 3：给服务设置端口号
app.listen(3000, function () {
    console.log('node is ok')
})
// 4：处理接口 
// 4.1 接口地址是什么 --> /
// 4.2 处理什么请请求 --> get
app.get('/', function (req, res) {

    // 4.3 请求参数什么？
    var {a,b} = req.query;   // 指定 web 端发送什么请求参数
    // 4.4 响应什么内容
    // send() 一次性返回；内容可以是对象；也可以是字符串
    // res.send({
    //     token:'ddqrwqeorfhasoireuy9q3w74u923u'
    // })

    res.json({
        token:'djfaeorquweoru'
    })
})

app.get('/down',function(req,res){
    res.download('./index.js')
})
