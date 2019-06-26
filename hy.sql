SET NAMES UTF8;
DROP DATABASE IF EXISTS hy;
CREATE DATABASE hy CHARSET=UTF8;
USE hy;
#网站的基本信息
CREATE TABLE hy_site_info(
   site_name VARCHAR(16),
   login VARCHAR(64),
   copyright VARCHAR(64)
);
INSERT INTO hy_site_info VALUES("花语","images/logo.ong","
Copyright © 2010-2015花语文化传播有限公司 All rights reserved
");
#导航条目
CREATE TABLE hy_navbar_item(
   name VARCHAR(16),
   url VARCHAR(64),
   title VARCHAR(32)
);
INSERT INTO hy_navbar_item VALUES
("商城首页","/index.html","商城首页"),
("所有商品","/index.html","多样商品"),
("支付方式","/index.html","多手段支付"),
("关于花语","/index.html","联系我们"),
("线下门店","/index.html","点击获取");
#轮播图
CREATE TABLE hy_carousel_item(
   cid INT PRIMARY KEY AUTO_INCREMENT,
   pic VARCHAR(128),
   url VARCHAR(128),
   title VARCHAR(32)
);
INSERT INTO hy_carousel_item VALUES
(NULL,"images/LU.png","/m1.html","HUAYU"),
(NULL,"images/LU1.png","/m2.html","HUAYU");
#商品列表
CREATE TABLE hy_new_product(
   pic INT NOT NULL,
   title  VARCHAR(16),
   img VARCHAR(128),
   price DECIMAL(10,2)
);
INSERT INTO hy_new_product VALUES
(1,"植物花卉001","images/SP.png",5900),
(2,"植物花卉004","images/SP1.png",6000),
(3,"植物花卉006","images/SP2.png",5000),
(4,"植物花卉008","images/SP3.png",4000);


#用户表
CREATE TABLE hy_user(
   uid INT PRIMARY KEY AUTO_INCREMENT,
   uname  VARCHAR(32),
   upwd   VARCHAR(32),
   email   VARCHAR(64),
   phone    VARCHAR(11),
   avatar   VARCHAR(128), 
   user_name  VARCHAR(32),
   gender   INT
);
INSERT INTO hy_user VALUES
(NULL,"jieke","123456","13632454900@163.com","13632454900","images/avar","杰克",1),
(NULL,"jierui","654321","18816799432@163.com","18816799432","images/avar","杰瑞",1);
