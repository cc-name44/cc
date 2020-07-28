var express = require('express')
var router = express.Router()
router.get('/a',function(req,res){
    res.json({
        msg:'a'
    })
})

module.exports = router