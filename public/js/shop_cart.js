// 购物车功能
(function(){
    // 先找到触发事件的元素
    var shop=document.getElementsByClassName("shop")[0];
    var inputs=shop.querySelectorAll(".shop_l .content .add input");
    // 遍历每一个触发事件的元素
     for(var input of inputs){
        //  绑定触发事件
         input.onclick=function(){
             var input=this;
             var span=input.parentNode.children[1];
             var shuzi=parseInt(span.value);
             if(input.value=="+"){
                 shuzi++;
            }else if(shuzi>1){
                shuzi--;
            }
            // 将修改后的值放回到再span中，也就是添加的数量
            span.value=shuzi;
            // 先找到单价
            var content=input.parentNode.parentNode;
            var price=parseFloat(content.children[1].innerHTML.slice(1));
            // 计算合计:单价*数量
            var subtotal=price*shuzi;
            // 将合计放到content的最后一个孩子中
            content.children[3].innerHTML=`￥${subtotal.toFixed(2)}`;
            // 购物车小计和订单统计
            var h4s=shop.querySelectorAll(".shop_l .content h4:last-child");
            // 找出购物车小计的元素
            var ul=shop.querySelector(".shop_r ul:nth-child(2)");
            var collect=ul.querySelector("li:last-child");
            //先定义变量total=0,准备接汇总的总价
            var total=0;
            for(var h4  of h4s){
                total+=parseFloat(h4.innerHTML.slice(1));
            }
            //将total赋值给collect的内容
            collect.innerHTML=`￥${total.toFixed(2)}`;
            // 找出订单统计的元素
            var uls=shop.querySelector(".shop_r ul:nth-child(4)");
            var collects=uls.querySelector("li:last-child");
            //将collect赋值给collects的内容
            collects.innerHTML=collect.innerHTML;
            
         }
     }
})();