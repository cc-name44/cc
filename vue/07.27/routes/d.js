var express = require('express')
var router = express.Router()
router.get('/d',function(req,res){
    res.json({
        msg:'d'
    })
})

module.exports = router