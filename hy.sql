SET NAMES UTF8;
DROP DATABASE IF EXISTS hy;
CREATE DATABASE hy CHARSET=UTF8;
USE hy;
-- 网站的基本信息
CREATE TABLE hy_site_info(
   site_name VARCHAR(16),
   login VARCHAR(64),
   copyright VARCHAR(64)
);
INSERT INTO hy_site_info VALUES("花语","images/logo.ong","
Copyright © 2010-2015花语文化传播有限公司 All rights reserved
");
-- 导航条目
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
/** 轮播图**/
CREATE TABLE hy_carousel_item(
   cid INT PRIMARY KEY AUTO_INCREMENT,
   pic VARCHAR(128),
   url VARCHAR(128),
   title VARCHAR(32)
);
INSERT INTO hy_carousel_item VALUES
(NULL,"images/LU.png","/m1.html","HUAYU"),
(NULL,"images/LU1.png","/m2.html","HUAYU");


/****今日上新商品****/
CREATE TABLE hy_index_product(
   pic INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(16),
   img VARCHAR(128),
   url VARCHAR(128),
   price DECIMAL(10,2)
);
INSERT INTO hy_index_product VALUES
(NULL,"植物花卉001","images/shanping001.jpg","individual.html?pic=1",5900),
(NULL,"植物花卉002","images/shanping002.jpg","individual.html?pic=2",6000),
(NULL,"植物花卉003","images/shanping003.jpg","individual.html?pic=3",5000),
(NULL,"植物花卉004","images/shanping004.jpg","individual.html?pic=4",4000);
/**家园装点**/
CREATE TABLE hy_index_product1(
    pic INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(16),
   img VARCHAR(128),
   url VARCHAR(128),
   price DECIMAL(10,2)
);
INSERT INTO hy_index_product1 VALUES
(NULL,"植物花卉008","images/shanping008.jpg","individual.html?pic=8",4500),
(NULL,"植物花卉006","images/shanping006.jpg","individual.html?pic=6",6500),
(NULL,"植物花卉004","images/shanping004.jpg","individual.html?pic=4",4000),
(NULL,"植物花卉002","images/shanping002.jpg","individual.html?pic=2",6000);

-- 商品列表
CREATE TABLE hy_product(
   pic INT PRIMARY KEY AUTO_INCREMENT,
   title  VARCHAR(16),
   img VARCHAR(128),
   url VARCHAR(128),
   price DECIMAL(10,2)
);
INSERT INTO hy_product VALUES
(NULL,"植物花卉001","images/shanping001.jpg",'individual.html?pic=1',5900),
(NULL,"植物花卉002","images/shanping002.jpg",'individual.html?pic=2',6000),
(NULL,"植物花卉003","images/shanping003.jpg",'individual.html?pic=3',5000),
(NULL,"植物花卉004","images/shanping004.jpg",'individual.html?pic=4',4000),
(NULL,"植物花卉005","images/shanping005.jpg",'individual.html?pic=5',5500),
(NULL,"植物花卉006","images/shanping006.jpg",'individual.html?pic=6',6500),
(NULL,"植物花卉007","images/shanping007.jpg",'individual.html?pic=7',7000),
(NULL,"植物花卉008","images/shanping008.jpg",'individual.html?pic=8',4500);

-- 用户表
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
(NULL,"dingding","123456","13632454900@163.com","13632454900","images/avar","杰克",1),
(NULL,"dongdong","654321","18816799432@163.com","18816799432","images/avar","杰瑞",1);
