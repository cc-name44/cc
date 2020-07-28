// 这个写的jq 插件；loading 
var script1=document.createElement('script');//创建script标签节点
script1.setAttribute('type','text/javascript');//设置script类型
script1.setAttribute('src','../../assetes/lib/jquery.js');//设置js地址
document.body.appendChild(script1);//将js追加为body的子标

// loading 插件封装的过程
$.fn.extend({
    loadingInit: function () {
      var body = document.querySelector("body");
      var template = `
            <div class="mask" >
                <div class="mask-load">
                   <img src="../../assetes/img/loading.jpg" alt="">
                </div>
           </div>
            `;
      $(body).append(template);
      $(".mask").css({
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(238, 238, 238, 0.9)",
        display: "none",
      });
      $(".mask-load").css({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      });
    },
    showLoading: function () {
      $(this).loadingInit();
      var opacity = 0;
      $(".mask").css({
        display: "block",
        backgroundColor: `rgba(238, 238, 238, 0)`,
      });
      var timer = setInterval(function () {
        opacity += 0.1;
        $(".mask").css({
          backgroundColor: `rgba(238, 238, 238, ${opacity})`,
        });
        $(".mask-load").css({
          opacity: opacity,
        });
        if (opacity >= 0.9) {
          $(".mask").css({
            backgroundColor: `rgba(238, 238, 238, 0.9)`,
          });
          $(".mask-load").css({
            opacity: 1,
          });
          clearInterval(timer);
        }
      }, 100);
    },
    hideLoading: function () {
      var opacity = 0.9;
      var timer = setInterval(function () {
        opacity -= 0.1;
        $(".mask").css({
          backgroundColor: `rgba(238, 238, 238, ${opacity})`,
        });
        $(".mask-load").css({
          opacity: opacity,
        });
        if (opacity <0) {
          $(".mask").css({
            backgroundColor: `rgba(238, 238, 238, 0)`,
            display: "none",
          });
         
          clearInterval(timer);
        }
      }, 100);
    },
  });