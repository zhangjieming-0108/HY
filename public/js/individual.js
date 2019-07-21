 // 按钮添加商品数量功能
 (function(){
    // 找到添加按钮元素
    var inputs=document.querySelectorAll("#box>.individual_sec>.individual_sec_l>.sum>.shop>.add>input");
    // 遍历每个按钮元素
    for(var input of inputs){
        // 绑定事件
        input.onclick=function(){
            var input=this;
            // 找到修改的元素
            var midInput=input.parentNode.children[1];
            // 如果添加按钮是+就自增，否则如果商品数量在大于1的情况下自减
            if(input.value=="+"){
                midInput.value++;
            }else if(midInput.value>1){
                midInput.value--;
            }
        }
    }
})();