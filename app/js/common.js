export default {

	/**
	 * [生成随机颜色]
	 * @return {String} [(255,255,0)]
	 */
	randomColor() {
		var r, g, b;
		r = randomNum(0, 255);
		g = randomNum(0, 255);
		b = randomNum(0, 255);
		var rgb = "rgb(" + r + ',' + g + ',' + b + ')';
		return rgb;
	},

	/**
	 * [生成随机整数]
	 * @param  {[Num]} min [最小值]
	 * @param  {Num} max [最大值]
	 * @return {Num]}     [10000]
	 */
	randomNum(min, max) {
		var num = Math.floor(Math.random() * (max - min + 1)) + min;
		return num;
	},

	// addEvent(box,'click',function(){},true)

	//cookie操作
	//写入，读取，删除

	/**
	 * [写入和修改（同名修改内容）cookie]
	 * @param  {[String]} name    [cookie名]
	 * @param  {[String]} value   [cookie值]
	 * @param  {[Date]} expires [cookie过期时间]
	 * @param  {[String]} path    [cookie保存路径]
	 */
	setCookie(name, value, expires, path) {
		var str_cookie = name + '=' + value;

		if(expires) {
			str_cookie += ';expires=' + expires;
		}

		if(path) {
			str_cookie += ';path=' + path;
		}

		document.cookie = str_cookie;
	},

	/**
	 * [删除cookie]
	 * @param  {[string]} name [要删除的cookie的name]
	 * @param  {[string]} path [要删除‘/’目录下的cookie就就上‘/’，否则删除的是自己的目录下的cookie]
	 */
	removeCookie(name, path) {
		var now = new Date();
		now.setDate(now.getDate() - 5);
		if(path) {
			setCookie(name, null, now, path)
		} else if(!path) {
			setCookie(name, null, now)
		}

	},

	/**
	 * [获取cookie值]
	 * @param  {[String]} name [需要获取的cookie名]
	 * @return {[String]}      [返回对应cookie的值]
	 */
	getCookie(name) {
		var cookies = document.cookie;
		if(!cookies) {
			return '';
		}

		var res = '';
		var arr = cookies.split('; ');
		arr.forEach(function(item) {
			var temp = item.split('=');
			if(temp[0] === name) {
				res = temp[1];
			}
		});

		return res;
	},

}