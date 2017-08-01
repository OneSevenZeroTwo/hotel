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
	http.get('http://m.elong.com/hotel/api/gethotelcitysbyletter/?letter=' + letter, function(content) {
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

app.get('/indexFilter', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	var cityId = req.query.cityId
	//服务器代理
	http.get('http://m.elong.com/clockhotel/' + cityId + '/nlist/', function(content) {
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
			var douhaoReg = /%2C/g
			var maohaoReg = /%3A/g
			var xieganReg = /%2/g
			result = decodeURI(result).replace(douhaoReg, ",")
			result = result.replace(maohaoReg, ":")
			result = result.replace(xieganReg, "/")
			//提取数据
			var Filter2 = /\[\{[\w\W]+\]/

			var regCity = /city:'\{\"cityId\"[\w\W]*?\}/
			var regFilterList1 = /filterList\:\'\[\{[\w\W]+searchList/
			var regSearchList = /searchList:'\[\{[\W\w]+areaList/
			var regAreaList = /areaList\:\'\[\{[\W\w]+hotCityList/
			var reghotCityList = /hotCityList\:\'[\w\W]+starList/

			console.log(result.match(regFilterList1))
			//处理数据，写进data,通过JSON.parse转换为数组或对象，在前端数据才能返回数组和对象(即前端不需要JSON.parse转换)。
			data.city = result.match(regCity) ? JSON.parse(result.match(regCity)[0].slice(6)) : []
			data.FilterList = result.match(regFilterList1) ? JSON.parse(result.match(regFilterList1)[0].match(Filter2)[0]) : []

			data.searchList = result.match(regSearchList) ? JSON.parse(result.match(regSearchList)[0].match(Filter2)[0]) : []

			data.areaList = result.match(regAreaList) ? JSON.parse(result.match(regAreaList)[0].match(Filter2)[0]) : []
			data.hotCityList = result.match(reghotCityList) ? JSON.parse(result.match(reghotCityList)[0].match(Filter2)[0]) : []

			//返回前端
			res.send(data)

		})
	})

})
//list部分..............................................lianglixiong

