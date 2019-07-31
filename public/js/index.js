 // 用ajax动态请求数据
 $(function(){
    $.ajax({
      url:"http://localhost:8080/index",
      type:"get",
      dataType:"json",
      success:function(result){
          var {fresh,decoration}=result;
          var [p1, p2, p3,p4]=fresh;
          var [sp1,sp2,sp3,sp4]=decoration;
        // var {title, img, price, href, pic}=p1;
          var html=`<div class="xingshanping" data-target="tab">
        <span><a href="${p1.url}"><img src="${p1.img}"  alt="图片已损坏"></a></span>
        <span>${p1.title}</span>
        <span>¥${p1.price.toFixed(2)}</span>
    </div>
    <div data-target="tab">
        <span><a href="${p2.url}"><img src="${p2.img}"  alt="图片已损坏"></a></span>
        <span>${p2.title}</span>
        <span>¥${p2.price.toFixed(2)}</span>
    </div>
    <div data-target="tab">
        <span><a href="${p3.url}"><img src="${p3.img}" alt="图片已损坏"></a></span>
        <span>${p3.title}</span>
        <span>¥${p3.price.toFixed(2)}</span>
    </div>
    <div data-target="tab">
        <span><a href="${p4.url}"><img src="${p4.img}" alt="图片已损坏"></a></span>
        <span>${p4.title}</span>
        <span>¥${p4.price.toFixed(2)}</span>
    </div>`;
       document.getElementById("xingshanpingBOX").innerHTML=html;
       html1=`<div class="jiayuanbox" data-target="tab">
       <span>
           <a href="${sp1.url}">
               <img src="${sp1.img}" alt="图片已损坏" />
           </a>
       </span>
       <ul>
           <li>${sp1.title}</li>
           <li>¥${sp1.price.toFixed(2)}</li>
       </ul>
   </div>
   <div class="jiayuanbox" data-target="tab">
       <ul>
           <li>${sp2.title}</li>
           <li>¥${sp2.price.toFixed(2)}</li>
       </ul>
       <span>
           <a href="${sp2.url}">
               <img src="${sp2.img}" alt="图片已损坏" />
           </a>
       </span>
   </div>
   <div class="jiayuanbox" data-target="tab">
       <span>
           <a href="${sp3.url}">
               <img src="${sp3.img}" alt="图片已损坏" />
           </a>
       </span>
       <ul>
           <li>${sp3.title}</li>
           <li>¥${sp3.price.toFixed(2)}</li>
       </ul>
   </div>
   <div class="jiayuanbox" data-target="tab">
       <ul>
           <li>${sp4.title}</li>
           <li>¥${sp4.price.toFixed(2)}</li>
       </ul>
       <span>
           <a href="${sp4.url}">
               <img src="${sp4.img}" alt="图片已损坏" />
           </a>
       </span>
   </div>`;
   document.getElementById("jiayuan").innerHTML=html1;
      }  
    })
    
  });
 // 页面滚动条带动的页面动
    //页面加载时候
    $(window).load(function(){
        //获取元素 
        // 获取推荐图元素  
        var imgs = document.querySelectorAll("#box .tuijian [data-target=tab]");
        // 获取轮播图元素
        var lun = document.querySelectorAll("#box .lunbo [data-target=tab]")[0];
        // 获取今日新品元素
        var xinpings = document.querySelectorAll("#box .xingshanpingBOX [data-target=tab]");
        // 获取限时商品的元素
        var xianshiboxs = document.querySelectorAll("#box .xianshibox [data-target=tab]");
        // 获取概括介绍的文本元素
        var text = document.querySelectorAll("#box .midtu .midtu2 [data-target=tab]")[0];
        // 获取家园装点的元素
        var jiayuans = document.querySelectorAll("#box .jiayuan [data-target=tab]");
        // 获取花语门店的活动及概要样式
        var hua_bot_lists = document.querySelectorAll("#box .hua_bot_list [data-target=tab]");
        // 获取运输 、礼品、 服务、 优惠券相关
        var index_yun_li_fu_yous = document.querySelectorAll(
            "#box .index_yun_li_fu_you [data-target=tab]");
        //给轮播图元素添加类:className
        lun.className = "fixed";
        for (var img of imgs) {
            //给推荐图元素添加类:className
            img.className = "fixed";
        }
        //绑定事件滚动事件
        window.onscroll = function(){
            //获取滚动条滚动过的距离
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            // 当滚动到<指定位置>时
            if (scrollTop >=350) {
                //遍历每个上新商品图元素
                for (var xinping of xinpings) {
                    //给今日上新商品图元素添加类:className
                    xinping.className = "fixed1";
                }
            }
            if (scrollTop >= 800) {
                //遍历每个限时商品元素
                for (var xianshibox of xianshiboxs) {
                    //给限时商品图元素添加id;
                    xianshibox.id = "fixed";
                }
            }
            if (scrollTop >= 1400) {
                //给花语的概括介绍文本的元素添加id;
                text.id = "fixed1";
            }
            if (scrollTop >= 1800) {
                //遍历每个家园商品元素
                for (var jiayuan of jiayuans) {
                    //给限时商品图元素添加id;
                    jiayuan.id = "fixed2";
                }
            }
            if (scrollTop >= 2500) {
                //遍历花语门店的活动及概要样式的左右两边元素
                for (var hua_bot_list of hua_bot_lists) {
                    //给花语门店的活动及概要样式元素添加id;
                    hua_bot_list.id = "fixed3";
                }
            }
            if (scrollTop >= 2950) {
                //遍历运输 、礼品、 服务、 优惠券相关元素
                for (var index_yun_li_fu_you of index_yun_li_fu_yous) {
                    //给运输 、礼品、 服务、 优惠券相关元素添加id;
                    index_yun_li_fu_you.id = "fixed4";
                }
            }
        }

    };




// 轮播图功能
(function(){
    var i = 0; //显示的第几张图片，从0开始
    var li_width = 1260; //每张图片的固定宽度
    var duration = 1000; //每次轮播的持续时间
    var li_count = 2; //li的位置
    // 获取要移动的ul
    var ulImgs = document.querySelector(".lunbo ul:nth-child(2)");
    // 获取包含小圆点的元素列表
    var ulIdxs = ulImgs.nextElementSibling;
    // 获取小圆点的元素列表
    var lis = ulIdxs.children;
    // 函数创建，从当前位置移动到任意一个范围内的位置
    function moveTo(to) {
        //如果用户没有传入要跳到第几张图，就默认跳到当前图的下张
        if (to == undefined) {
            to = i + 1;
        }
        //如果滚动从头开始，再重新加上transition
        if (i == 0) {
            if (to > i) {
                ulImgs.className = "transition";
            } else {
                ulImgs.className = "";
                //将ulImgs拉取到最左侧
                ulImgs.style.marginLeft = -li_width * li_count + "px";
                setTimeout(function () {
                    moveTo(li_count - 1);
                }, 100);
                return;
            }
        }
        //先将表示第几张图片的变量i变为目标位置
        i = to;
        //再用i计算ulimgs的marginLeft距离
        ulImgs.style.marginLeft = -i * li_width + "px";
        //先删除所有小圆点的class
        for (var li of lis) {
            li.className = "";
        }
        if (i == li_count) {
            i = 0;
            //当transition动画播放完之后，才
            setTimeout(function () {
                //清掉transition属性
                ulImgs.className = "";
                //将ulImgs拉回0位置
                ulImgs.style.marginLeft = 0;
            }, duration);
        }
        //再给当前位置的小圆点添加class active
        lis[i].className = "active";
    }

    // 获取左右点击按钮
    var btnLeft = document.getElementById("btnLeft");
    var btnRight = document.getElementById("btnRight");
    //用开关，控制，上次动画没有播放完，下次动画不能开始！
    var canClick = true;
    btnRight.onclick = function () {
        move(1);
    }

    function move(n) {
        if (canClick) { //只有可以单击时
            moveTo(i + n); //才调用真正移动ul的方法
            canClick = false;
            setTimeout(function () {
                canClick = true;
            }, duration + 100);
        }
    }
    btnLeft.onclick = function () {
        move(-1);
    }
    //每次轮播之间间隔事件是3秒
    var interval = 3000;
    var timer = setInterval(function () {
        moveTo();
    }, 3000);
    // 获取轮播图显示界面
    var lunbo = document.querySelector("#box>.lunbo>ul:nth-child(2)");
    // 单鼠标悬停的时候清除周期性定时器
    lunbo.onmouseover = function () {
        clearInterval(timer);
    }
    // 单鼠标离开的时候启动周期性定时器
    lunbo.onmouseout = function () {
        timer = setInterval(function () {
            moveTo();
        }, 3000);
    }
    ulIdxs.onclick = function (e) {
        if (canClick) {
            var li = e.target;
            if (li.nodeName == "LI") {
                if (li.className !== "active") {
                    for (var i = 0; i < lis.length; i++) {
                        if (lis[i] == li) {
                            break;
                        }
                    }
                    moveTo(i);
                    setTimeout(function () {
                        canClick = true;
                    }, duration);
                }
            }
        }
    }
})();


//轮播图中间的文字功能
(function(){
    var span=document.querySelector("#box .lunbo span:nth-child(4)");
    setInterval(function(){
        span.className="hidden";
    },2000);
    setInterval(function(){
        if(span.className="hidden"){
            span.className="";
        }
    },3000);
})();


// 限时促销的倒计时功能
(function(){
    setInterval(function(){
    // 获取现在的时间
    var nowTime=new Date();
    // 目标时间
    var gerTime=new Date("2022/5/20");
    // 相差的时间
    var toTime=gerTime-nowTime;
    // 相差的天数
    var d=Math.floor(toTime/1000/60/60/24);
    // 相差的小时
    var h=Math.floor(toTime/1000/60/60%24);
    // 相差的分钟  
    var m=Math.floor(toTime/1000/60%60);
    // 相差的秒数
    var s=Math.floor(toTime/1000%60);
    //将相差相应的时间赋值给页面中对应的元素内容
    document.querySelector("#box>.xianshibox>.xianshibox1>div>p>span:first-child").innerHTML=d;
    document.querySelector("#box>.xianshibox>.xianshibox1>div>p>span:nth-child(2)").innerHTML=h;
    document.querySelector("#box>.xianshibox>.xianshibox1>div>p>span:nth-child(3)").innerHTML=m;
    document.querySelector("#box>.xianshibox>.xianshibox1>div>p>span:last-child").innerHTML=s;
    document.querySelector("#box>.xianshibox>.xianshibox2>div>p>span:first-child").innerHTML=d;
    document.querySelector("#box>.xianshibox>.xianshibox2>div>p>span:nth-child(2)").innerHTML=h;
    document.querySelector("#box>.xianshibox>.xianshibox2>div>p>span:nth-child(3)").innerHTML=m;
    document.querySelector("#box>.xianshibox>.xianshibox2>div>p>span:last-child").innerHTML=s;
    },1000);
})();

