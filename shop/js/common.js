
window.a = document.querySelectorAll('.logining');
window.a1 = document.querySelectorAll('.logined');

window.uline1 = document.querySelector('.uline1')
window.uline2 = document.querySelector('.uline2')
window.uline3 = document.querySelector('.uline3')
window.uline4 = document.querySelector('.uline4')
window.uline5 = document.querySelector('.uline5')

// 点击退出登录
$('.return').on('click',function(){

    window.localStorage.clear()
    $(window.a).show()
    $(window.a1).hide()
    // 跳转到home
    location.href = './index.html'
})

// 鼠标悬停事件



// 
$('.option>a:eq(0)').css({
    color: 'purple',
    borderBottom: '2px solid purple' ,
    
})
$('.option>a').on('click',function(){
    // 清空分类的样式
    $('.home_top div').css({display:'none'})
    $('.option>a:eq(0)').on('click',function(){
        $('.home_top div').css({display:'block'})
    })
    console.log(this)
    $('.option>a').css({
        color:'black',
        borderBottom:'transparent'
    })
    $(this).css({
       
        color: 'purple',
        borderBottom: '2px solid purple' ,
        

    })
})
window.ifr = document.getElementById('content');

window.ifr = document.querySelector('.iframe');
var home_top = document.querySelectorAll('.home_top div');

// 样式设置
$('.home_top div').on('click',function(){
    $('.home_top div').css({backgroundColor: '',color:' black'})
    $(this).css({backgroundColor: 'purple',color:' white'})

})

for(var i =0;i<home_top.length;i++){
home_top[i].addEventListener('click',function(){
   
    ifr.src = './view/classify.html';
    sessionStorage.setItem('classify',this.innerHTML);
})
}
window.homeDiv=document.querySelectorAll('.home_top div')
// 返回顶部

$(window).scroll(function(){
    if($(this).scrollTop()> 1000){
        $('.top').css({opacity:'1'})
    }
    else{
        $('.top').css({opacity:'0'})
    }
})
$('.top').on('click',function(){
    $('html , body').animate({scrollTop: 0},'slow')
    
});

// 滚动条
$(window).on('load',function(){
    $('html , body').animate({scrollTop: 0},'slow')
})



