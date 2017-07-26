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
		database: 'hotel'
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
//
app.get('/list', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//服务器代理
	http.get('http://m.elong.com/hotel/api/list?_rt=1500994125828&indate=2017-07-25&outdate=2017-07-26&city=2001&pageindex=0&actionName=h5%3D%3Ebrand%3D%3EgetHotelList&esdnum=8957411', function(content) {
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

//detail部分..............................................tangqiuping
//详情页内容
app.get('/detail', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//	console.log(1111)
	//服务器代理
	http.get('http://m.elong.com/hotel/api/otherdetail/?cityId=0101&hotelid=00101543&lng=116.437257528000003503620973788201808929443359375&_rt=1500975501941&lat=39.9589810220000032359166652895510196685791015625', function(content) {
		//		console.log(content)
		var str = '';
		//把流的形式转化为字符串
		content.on('data', function(chunk) {
			str += chunk
		})
		content.on('end', function() {
			//		数据返回前端
			//			console.log(str)
			res.send(str)
		})
	})

})

//buyCar部分..............................................zhangjunhua

//登录注册部分..............................................zhangjunhua
//注册
app.get("/register", function(req, res) {
	console.log(11111)
	res.append('Access-Control-Allow-Origin', '*');
	var connection = createConnection();
	connection.connect();
	var username = req.query.username;
	var password = req.query.password;
	//先查找手机似乎否已被注册
	connection.query(`SELECT username from register where username = '${username}'`, function(err, data) {
		//数据库中查不到手机号会返回空的数组
		if(data.length == 0) {
			connection.query(`INSERT into register (username,password)values('${username}','${password}')`, function(err, data) {

				res.send('注册成功')
			})
			//关闭数据库要写进判断里面
			connection.end();
		} else {
			res.send('该手机已注册')
			//关闭数据库要写进判断里面
			connection.end();
		}

	})
})

//登录
app.get("/login", function(req, res) {
	console.log('登录')
	res.append('Access-Control-Allow-Origin', '*');
	var connection = createConnection();
	connection.connect();
	var username = req.query.username;
	var password = req.query.password;
	console.log(username,password)
	connection.query(`SELECT * from register where username = '${username}' and password='${password}'`, function(err, data) {
		if(data.length == 0) {
			//数据库中没有匹配到帐号密码
			res.end('手机没注册或密码错误')
			connection.end();
		} else {

			res.end('登录成功')
			connection.end();
		}
	})
})

//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})