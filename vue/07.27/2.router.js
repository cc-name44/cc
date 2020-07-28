var express = require('express');
var app = express();
// 获取路由
var router = express.Router()
app.use(router);
var login = require('./routes/login')
var a = require('./routes/a')
var b = require('./routes/b')
var c = require('./routes/c')
var d = require('./routes/d')

app.use(login)
app.use(a)
app.use(b)
app.use(c)
app.use(d)



app.listen('3000')

