function show(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
          if(xhr.readyState==4 && xhr.status==200){
              var result=xhr.responseText;
              if(result==1){
                  alert("登陆成功");
                  return;
              }
              if(result==0){
                  alert("用户名或密码错误");
                  return;
              }
          }	
    }
    xhr.open("get","/user/v5/login/"+mg.value+"-"+mg1.value,true);
    xhr.send();
 }
 
 function mig_name(){
      mig.innerHTML="用户名要8~12位";
 }
   function mig_upwd(){
      mig1.innerHTML="密码要6~8位";
   }
   function uname(){
      if(!mg.value)
      mig.innerHTML="用户名不能为空";
   }
   function upwd(){
      if(!mg1.value)
          mig1.innerHTML="密码不能为空";
   }