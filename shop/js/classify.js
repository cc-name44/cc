var classify =sessionStorage.getItem('classify')
var container = document.querySelector('.container')
console.log(classify)
// var str =JSON.parse(sessionStorage.getItem('classify'));
// console.log(str)

$.ajax({
url: `http://vebcoder.cn:9527/api/goodList?type_one=${classify}`,
method: 'GET',
data: {},
dataType: 'json',
success: function (data) {
var typeTwo = []; //数组去重  
for (var i = 0; i < data.length; i++) {
    if (typeTwo.indexOf(data[i].type_two) === -1) {
        typeTwo.push(data[i].type_two);
    }

}
// 根据tyoeTwo分类
console.log(typeTwo) // type_two

var  res1=``;

for (var j = 0; j < typeTwo.length; j++) {
   res1 +=` <div class="typetwo">
                <h2>${typeTwo[j]}</h2>
                <ul>`;
    
    for (var k = 0; k < data.length; k++) {
        if (typeTwo[j] == data[k].type_two) { 
            res1 += `
                <li data-two=${data[k].Id}><a href='javascript:;'>
                    <img src='${data[k].img_list_url}'alt="">
                    <p class="title">${data[k].title}</p>
                    <p class="botton">
                        <span class="price">￥${data[k].price}</span>
                        <span class="label">${data[k].mack}</span></p>
                    </a>
                </li>`   
         
        }
    }              
        res1 +=  ` </ul>
                </div>`;  
    console.log('创建成功')  
}
                        // var newdiv = '<div></div>'
                        // $('body').append(newdiv)
                        // var coffeeH = $(newdiv).offset().top
                        // var h = window.parent.document.querySelector('.iframe')
                        // $(h).css({
                        // height:coffeeH 
                        //     })
container.innerHTML = res1
console.log(res1)
}})