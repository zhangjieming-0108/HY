const express=require("express")
const router=express.Router();
const pool=require("../pool")
router.get("/",(req,res)=>{
  var pic=req.query.pic;
  if(pic!==undefined){
    var sql1=`select * from hy_product where pic=?`;
    pool.query(sql1,[pic],(err,result)=>{
      if(err) console.log(err);
       res.send(result);
    })
  }
})

module.exports=router;