app.get('/list', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	var page = req.query.page;
	console.log(page)
	//服务器代理
	http.get('http://m.elong.com/hotel/api/list/?indate=2017-07-28&pageindex=' + page + '&city=2001&esdnum=6782671', function(content) {
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
// http://m.elong.com/clockhotel/api/list?indate=2017-07-30&lowprice=0&highprice=50&city=2001&pageindex=0
//价格选择
app.get('price', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	var page = req.query.page;
	console.log(page)
	//服务器代理
	http.get('http://m.elong.com/clockhotel/api/list?indate=2017-07-30&lowprice=0&highprice=50&city=2001&pageindex=0', function(content) {
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
//钟点房路由中间内容
app.get('/clockhotelcontent', function(req, res) {
	console.log(111111)
	res.append('Access-Control-Allow-Origin', '*');
	var cityId = req.query.cityId;
	var pageindex = req.query.page;
	var sortmethod = req.query.sortmethod
	var sortdirection = req.query.sortdirection

	// 筛选组件的参数
	var hotelbrandids = req.query.hotelbrandids? req.query.hotelbrandids:''
	var personofroom = req.query.personofroom? req.query.personofroom:''
	var facilityIds = req.query.facilityIds? req.query.facilityIds:''
	var themeIds = req.query.themeIds? req.query.themeIds:''
	var paytype = req.query.paytype? req.query.paytype:''
	var saletype = req.query.saletype? req.query.saletype:''

	// 是否通过筛选获得
	var datafrom = req.query.datafrom

	// 价格
	var lowprice = req.query.lowprice
	var highprice = req.query.highprice

	// 时间
	var outdate = req.query.outdate
	var indate = req.query.indate
	//服务器代理
	console.log(cityId)
	console.log(pageindex)
	console.log(sortmethod)
	console.log(sortdirection)

	console.log(hotelbrandids)
	console.log(personofroom)
	console.log(facilityIds)
	console.log(themeIds)
	console.log(paytype)
	console.log(saletype)

	console.log(lowprice)
	console.log(highprice)

	console.log(outdate)
	console.log(indate)

	http.get(`http://m.elong.com/clockhotel/api/list/?indate=${indate}&sourceType=1&datafrom=filter&pageindex=${pageindex}&city=${cityId}&sortmethod=${sortmethod}&sortdirection=${sortdirection}&hotelbrandids=${hotelbrandids}&personofroom=${personofroom}&facilityIds=${facilityIds}&themeIds=${themeIds}&paytype=${paytype}&saletype=${saletype}`, function(content){
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
	http.get('http://m.elong.com/clockhotel/' + cityId + '/nlist/', function(content) {
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
			var douhaoReg = /%2C/g
			var maohaoReg = /%3A/g
			var xieganReg = /%2/g
			result = decodeURI(result).replace(douhaoReg, ",")
			result = result.replace(maohaoReg, ":")
			result = result.replace(xieganReg, "/")
			//提取数据
			var Filter2 = /\[\{[\w\W]+\]/

			var regCity = /city:'\{\"cityId\"[\w\W]*?\}/
			var regFilterList1 = /filterList\:\'\[\{[\w\W]+searchList/
			var regSearchList = /searchList:'\[\{[\W\w]+areaList/
			var regAreaList = /areaList\:\'\[\{[\W\w]+hotCityList/
			var reghotCityList = /hotCityList\:\'[\w\W]+starList/

			//处理数据，写进data,通过JSON.parse转换为数组或对象，在前端数据才能返回数组和对象(即前端不需要JSON.parse转换)。
			data.city = result.match(regCity) ? JSON.parse(result.match(regCity)[0].slice(6)) : []
			data.FilterList = result.match(regFilterList1) ? JSON.parse(result.match(regFilterList1)[0].match(Filter2)[0]) : []

			data.searchList = result.match(regSearchList) ? JSON.parse(result.match(regSearchList)[0].match(Filter2)[0]) : []

			data.areaList = result.match(regAreaList) ? JSON.parse(result.match(regAreaList)[0].match(Filter2)[0]) : []
			data.hotCityList = result.match(reghotCityList) ? JSON.parse(result.match(reghotCityList)[0].match(Filter2)[0]) : []

			//返回前端
			res.send(data)

		})
	})

})

// // http://m.elong.com/hotel/api/getlistfilter?cityid=2001
// app.get('/abc', function(req, res) {
// 	res.append('Access-Control-Allow-Origin', '*');
// 	console.log('ABC')
// 	//服务器代理
// 	http.get('http://m.elong.com/hotel/api/getlistfilter?_rt=1501390983064&cityid=2001', function(content) {
// 		var str = '';
// 		//把流的形式转化为字符串
// 		content.on('data', function(chunk) {
// 			str += chunk
// 		})
// 		content.on('end', function() {
// 			//		数据返回前端
// 		console.log(str)
// 			res.send(str)

// 		})
// 	})

// })

//detail部分..............................................tangqiuping
//轮播图
app.get('/getInfo', function(req, res) {
	//	console.log('getInfo')
	res.append('Access-Control-Allow-Origin', '*');
	var hotelId = req.query.hotelId
	//服务器代理
	http.get('http://m.elong.com/clockhotel/api/otherdetail/?hotelid=' + hotelId, function(content) {
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

//详情页   房间类型
app.get('/roomType', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	//	console.log(33333)

})

app.get('/getCommon', function(req, res) {
	//	console.log('getInfo')
	res.append('Access-Control-Allow-Origin', '*');
	var hotelId = req.query.hotelId
	//服务器代理
	http.get('http://m.elong.com/clockhotel/api/otherdetail/?hotelid=' + hotelId, function(content) {
		//		console.log(content)
		var str = '';
		//把流的形式转化为字符串
		content.on('data', function(chunk) {
			str += chunk
		})
		content.on('end', function() {
			//		数据返回前端
			console.log(str)
			res.send(str)
		})
	})

})

//buyCar部分..............................................zhangjunhua
app.get("/buyCar", function(req, res) {

	var connection = createConnection();
	connection.connect();
	res.append('Access-Control-Allow-Origin', '*');
	var order = req.query
	//	console.log(order)
	var orderList = JSON.parse(order.orderList)
	var person = JSON.parse(order.person)

	connection.query(`
		INSERT into orders (orderCode,hotelName,roomType,price,total,phoneArea,person,phone,roomNum,starData,endData,saveUntil,username,img)values('${person.orderCode}','${orderList.hotelName}','${orderList.roomInfoName}','${orderList.price}','${order.totalMoney}','${person.phonArea}','${person.name}','${person.phone}','${order.roomnum}','${orderList.starData}','${orderList.endData}','${person.saveUntil}','${person.username}','${orderList.imgUrl}')
		`, function(err, results, fields) {
		res.send("插入成功");
		connection.end();
	})
})

//shoppingList部分..............................................tangqiuping
app.get("/shoppingList", function(req, res) {

	var connection = createConnection();
	connection.connect();
	res.append('Access-Control-Allow-Origin', '*');
	var username = req.query.username

	connection.query(`
		SELECT * from orders where username = '${username}'
		`, function(err, results, fields) {

		//			console.log('The solution is: ', results);
		var obj = results

		res.send(obj);
		connection.end();
	})
})

app.get("/order", function(req, res) {
	var connection = createConnection();
	connection.connect();
	res.append('Access-Control-Allow-Origin', '*');
	var orderCode = req.query.orderCode
	connection.query(`
		SELECT * from orders where orderCode = '${orderCode}'
		`, function(err, results, fields) {

		console.log('The solution is: ', results);
		var obj = results

		res.send(obj);
		connection.end();
	})
})

app.get("/del", function(req, res) {
	var connection = createConnection();
	connection.connect();
	res.append('Access-Control-Allow-Origin', '*');
	var orderId = req.query.orderId
	console.log(orderId)
	connection.query(`
		DELETE from orders where orderCode = '${orderId}'
		`, function(err, results, fields) {

		//			console.log('The solution is: ', results);
		var obj = results

		res.send(obj);
		connection.end();
	})
})

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
	console.log(username, password)
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