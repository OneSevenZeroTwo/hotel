//框架
var express = require('express');
var app = express();
var http = require('http')

//链接数据库模块
var mysql = require("mysql");
var cheerio = require('cheerio')
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
//	tag
	//http://m.elong.com/minsu/suggest/searchsuggest/?req=%7B%22CityId%22%3A%2267157%22%7D
	
	//position
//	http://m.elong.com/minsu/house/getlocationfilterlist/?req=%7B%22CityInfo%22%3A%7B%22ItemId%22%3A%2267157%22%2C%22Name%22%3A%22%E5%B9%BF%E5%B7%9E%E5%B8%82%22%7D%7D
	//city
	http.get('http://m.elong.com/minsu/house/getlocationfilterlist/?req=%7B%22CityInfo%22%3A%7B%22ItemId%22%3A%2267157%22%2C%22Name%22%3A%22%E5%B9%BF%E5%B7%9E%E5%B8%82%22%7D%7D', function(content) {
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
//left侧边栏
app.get('/leftfence', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//服务器代理
	http.get('http://m.elong.com/hotel/api/gethomehotcitys/', function(content) {
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
//字母侧边栏
app.get('/letterfence', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//服务器代理
	console.log(req.query.letter)
	var letter = req.query.letter
	http.get('http://m.elong.com/hotel/api/gethotelcitysbyletter/?letter='+letter, function(content) {
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
//首页列表
app.get('/indexlist', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//服务器代理
	http.get('http://m.elong.com/clockhotel/api/list/', function(content) {
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

app.get('/listFilter', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	var cityId = req.query.cityId
	//服务器代理
	http.get('http://m.elong.com/clockhotel/'+cityId+'/nlist/', function(content) {
		var str = '';
		//把流的形式转化为字符串
		content.on('data', function(chunk) {
			str += chunk
		})
		content.on('end', function() {
			//		数据返回前端
			var $ = cheerio.load(str)
			var arr = $('script')
//			用于接受正则匹配的数据
			var data = {};
			
			//根据命令行获取数据，缩小范围，获取第二个script标签
			var result = arr[1].children[0].data
			//转码成中文，替换转换失败的符号
			var douhaoReg=/%2C/g
			var maohaoReg = /%3A/g
			var xieganReg = /%2/g
			result = decodeURI(result).replace(douhaoReg,",")
			result = result.replace(maohaoReg,":")
			result = result.replace(xieganReg,"/")
			//提取数据
			var Filter2=/\[\{[\w\W]+\]/
			
			var regCity =/city:'\{\"cityId\"[\w\W]*?\}/			
			var regFilterList1=/filterList\:\'\[\{[\w\W]+searchList/			
			var regSearchList =/searchList:'\[\{[\W\w]+areaList/
			var regAreaList = /areaList\:\'\[\{[\W\w]+hotCityList/
			var reghotCityList =/hotCityList\:\'[\w\W]+starList/
			
			//处理数据，写进data
			data.city=result.match(regCity)[0].slice(6)
			data.FilterList=result.match(regFilterList1)[0].match(Filter2)[0]
			//有问题
			data.searchList=result.match(regSearchList)[0].match(Filter2)[0]	
				console.log(data.searchList)		
			data.areaList=result.match(regAreaList)[0].match(Filter2)[0]
			data.hotCityList=result.match(reghotCityList)[0].match(Filter2)[0]

			//返回前端
			res.send(JSON.stringify(data))

		})
	})

})


//detail部分..............................................tangqiuping
//轮播图
app.get('/getInfo', function(req, res) {
	console.log('getInfo')
	res.append('Access-Control-Allow-Origin', '*');
	//	console.log(1111)
	//服务器代理
	http.get('http://m.elong.com/clockhotel/api/otherdetail/?hotelid=90702017', function(content) {
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



//详情页   房间类型
app.get('/roomType', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
		console.log(33333)
	

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