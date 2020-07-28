var express = require('express')
var router = express.Router()
router.get('/login',function(req,res){
    res.json({
        msg:'路由实现'
    })
})

module.exports = router