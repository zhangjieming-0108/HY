function postRegister(){
    var $gender="";
    if(sex.checked){
        $gender="1";
    }else{
        $gender="0";
    }
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            if(result==1){
                alert("注册成功");
            }else{
                alert("注册失败");
            }
        }				
    }
    xhr.open("post","/user/v5/register",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var formdata="uname="+$uname.value+"&upwd="+$upwd.value+"&email="+$email.value+"&phone="+phone.value+"&avatar="+file.value+"&user_name="+user_name.value+"&gender="+$gender;
    xhr.send(formdata);
}
//输入框的提示 
function mig_name(){
    mig.innerHTML="用户名要8~12位";
}
 function mig_upwd(){
    
    mig1.innerHTML="密码要6~8位";
    console.log(123);
 }
 function mig_email(){
    mig3.innerHTML="请输入邮箱";
 }
//  验证用户输入框的内容
 function uname(){
     var reg=/^.{8,12}$/;
    if(!$uname.value){
    mig.innerHTML="用户名不能为空";
     }else if(reg.test($uname.value)!=true){
    mig.innerHTML="输入格式不正确";
     }else{
        mig.innerHTML=`<h6 style="color:green">√</h6>`
        }
 }
 //  验证验证密码输入框的内容
 function upwd(){
    var reg=/^.{6,8}$/;
    if(!$upwd.value){
        mig1.innerHTML="密码不能为空";
    }else if(reg.test($upwd.value)!=true){
        mig1.innerHTML="输入格式不正确";
    }else{
        mig1.innerHTML=`<h6 style="color:green">√</h6>`
    }
 }
// 验证邮箱输入框的内容
 function email(){
    var reg=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(.com|.cn)$/;
    if(!$email.value){
        mig3.innerHTML="邮箱不能为空";
    }else if(reg.test($email.value)!=true){
        mig3.innerHTML="输入格式不正确";sss
    }else{
        mig3.innerHTML=`<h6 style="color:green">√</h6>`
    }
 }