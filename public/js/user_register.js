$(function(){
    // 光标进入用户输入框提示
     $("#uname").focus(function(){
        $("#mig").html("用户名要8~12位")
     })
     // 光标进入密码输入框提示
     $("#upwd").focus(function(){
        $("#mig1").html("密码要6~8位")
     })
      // 光标进入邮箱输入框提示
     $("#email").focus(function(){
        $("#mig3").html("请输入邮箱")
    }) 
    // 光标离开时验证用户名格式
     $("#uname").blur(function(){
        var reg=/^[0-9a-zA-Z]{8,12}$/ig;
        if(reg.test($("#uname").val())){
            $("#mig").html("<img src='../images/ok.png' alt='ok'>")
        }else{$("#mig").html("<img src='../images/err.png' alt='no'>请输入正确的用户名格式")} 
        if(!$("#uname").val()){
            $("#mig").html("<img src='../images/err.png' alt='no'>用户名不能为空")
        } 
     })
     // 光标离开时验证密码格式
     $("#upwd").blur(function(){
        var reg=/^[0-9a-zA-Z]{6,8}$/ig;
        if(reg.test($("#upwd").val())){
            $("#mig1").html("<img src='../images/ok.png' alt='ok'>")
        }else{$("#mig1").html("<img src='../images/err.png' alt='no'>请输入正确的密码格式")}
        if(!$("#upwd").val())
        $("#mig1").html("<img src='../images/err.png' alt='no'>密码不能为空")
     })
    // 光标离开时验证邮箱格式
     $("#email").blur(function(){
        var reg=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(.com|.cn)$/;
        if(reg.test($("#email").val())){
            $("#mig3").html("<img src='../images/ok.png' alt='ok'>")
        }else{$("#mig3").html("<img src='../images/err.png' alt='no'>请输入正确的邮箱格式")}
        if(!$("#email").val())
        $("#mig3").html("<img src='../images/err.png' alt='no'>邮箱不能为空")
     })

        // 发送ajax请求
    $("button").click(function(){
        $.ajax({
            url: "http://localhost:8080//user/v5/register",
            type:"post",
            dataType:"json", //自动将json转为js可用的对象
            success:function(result){//result就是服务器端返回的结果
                if(result==1){
                    alert("注册成功");
                    window.location.href="http://localhost:8080/index.html"
                }else{
                    alert("注册失败");
                }
            }
        })
    });
});







