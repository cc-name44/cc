var username = document.querySelector('.username') 
var password = document.querySelector('.password')
var user_span = document.querySelector('.userName>span')
var pass_span = document.querySelector('.pass>span')

$('.btn').on('click',function(){
    var user_val = username.value
    var pass_val = password.value
    // var local_val = localStorage.getItem('')
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
else{
    
    pass_span.style.display = 'none';
    
$.ajax({
type: "GET",
url: "http://vebcoder.cn:9527/api/register",
dataType: "json",
data: {
    userName: username.value ,
    password: password.value
},
success: function (data) {
    var code = data.code
    if (code == 1) {
        var uline1 = window.parent.uline1
        var uline2 = window.parent.uline2
        var uline3 = window.parent.uline3
        var uline4 = window.parent.uline4
        var uline5 = window.parent.uline5
        
        alert('表示注册成功的状态'),
        // 下划线
        $(uline3).css({
            color:'black',
            borderBottom:'transparent'
        })
        $(uline2).css({
        color: 'purple',
        borderBottom: '2px solid purple' ,
            })
        
        location.href = './login.html'
    }
    if (code == 0) {
        alert('表示用户已经存在')
       
        
    }
},
error: function (eve) {
    console.log("发生错误：");
}
});

}  
})


    //   下划线
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
    $(uline2).mouseenter(function(){
        $(this).css({
        
        color: 'purple',
        borderBottom: '2px solid purple' ,
        

    })
    
    })
    $(uline2).mouseleave(function(){
        $(this).css({
        
        color: 'black',
        borderBottom: 'transparent' ,
    })
    })