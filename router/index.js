const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  // 创建两个空对象，用来接收从数据库获取的值
  var output={fresh:{},decoration:{}};
  //创建获取数据库今日新品的sql语句
  var sql="SELECT * FROM hy_index_product";
  pool.query(sql,[],(err,result)=>{
    if(err){
      res.send(err)
    }else{
      // 将获取到的数据装进创建的空对象中
      output.fresh=result;
    }
  })
  //创建获取数据库家园装点的sql语句
  var sql1="SELECT * FROM hy_index_product1";
  pool.query(sql1,[],(err,result)=>{
    if(err){
      res.send(err)
    }else{
      // 将获取到的数据装进创建的空对象中
      output.decoration=result;
      // 响应从数据库获取的所有数据
      res.send(output);
    }
  })
})

module.exports=router;