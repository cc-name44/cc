var express= require('express');
var app = express();
// 获取路由
var router = express.Router();
app.use(router);

// 导入 路由模块
var login = require('./routes/login.js');
var a = require('./routes/a.js')

// 在服务上使用路由模块
//---> 接口可以访问了
app.use(login);
app.use(a)

router.get('/b',function(req,res){
    res.json({
        msg:'b'
    })
})
router.get('/c',function(req,res){
    res.json({
        msg:'c'
    })
})

app.listen('3000')
