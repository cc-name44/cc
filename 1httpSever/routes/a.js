var express= require('express');
// 获取路由
var router = express.Router();


router.get('/a',function(req,res){
    res.json({
        msg:'a'
    })
})

//???
module.exports = router