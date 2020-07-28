## iframe 注意
1.iframe是独立窗口 ，有window对象
2.浏览器窗口也有window对象
3.窗口之间通信，按照同源策略 ----> 启动页面时，需要用服务启动 live server

4.浏览器窗口中页面 为父页面 window为父windwo
    4.1 如何获取子window
    ~~~js
    var childwindow = document.getElementByTagName('iframe)[0].contentWindow; 
    ~~~
    4.2 如何获取 子window dom
    ~~~js
    var childDOM = childWindow.document.xxx()  // dom的api
    ~~~
    4.3 如何父页面中数据传递到子页面
    ~~~js
    var data = window.data // 父页面数据
    childWindow.data =data // 给子页面添加data属性，并赋值为父页面数据data
    ~~~
5.iframe 加载的页面为 子页面 该页面下的window为iframe的window
    5.1 如何获取父window
    ~~~js
    var parentWindow = window.parent
    ~~~
    5.2 如何将子页面数据a 传递给父页面 b
    ~~~js
    var data = window.a // 获取子页面数据
    parentWindow.b = data // 吧子页面数据a传递给父页面变量b
    ~~~

6.注意
- 1.每个window 都有location localStorage document...
- 2.在子页面中 location.href 重新加载的是子窗口的页面，而不是父窗口的
- 3.localStorage.setItem 是所有窗口弓用的数据

### 相信的iframe 如何传递数据
- localStorage
- 共同的窗口