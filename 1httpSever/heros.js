var express = require('express');
var app = express();
var router = express.Router();


app.use(router)
var heros = [
    {name:'于飞',age:22,dec:'巾帼不让须眉',heroId:0},
    {name:'王宇航',age:22,dec:'巾帼不让须眉',heroId:1},
    {name:'周超',age:22,dec:'帅不帅',heroId:2},
]

router.get('/login',function(req,res){
 
})

app.listen(3000)