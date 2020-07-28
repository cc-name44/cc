var express= require('express');
// 获取路由
var router = express.Router();

router.get('/login',function(req,res){
    res.json({
        msg:'路由实现的'
    })
})

// 暴露模块 ---> 其他js 文件可以通过require 导入并使用
module.exports = router