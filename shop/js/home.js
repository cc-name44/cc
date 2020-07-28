       // 轮播图
       setInterval(function () {
        $(".wrap>img:first").animate(
            {
                marginLeft: '-1200px'
            },
            1000,
            function () {
                $(".wrap>img").css({ marginLeft: 0 });
                $(".wrap").append($(".wrap>img:first"));
            }
        );
    },3000)
   
    // 加载第一页
    var ul = document.querySelector('.goods')

     
    $.ajax({
    url: "http://vebcoder.cn:9527/api/goodList", 
    method: "get", 
    data: {
        page:'1'
    },
    dataType: "json", 
    success: function (data) {
        var str = JSON.stringify(data)
        localStorage.setItem('goodList',str)  
    },
    error: function (err) {
        console.log("系统错误");
    },
    });

    var str1 = JSON.parse(localStorage.getItem('goodList'))
        var res = ''
        for(var x in str1){
            var {img_list_url,mack,price,title, Id} = str1[x]
            res+=`<li data-one=${Id}><a href='javascript:;'>
                <img src='${img_list_url}'alt="">
                <p class=".goods_title">${title}</p>
                <p class="goods_botton">
                    <span class="price">￥${price}</span>
                    <span class="label">${mack}</span></p>
                </a></li>`
        }
        ul.innerHTML = res

    // 第一页详细页面加载
    $('.goods>li').on('click',function(){
        // 
        var parentdiv =  window.parent.homeDiv
        var indexuline1 = window.parent.uline1
        $(parentdiv).css({
       display:'none'
            })
        $(indexuline1).css({
            color:'black',
            borderBottom:'transparent'
        })
    // 
    $.ajax({
        url:`http://vebcoder.cn:9527/api/detail?goodId=${Number($(this).attr('data-one'))}`,
        type:'GET',
        dataType:'JSON',
        asnyc:true,
        success:function(data){
            console.log(data);
            var str = JSON.stringify(data);
            sessionStorage.setItem('goodId',str);
            location.href= "./coffee.html";
        },
        error:function(err){
            console.log(err);
        }
    })
}) 

    // 触底加载
   var windowparent = window.parent;
   var num = 1
   $(windowparent).scroll(function(){
        if ($(this).scrollTop() + $(this).height()>= $(parent.document).height()) {
            num++
            $.ajax({
                url: `http://vebcoder.cn:9527/api/goodList?page=${num}`,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    // setTimeout(function () {
                        for (var x in data) {
                            var { img_list_url, mack, price, title, Id } = data[x]
                            var res1 = `<li data-one=${Id}><a href='javascript:;'>
                                        <img src='${img_list_url}'alt="">
                                        <p class=".goods_title">${title}</p>
                                        <p class="goods_botton">
                                            <span class="price">￥${price}</span>
                                            <span class="label">${mack}</span></p>
                                        </a></li>`
                            $(ul).append(res1)
                            console.log(data[x])  
                        }
    // 每次都进行详情页面加载
    $('.goods>li').on('click',function(){
    $.ajax({
        url:`http://vebcoder.cn:9527/api/detail?goodId=${Number($(this).attr('data-one'))}`,
        type:'GET',
        dataType:'JSON',
        asnyc:true,
        success:function(data){
            console.log(data);
            var str = JSON.stringify(data);
            sessionStorage.setItem('goodId',str);
            location.href= "./coffee.html";

        },
        error:function(err){
            console.log(err);
        }
    })
}) // 详情页面
                        

                        
                        var win = window.parent;
                        $(win.ifr).css('height',$(document).height() + 'px')
                    // }, 0)
                },
                error: function (err) {
                    console.log(err);
                }
            })

        }
    }
    )



    // 下划线
    var uline1 = window.parent.uline1
    var uline2 = window.parent.uline2
    var uline3 = window.parent.uline3
    var uline4 = window.parent.uline4
    var uline5 = window.parent.uline5

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
    $(uline4).mouseenter(function(){
        $(this).css({
        
        color: 'purple',
        borderBottom: '2px solid purple' ,
        

    })
    
    })
    $(uline4).mouseleave(function(){
        $(this).css({
        
        color: 'black',
        borderBottom: 'transparent' ,
        

    })

    
    })
    $(uline5).mouseenter(function(){
        $(this).css({
        
        color: 'purple',
        borderBottom: '2px solid purple' ,
        

    })
    
    })
    $(uline5).mouseleave(function(){
        $(this).css({
        
        color: 'black',
        borderBottom: 'transparent' ,    
    })
    })