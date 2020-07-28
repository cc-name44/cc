var express = require('express')
var router = express.Router()
router.get('/c',function(req,res){
    res.json({
        msg:'c'
    })
})

module.exports = router