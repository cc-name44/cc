var express = require('express')
var router = express.Router()
router.get('/b',function(req,res){
    res.json({
        msg:'b'
    })
})

module.exports = router