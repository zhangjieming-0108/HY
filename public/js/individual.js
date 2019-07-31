 // 按钮添加商品数量功能
 $(function(){
     // 遍历每个按钮元素
    for(var input of $(":input")){
        // 绑定事件
        input.click(function(){
            var input=this;
            // 如果添加按钮是+就自增，否则如果商品数量在大于1的情况下自减
            if(input.val()=="+"){
                $(":text").val()++;
            }else if(input.val()>1){
                $(":text").val()--;
            }
        })
    }
});



// 从数据库获取商品详情信息
$(function(){
    var pic=location.search.split("=")[1];
    //只有pic是有值时，才执行查找操作
    if(pic){
      $.ajax({
        url:"http://localhost:8080/individual",
        type:"get",
        data:{ pic },
        dataType:"json",
        success:function(result){
            console.log(result);
           var [{title, img, price, url, pic}]=result;
            var  html=`<img src="${img}" alt="图片已损坏">
               <img src="${img}" alt="图片已损坏">`;
               document.getElementById("con").innerHTML=html;
            var html1=`<h3>${title}</h3>
            <h2 >¥${price.toFixed(2)}</h2>
            <p>商品编号： 004007</p>
            <p>
               <span>分类：</span>
               <a href="product.html">所有商品</a>
            </p>
            <span class="shop">
                 <button>加入购物车</button>
                 <span class="add">
                     <input type="button" value="－">
                     <input type="text"value="1">
                     <input type="button" value="+">
                 </span>
           </span>`;
           document.getElementById("sum").innerHTML=html1;
        }
      })
    }
});