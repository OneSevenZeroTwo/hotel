
//框架
var express = require('express');
var app = express();
var http = require('http')
//链接数据库模块
var mysql = require("mysql");
//连接服务器配置.......................................................................
function createConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'lefengwang'
	});
	return connection
}

//服务器代理模版
app.get('/test', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//服务器代理
	http.get('http://m.elong.com/hotel/api/gethotelcitysbyletter/?letter=J&_rt=1500966828847', function(content) {
		var str = '';
		//把流的形式转化为字符串
		content.on('data', function(chunk) {
			str += chunk
		})
		content.on('end', function() {
	//		数据返回前端
			res.send(str)

		})
	})

})

//index部分...............................................chenjiangchuan

//轮播图
app.get('/slideshow', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//服务器代理
	http.get('http://m.elong.com/hotel/api/gethotelbanners/?_rt=1500963243924', function(content) {
		var str = '';
		//把流的形式转化为字符串
		content.on('data', function(chunk) {
			str += chunk
		})
		content.on('end', function() {
	//		数据返回前端
			res.send(str)

		})
	})

})


//list部分..............................................lianglixiong



//detail部分..............................................tangqiuping




//buyCar部分..............................................zhangjunhua



//登录注册部分..............................................zhangjunhua


















//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

