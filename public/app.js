const express = require('express');
const path = require('path');
const request = require('request');
// 配置静态文件服务中间件
// server地址
const app = express();
let serverUrl='http://m.elong.com/hotel/api/gethotelbanners/?_rt=1500963243924';
app.use(express.static(path.join(__dirname, './../storeOS')));
app.use('/slideshow', function(req, res) {
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
	res.append("Access-Control-Allow-Origin", "*")
  
  console.log(111)
});



let aaa='http://m.elong.com/hotel/api/gethotelcitysbyletter/?letter=J&_rt=1500966828847';
app.use(express.static(path.join(__dirname, './../storeOS')));
app.use('/b', function(req, res) {
  let url = aaa + req.url;
  req.pipe(request(url)).pipe(res);
	res.append("Access-Control-Allow-Origin", "*")
  
  console.log(222)
});


app.listen(3000, function () {
  console.log('server is running at port 3000');
});