const express=require("express");
const userRouter=require("./router/user");
const indexRouter=require("./router/index");
const individualRouter=require("./router/individual");
const bodyParser=require("body-parser");
const cors=require("cors");
var app=express();
app.listen(8080);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(cors({
	origin:["http://127.0.0.1:8080","http://localhost:8080"]//不能用*
}));
app.use("/user",userRouter);
app.use("/index",indexRouter);
app.use("/individual",individualRouter);
