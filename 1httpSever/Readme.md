## js 如何操作服务端

1: 如何创建服务

- 入口文件 index.js

任务：
1：系那件 serve.js 文件
2：创建一个服务 端口号为 8080

2: 如何创建接口。

任务二：
写一个接口
接口地址 '/register'
请求方式: get
请求参数：username password vert
响应： 把请求参数作为字符串响应过去

### 作业

1：登陆接口 /login
method:get
data: username string
password 123456
响应
{
code：200，
token:'dafsdrewrqwer'+时间戳,
msg:'登陆成功'
}

     // 请求密码不是123456时候
     {
       code:210,
       token:null,
       msg:'密码不对'
     }

2：新增英雄列表 'addHeros'
method get
data:
name: 英雄名字
age: 年龄
dec 描述
heroId id 具有唯一性，
token, login 的 token // 难度

响应
{
code:200,
msg: '添加成功'
}

3：删除英雄 'deletHero
method get
data:
heroId id 具有唯一性，
token, login 的 token // 难度

响应
{
code:200,
msg: '删除成功'
}

4：获取影响列表 'getHeros'
method get
data:
token, login 的 token // 难度
{
code:200,
list:[{
  name:'王宇航',
  age:21,
  dec:'是超级英雄',
  heroId:0
}....返回所有新增的英雄]
}

5：修改 updataHero
   method  get
   data:
    age  
    dec 
    heroId： 通过heroId 修改的是哪一个英雄
    token

响应：
   {
     code:200,
     msg:'修改成功',
     item:{把修改的英雄返回过去}
   }    