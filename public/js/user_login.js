$(function(){
    // 光标进入用户输入框提示
    $("#mg").focus(function(){
        $("#mig").html("用户名要8~12位")
    })
    // 光标进入密码输入框提示
     $("#mg1").focus(function(){
        $("#mig1").html("密码要6~8位")
     })
     // 光标离开时验证用户名格式
     $("#mg").blur(function(){
        var reg=/^[0-9a-zA-Z]{8,12}$/ig;
        if(reg.test($("#mg").val())){
            $("#mig").html("<img src='../images/ok.png' alt='ok'>")
        }else{$("#mig").html("<img src='../images/err.png' alt='no'>请输入正确的用户名格式")} 
        if(!$("#mg").val()){
            $("#mig").html("<img src='../images/err.png' alt='no'>用户名不能为空")
        } 
     })
     // 光标离开时验证密码格式
     $("#mg1").blur(function(){
        var reg=/^[0-9a-zA-Z]{6,8}$/ig;
        if(reg.test($("#mg1").val())){
            $("#mig1").html("<img src='../images/ok.png' alt='ok'>")
        }else{$("#mig1").html("<img src='../images/err.png' alt='no'>请输入正确的密码格式")}
        if(!$("#mg1").val())
        $("#mig1").html("<img src='../images/err.png' alt='no'>密码不能为空")
     })
      // 发送ajax请求
    $("button").click(function(){
        $.ajax({
            url: `http://localhost:8080/user/v5/login/${mg.value}-${mg1.value}`,
		    type:"get",
		    dataType:"json", //自动将json转为js可用的对象
		    success:function(result){//result就是服务器端返回的结果
                if(result==1){
                    alert("登陆成功");
                    window.location.href="http://localhost:8080/index.html"
                }else{
                    alert("登陆失败");
                }
		    }

        });
    });
})
