import "../public/css/animate.css"

//引入js文件，jquery,Vue全家桶...............................................
import Vue from "vue"
window.Vue = Vue
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
//axios的ajax封装库
import axios from "axios";
import "weui"
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
//可以引入jquery，但是要把它设置为全局变量。
import $ from "jquery";
window.$ = window.jQuery = $

import com from "./js/common.js"

window.com = com

//使用..................................................................
//通过 Vue.use()明确地安装路由功能

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper)
//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;
window.axios = axios;
//如果使用museui，安装或如下引入。新建了muse文件和路由测试。在index中引入2条字体css
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)

//router路由部分.........................................................

//引入定义好的路由。(所有级别的路由)
import detail from "./components/routes/detail.vue"
import xregister from "./components/routes/register.vue"
import xlogin from "./components/routes/login.vue"
import xbuyCar from "./components/routes/buyCar.vue"
import shoppingList from "./components/routes/shoppingList.vue"
import xmySelf from "./components/routes/mySelf.vue"
//首页路由 chuanye
import home from "./components/home.vue"
//列表页路由
import hotlist from "./components/list/router/hotlist.vue"
// 列表页钟点房路由
import clockhotel from "./components/list/router/clockhotel.vue"
// 攻略页路由
import strategy from "./components/strategy/strategy.vue"
import goOut from "./components/strategy/goOut.vue"
import daRen from "./components/strategy/daRen.vue"
import surround from "./components/strategy/surround.vue"
import month8 from "./components/strategy/month8.vue"
import month9 from "./components/strategy/month9.vue"
import month10 from "./components/strategy/month10.vue"


//把定义好的路由组件引进来放到component中，path为进入路由的名字，然后等待路由实例化(new VueRouter)。
//children属性接受一个数组，里面为2级路由。注意父组件中要有<router-view></router-view>
var routes = [{
		//路由名
		path: '/index',
		//上面定义好的路由扔进来
		component: home,
	}, {
		//路由名
		path: '/detail/:id',
		//上面定义好的路由扔进来
		component: detail
	}, {
		//路由名
		path: '/register',
		//上面定义好的路由扔进来
		component: xregister
	}, {
		//路由名
		path: '/login',
		//上面定义好的路由扔进来
		component: xlogin
	}, {
		//路由名
		path: '/buyCar',
		//上面定义好的路由扔进来
		component: xbuyCar
	}, , {
		//显示所有订单的页面
		path: '/shoppingList',
		//上面定义好的路由扔进来
		component: shoppingList
	}, {
		//路由名
		path: '/mySelf',
		//上面定义好的路由扔进来
		component: xmySelf
	},
	//列表页开始
	{
		path: '/hotlist',
		component: hotlist
	},
	{
		path: '/clockhotel/:cityId',
		component: clockhotel

	},
	//列表页结束
	//攻略页开始
	{
		path: '/strategy',
		component: strategy,
		children:[{
			path:'goout',
			component:goOut,
			children:[{
				path:'month8',
				component:month8
			},{
				path:'month9',
				component:month9
			},{
				path:'month10',
				component:month10
			},{
				path:'/strategy/goout',
				redirect:'/strategy/goout/month8'
			}]
		},{
			path:'daren',
			component:daRen
		},{
			path:'surround',
			component:surround
		},{
			path:'/strategy',
			redirect:'/strategy/goout/month8'
		}]
	},
	//攻略页结束
	{
		//重定向，没有路由时页面默认加载/detail路由
		path: '/',
		redirect: '/index'
	}
]

//实例化路由，然后扔进主模块中。
var router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

