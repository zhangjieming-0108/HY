$(function(){
    //请求页头.html片段
    $.ajax({
      url:"footer.html",
      type:"get",
      success:function(result){
        //用片段创建新的<header>元素，替换现有<header id="header">元素
        $(result).replaceAll("#footer");
        //并自动添加header.css到页面
        $(`<link rel="stylesheet" href="css/footer.css">`).appendTo("head");
      }
    })
  });