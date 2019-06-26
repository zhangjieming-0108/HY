const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//登录
router.get("/v5/login/:uname-:upwd",function(req,res){
	var $uname=req.params.uname;
	var $upwd=req.params.upwd;
	var sql="SELECT uid FROM hy_user WHERE uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],function(err,result){
	
	if(result.length>0){
	res.send("1");
	}else{res.send("0")}
  });
});
//注册
router.post("/v5/register",function(req,res){
	var obj=req.body;
	var sql="INSERT INTO hy_user SET ?";
	pool.query(sql,[obj],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else("0");
	});
});
//查询用户列表
router.get("/v5/userlist/",function(req,res){
	var obj=req.params.uid;
	var sql="select * from hy_user";
	pool.query(sql,function(err,result){
		res.send(result);
	});
})
//删除用户
router.delete("/v5/deluser/:uid",function(req,res){
	var $uid=req.params.uid;
	var sql="delete from hy_user where uid=?";
	pool.query(sql,[$uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//id查询用户信息
router.get("/v5/query/:uid",function(req,res){
	var $uid=req.params.uid;
	var sql="select * from hy_user where uid=?";
	pool.query(sql,[$uid],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
		res.send("0");
		}
	});
});
//修改用户信息
router.put("/v5/update",function(req,res){
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uid){res.send("uid不能为空");return;}
	if(!$uname){res.send("uname不能为空");return;}
	if(!$email){res.send("email不能为空");return;}
	if(!$phone){res.send("phone不能为空");return;}
	if(!$user_name){res.send("user_name不能为空");return;}
	if(!$gender){res.send("gender不能为空");return;}
	var sql="update hy_user set uname=?,email=?,phone=?,user_name=?,gender=? where uid=?";
	pool.query(sql,[$uname,$email,$phone,$user_name,$gender,$uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
		res.send("1");
		}else{
		res.send("0");
		}
	});
});
module.exports=router;