//新建一个状态管理......................................................
var store = new Vuex.Store({
	state: {
		//主页传去list的搜索参数
		trueListParams: {
			//					入住时间
			indate: "",
			outdate: "",
			//酒店星级
			starlevels: "",
			//					酒店sn ,隔开
			hotelbrandids: "",
			//设施id,在详情页修改
			facilityids: "",
			//主题id,在详情页修改
			themeids: "",
			//地区
			//商圈sn
			areaid: "",
			//typeId
			areatype: "",
			//					价格
			highprice: "",
			lowprice: "",
			//					页码
			pageindex: 0,
			// 排序
			sortmethod: "",
			sortdirection: "",
			//头部筛选
			newfastfilter: "",

		},
		not:false,
		//		是否滚动刷新
		scroll: true,
		//list区域筛选
		areaList: "",
		//地铁
		areaThreeSubway: [],
		//机场
		areaThreeFly: [],
		//list的filter信息
		filterList: {
			brand: "",
			hotelTheme: "",
			//用于传递hotelbrandids参数
			hotelbrandids: [],
			//用于传递facilityids参数
			facilityids: [],
			//用于传递themeids参数
			themeids: [],
		},
		//index=>list=>detail=>buyCar
		hotelInformation: {
			cityId: '2001',
			hotelName: '空客酒店AIRBUSHOTEL(广州白云机场人和店)',
			hotelScore: '4.2',
			starTime: '2017-08-13',
			leaveTime: '2017-08-14',
			baiduLongitude:"113.290568"
		},

		//主页传递去list组件的数据
		listParams: {},
		//列表页数据开始
		listFilterParams: {
			//区域类型
			areatype: "5",
			//区域sn
			areaid: "699010_5",
			// 城市id
			cityId: "2001",
			// 品牌
			hotelbrandids: "",
			// 人数
			personofroom: "",
			// 设施
			facilityIds: "",
			// 主题
			themeIds: "",
			// 支付方式
			paytype: "",
			// 促销方式
			saletype: "",
			// 判断是否是下拉刷新
			srcollResh: true,
			hotellist: [],
			// 是否经过筛选得出数据
			datafrom: "filter",
			// 页码
			page: 0,
			// 最低价
			lowprice: "",
			// 最高价
			highprice: "",
			// 排序
			sortmethod: "",
			// 排序
			sortdirection: "",
			// 离开时间
			outdate: "2017-08-03",
			// 入住时间
			indate: "2017-08-02",
			//酒店等级
			starlevels:"",

		},
		roomtitle: false,
		saletitle: false,
		// 筛选组件
		tit: false,
		areabtn: false,
		pricestarbtn: false,
		defaultbtn: false,
		listContentArr: [],
		kslist: [],
		show: true,
		//遮罩层
		masklayer: false,
		// 钟点房排序组件
		slideselector: false,
		// 排序组件遮罩层
		advancedmasklayer: false,
		//钟点房价格组件
		filtepricestar: false,
		//价格组建遮罩层
		pricemasklayer: false,
		cityId: '2001',
		cityName: '',
		//		点击大图
		indexImg: '',
		//		图片是否显示
		isShowGallery: false,
		//终点房内容数据数组
		hotellist: [],

		//列表页数据结束
		imgUrl: null,
		//		定位城市的初始值
		aaa: '广州市',
		//		默认的地点
		bbb: '',
		galleryIsShow: false,
		activingNav: 0,
		val: "",
		isLogin: false,
		//		下面全是侧边栏
		direction: 'left',
		direction1: 'left',
		direction2: 'right',
		xian: false,
		//		隐藏侧边栏
		cshow1: false,
		cshow2: false,
		cshow3: false,
		//		获取星级里的值
		xing1: '',
		xing2: '',
		//		数据传送
		indexArr: "",
		news: "",
		indexCityId: "2001",
		times: '',
		detailNews: null,
		//订单页
		isShowMask: false,
		//房间对应的住房人
		nameNum: [],
		//定的房间数量
		roomsNum: null,
		//房间单价是详情页传过来的orderList中的price值
		//roomMoney:200,
		//订房总价
		totalMoney: null,
		//房间保留时间
		timesNum: null,
		//下订单人的联系电话
		telNum: "中国大陆：+86",
		/*//电话号码
		phone:"",*/
		//detail的buy组件显示隐藏
		showBuy: false,
		//detail的mask组件显示隐藏
		Mask: false,
		//detail的整个buy组件的数据
		buyContent: {},
		//detail的common组件显示隐藏

		//detail的facilties组件显示隐藏
		showCommom: false,
		showFac: false,

		//detail的buy组件的房间类型，例如商务标间
		roomInfoName: '',
		//detail的buy组件下单传去购物车的信息
		orderList: {},
		//详情页初始数据(轮播图，初始评论)
		getHotelMess: "",

	},
	getters: {
		getCount(state) {
			//处理数据
			return state.count + "ed"
		}
	},
	mutations: {
		//主页与详情页筛选请求中间内容部分
		indexToList(state, context) {

			$.ajax({
				url: "http://localhost:3000/hotel/api/list",
				data: state.trueListParams,
				success: function(res) {
					//筛选出酒店并且是下拉刷新的时候才合并数组
					if(res.hotelList && state.trueListParams.pageindex > 0) {
						console.log("下拉刷新")

						state.listContentArr = state.listContentArr.concat(res.hotelList)

						//筛选出酒店并且是不是下拉刷新的时候不要合并数组，注意：每次点击筛选要把state.trueListParams.pageindex设置为0
						//否则会出现数据合并到下面
					} else if(res.hotelList && state.trueListParams.pageindex == 0) {
						console.log("点击筛选")
						state.listContentArr = res.hotelList
						//				铺完数据后把把滚动开了.
						window.Vue.nextTick(function() {
							console.log(state.scroll)
							$("#hotelBox").scrollTop(0)
							state.scroll = true

						})

						//筛选没有结果时随机加载其他酒店
					} else if(res.surroundRecomHotels) {
						console.log("筛选没有结果")
						state.listContentArr = res.surroundRecomHotels

						//筛选没有结果并且默认推荐都没有时
					} else {
						console.log("筛选没有结果并且默认推荐都没有")
						alert("筛选没有结果并且默认推荐都没有,以后加个提示")
					}

					console.log("当前分页:" + state.trueListParams.pageindex)
				}
			})
		},
		//list的筛选、area筛选信息，依据城市id
		request(state) {
			axios({
				url:"http://localhost:3000/hotel/api/getlistfilter",
				params: {
					cityid: state.trueListParams.city
				}
			}).then(function(res) {
//				console.log(res)
				//转码成中文，替换转换失败的符号
				var douhaoReg = /%2C/g
				var maohaoReg = /%3A/g
				var xieganReg = /%2/g
				var result = res.data.filterList
				result = decodeURI(result).replace(douhaoReg, ",")
				result = result.replace(maohaoReg, ":")
				result = result.replace(xieganReg, "/")
				var filterList = JSON.parse(result)
				state.filterList.brand = filterList[0].subFilterInfoEntities
				state.filterList.facilityService = filterList[2].subFilterInfoEntities
				state.filterList.hotelTheme = filterList[3].subFilterInfoEntities
//				console.log(filterList)
//				console.log(state.filterList.facilityService, state.filterList.hotelTheme)

				//把其他数据也处理了存在state中
				var areaList = res.data.areaList
				areaList = decodeURI(areaList).replace(douhaoReg, ",")
				areaList = areaList.replace(maohaoReg, ":")
				areaList = areaList.replace(xieganReg, "/")
				areaList = JSON.parse(areaList)
				//area主要筛选信息 
				scope.areaList = areaList
				scope.areaList.forEach(function(items, i) {
					//地铁信息
					if((items ? items.sn : "") == 'n137425165725594602') {
//						console.log(items.subFilterInfoEntities)
						scope.areaThreeSubway = items.subFilterInfoEntities
						//机场信息
					} else if((items ? items.sn : "") == 'n8589076672078144546') {
//						console.log(items.subFilterInfoEntities)
						scope.areaThreeFly = items.subFilterInfoEntities
					}

				})
//				console.log(scope.areaList)
				//jq绑定点击事件高亮效果，点击时改变状态管理中心中对应的值 this
				Vue.nextTick(function() {
					var index;
					$('li.tjclick').on('click', function() {
						var index = $(this).index();
						$(this).addClass('on').siblings().removeClass('on')
						$(this).parent().parent().next().children().eq(index).show().siblings().hide()
					})

					//点击高亮
					$('.filter-con').find('span').on('click', function() {
						//点击传递参数
						//							console.log($(this).attr("data-type"))
						if($(this).attr("data-type") == "3") {

							//点击筛选栏的hotelbrandids并改变state中搜索的参数
							//判断该id是否已存在,存在则删除，不存在则添加
							var one = $.inArray($(this).attr("data-id"), state.filterList.hotelbrandids)
							if(one < 0) {
								state.filterList.hotelbrandids.push($(this).attr("data-id"))
							} else {
								state.filterList.hotelbrandids.splice(one, 1)
							}
//							console.log(state.filterList.hotelbrandids)
							scope.trueListParams.hotelbrandids = state.filterList.hotelbrandids.join(',')

						} else if($(this).attr("data-type") == "1011") {

							//点击筛选栏的facilityids改变state中搜索的参数
							//判断该id是否已存在,存在则删除，不存在则添加
							var two = $.inArray($(this).attr("data-id"), state.filterList.facilityids)
							if(two < 0) {
								state.filterList.facilityids.push($(this).attr("data-id"))
							} else {
								state.filterList.facilityids.splice(two, 1)
							}

//							console.log(state.filterList.facilityids)
							scope.trueListParams.facilityids = state.filterList.facilityids.join(',')

						} else if($(this).attr("data-type") == "1012") {

							//点击筛选栏的themeids改变state中搜索的参数
							//判断该id是否已存在,存在则删除，不存在则添加
							var three = $.inArray($(this).attr("data-id"), state.filterList.themeids)
							if(three < 0) {
								state.filterList.themeids.push($(this).attr("data-id"))
							} else {
								state.filterList.themeids.splice(three, 1)
							}

//							console.log(state.filterList.themeids)
							scope.trueListParams.themeids = state.filterList.themeids.join(',')
						}

						var index = $(this).parent().parent().parent().index()
						if($(this).hasClass('geton')) {
							$(this).removeClass('geton')
							if($(this).parent().children().hasClass('geton') || $(this).parent().parent().siblings().children().find('span').hasClass('geton')) {
								$(this).parent().parent().parent().parent().prev().children().children().eq(index).addClass('have')
							} else {
								$(this).parent().parent().parent().parent().prev().children().children().eq(index).removeClass('have')
							}
						} else {
							$(this).addClass('geton')
							$(this).parent().parent().parent().parent().prev().children().children().eq(index).addClass('have')
						}
					})
				})

			})
		},

		//返回主页或者重新选择城市时要重置参数
		reflesh(state) {
			state.trueListParams = {
				//					城市id
				city:2001,
				//					入住时间
				indate: "",
				outdate: "",
				//酒店星级
				starlevels: "",
				//					酒店sn ,隔开
				hotelbrandids: "",
				//设施id,在详情页修改
				facilityids: "",
				//主题id,在详情页修改
				themeids: "",
				//地区
				//商圈sn
				areaid: "",
				//typeId
				areatype: "",
				//					价格
				highprice: "",
				lowprice: "",
				//					页码
				pageindex: 0,
				// 排序
				sortmethod: "",
				sortdirection: "",
				//头部筛选
				newfastfilter: "",
				//酒店等级
				starlevels:"",

			}

			state.bbb=""

		},
		settitle(state, data) {
			state.title = data
		},
		detailNews(state, data) {
			state.detailNews = data
		},
		searchVal(state, val) {
			console.log(window.Vue)
			console.log('mutations执行', this)
			state.val = val
		},
		// list筛选请求函数
		automaticrequest: function(state) {

			console.log(this)
			$.ajax({
				url: "http://localhost:3000/clockhotelcontent",
				data: {
					// 城市id
					cityId: state.listFilterParams.cityId,
					// 分页
					page: state.listFilterParams.page++,

					// 是否经过筛选得出数据
					datafrom: state.listFilterParams.datafrom,

					// 入住时间
					indate: state.listFilterParams.indate,
					// 离开时间
					outdate: state.listFilterParams.outdate,

					//filterOne
					// 酒店品牌对应的sn，用逗号隔开。
					hotelbrandids: state.listFilterParams.hotelbrandids,
					personofroom: state.listFilterParams.personofroom,
					facilityIds: state.listFilterParams.facilityIds,
					themeIds: state.listFilterParams.themeIds,
					paytype: state.listFilterParams.paytype,
					saletype: state.listFilterParams.saletype,

					//filterTwo
					areatype: state.listFilterParams.areatype,
					areaid: state.listFilterParams.areaid,

					//filterThree
					// 最低价
					lowprice: state.listFilterParams.lowprice,
					// 最高价
					highprice: state.listFilterParams.highprice,

					//filterFour
					// 最低价
					sortmethod: state.listFilterParams.sortmethod,
					// 最高价
					sortdirection: state.listFilterParams.sortdirection,

				},
				success: function(res) {
					console.log(state.listFilterParams.cityId)
					state.cityName = res.hotelListUrlParameter.city.cityEntity.cityName;
					if(state.listFilterParams.srcollResh) {
						state.listFilterParams.hotellist = state.listFilterParams.hotellist.concat(res.hotelList)

					} else {
						state.listFilterParams.hotellist = res.hotelList
						//默认值
						if(state.listFilterParams.hotellist.length == 0) {
							state.listFilterParams.hotellist = res.recommendHotelList
						}
					}

					state.slideselector = false;
					state.advancedmasklayer = false;
				},
				dataType: "json"
			})

		},

		getHotelMess(state, hotelId) {
			console.log(hotelId)
			$.ajax({
				url: "http://localhost:3000/hotel/api/otherdetail",
				dataType: "json",
				data: {
					hotelid: hotelId

				},
				success: function(res) {
					console.log(res)
					//把酒店id放进传进给购物车的数组中
					state.orderList.hotelId = res.hotelId;
					//把图片放进传进给购物车的数组中
					state.orderList.imgUrl = res.pics[0];
					//在各个组件中都可以获取
					state.getHotelMess = res

				}
			})
		}
	},
	actions: {
		setChange(context, data) {
			context.commit('settitle', data)
		},
		detailNews(context, data) {
			context.commit('detailNews')
		},
		searchVal(context, val) {
			console.log('actions执行')
			context.commit('searchVal', val)

		},
		indexToList(context, val) {
			context.commit('indexToList', context)

		},
		request(context, val) {
			context.commit('request', context)
		},
		reflesh(context, val){
			context.commit('reflesh', context)
		},
		getHotelMess(context, hotelId) {
			context.commit('getHotelMess', hotelId)

		}
	}
})

//新建一个实例，把定义好的router和store放进来注册...................................
new Vue({
	el: "#demo",
	template: `
		<div style="height:100%" id="bigbox">
			<router-view></router-view>
		</div>
	`,
	router,
	store,
	created() {
		window.scope = this.$store.state
		window.$store = this.$store
	}

})