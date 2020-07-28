// node.js 中如何导入依赖项
// require() 导入npm 依赖项 
// 导入 express  
var wyq = require('express');
// console.log(wyq)

// 如何使用express 创建服务对象
var serve = wyq();


// 给server 服务设置端口号
serve.listen(3000,function(){
    console.log('node 第一个服务')
})

// 一个机器；同时启动多个服务时候；端口号不能重复
// 协议 ip  相同


// get(url,method) 这个接口为get 请求
// 参一：接口地址
// 参二：接收请求；并处理；做出响应
serve.get('/',function(req,res){
    // 处理接口具体做什么的
    res.send('hellow')

})

serve.get('/login',function(req,res){
    console.log(req.url)  // 获取请求地址
    console.log(req.query);  // 获取get 请求的请求参数
    console.log(req.method)  // 获取请求方式
    // console.log(req)


    // 如何对请求处理；--->参数
    var {user,aa} = req.query
    

    // res 响应对象
    // res.xx() 服务器对客户端做出响应
    // send() 做出【最后】响应
    res.send('word'+user+aa)
})
/**
 * get() 处理 客户端 get 情趣’
 * req  请求对象 req.url 请求地址 req.query 请求参数 req.method 请求凡是
 * res  响应对象 res.send() 响应
 */
serve.get('/register',function(req,res){
    console.log('接口进来了')
    var {username,password,vert} = req.query;
    res.send(username+password+vert)
})