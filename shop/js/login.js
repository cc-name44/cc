var username = document.querySelector('.username') 
var password = document.querySelector('.password')
var user_span = document.querySelector('.userName>span')
var pass_span = document.querySelector('.pass>span')

$('.btn').on('click',function(){
    var user_val = username.value
    var pass_val = password.value

    localStorage.setItem('username',user_val)
    localStorage.setItem('password',pass_val)


    
var flag = false
var reg = /^\w{6,12}$/;
var str1 = username.value;
var str2 = password.value;

if (!reg.test(str1)) {
   user_span.style.display = 'block'
} 
else if (!reg.test(str2)) {
    user_span.style.display = 'none';
    pass_span.style.display = 'block'
   
}
// 登录成功
else{
    // 密码错误提示消失
    pass_span.style.display = 'none';
    // ajax
$.ajax({
type: "GET",
url: "http://vebcoder.cn:9527/api/login",
dataType: "json",
data: {
    userName: username.value,
    password: password.value
},
success: function (data) {
    var code = data.code
    if (code == 1) {

        alert('表示登录成功的状态')
        var logining = window.parent.a;
        var logined = window.parent.a1;
        var uline1 = window.parent.uline1
        var uline2 = window.parent.uline2
        var uline3 = window.parent.uline3
        var uline4 = window.parent.uline4
        var uline5 = window.parent.uline5
        // 下划线
        $(uline2).css({
            color:'black',
            borderBottom:'transparent'
        })
        $(uline1).css({
        color: 'purple',
        borderBottom: '2px solid purple' ,
            })
            // 
        $(logining).hide();
        $(logined).show();
        // 跳转到首页
        location.href = './home.html'
    }
    if (code == 0) {
        alert('表示登录失败')
    }
},
error: function (eve) {
    console.log("发生错误：");
}
});
}
})
        // 下划线
        var uline1 = window.parent.uline1
        var uline2 = window.parent.uline2
        var uline3 = window.parent.uline3
        var uline4 = window.parent.uline4
        var uline5 = window.parent.uline5
    $(uline1).mouseenter(function(){
        $(this).css({
        
        color: 'purple',
        borderBottom: '2px solid purple' ,
        

    })
    
    })
    $(uline1).mouseleave(function(){
        $(this).css({
        
        color: 'black',
        borderBottom: 'transparent' ,
        

    })

    
    })
    $(uline3).mouseenter(function(){
        $(this).css({
        
        color: 'purple',
        borderBottom: '2px solid purple' ,
        

    })
    
    })
    $(uline3).mouseleave(function(){
        $(this).css({
        
        color: 'black',
        borderBottom: 'transparent' ,
    })
    })
    