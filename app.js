const express=require("express");
const userRouter=require("./router/user");
const indexRouter=require("./router/index");
const individualRouter=require("./router/individual");
const bodyParser=require("body-parser");
var app=express();
app.listen(8080);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use("/user",userRouter);
app.use("/index",indexRouter);
app.use("/individual",individualRouter);
