import "../public/css/font_mdye6150zyyzaor/iconfont.css"
import "../public/css/animate.css"

//引入js文件，jquery,Vue全家桶...............................................
import Vue from "vue"
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
//import zhLocale from 'iview/dist/locale/zh-CN';
//import enLocale from 'iview/dist/locale/en-US';

Vue.use(iView);

//Vue.config.lang = 'zh-CN';
//Vue.locale('zh-CN', zhLocale);
//Vue.locale('en-US', enLocale);

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper)
//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;

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
import xmySelf from "./components/routes/mySelf.vue"
//首页路由 chuanye
import home from "./components/home.vue"
//列表页路由
import hotlist from "./components/list/router/hotlist.vue"
// 列表页钟点房路由
import clockhotel from "./components/list/router/clockhotel.vue"

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
		path: '/buyCar/:id',
		//上面定义好的路由扔进来
		component: xbuyCar
	},
	{
		//路由名
		path: '/mySelf',
		//上面定义好的路由扔进来
		component: xmySelf
	},
	//列表页开始
	{
		path: '/hotlist/:id',
		component: hotlist
	},
	{
		path: '/clockhotel/',
		component: clockhotel

	},
	//列表页结束
	{
		//重定向，没有路由时页面默认加载/detail路由
		path: '/',
		redirect: '/detail/90702017'
	}
]

//实例化路由，然后扔进主模块中。
var router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

//新建一个状态管理......................................................
var store = new Vuex.Store({
	state: {
		//index=>list=>detail=>buyCar
		hotelInformation:{
			hotelName:'空客酒店AIRBUSHOTEL(广州白云机场人和店)',
			hotelScore:'4.2',
			starTime:'2017-7-13',
			leaveTime:'2017-7-13',
			hotelType:"舒适型"
		},
		
		//主页传递去list组件的数据
		listParams: {},
		//列表页数据开始
		listFilterParams:{
			// 城市id
			cityId:"",
			// 品牌
			hotelbrandids:"",
			// 人数
			personofroom:"",
			// 设施
			facilityIds:"",
			// 主题
			themeIds:"",
			// 支付方式
			paytype:"",
			// 促销方式
			saletype:"",
			// 判断是否是下拉刷新
			srcollResh:true,
			hotellist:[],
			// 是否经过筛选得出数据
			datafrom:"filter",
			// 页码
			page:0,
			// 最低价
			lowprice:"",
			// 最高价
			highprice:"",
			// 排序
			sortmethod:"",
			// 排序
			sortdirection:"",
			// 离开时间
			outdate:"",
			// 入住时间
			indate:"",


		},
		roomtitle:false,
		saletitle:false,
		// 筛选组件
		tit:false,
		areabtn:false,
		pricestarbtn:false,
		defaultbtn:false,
		arr:null,
		kslist:[],
		show:true,
		//遮罩层
		masklayer:false,
		// 钟点房排序组件
		slideselector:false,
		// 排序组件遮罩层
		advancedmasklayer:false,
		//钟点房价格组件
		filtepricestar:false,
		//价格组建遮罩层
		pricemasklayer:false,
		cityId: '',
		cityName:'',
		//终点房内容数据数组
		hotellist:[],
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

		//		数据传送
		indexArr: "",
		news: "",
		indexCityId:"2001",
		times:'',
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
		showCommom:false,
		showFac:false,

		//detail的buy组件的房间类型，例如商务标间
		roomInfoName: '',
		//detail的buy组件下单传去购物车的信息

		orderList:{},
		//详情页初始数据(轮播图，初始评论)
		getHotelMess:"",

	},
	getters: {
		getCount(state) {
			//处理数据
			return state.count + "ed"
		}
	},
	mutations: {
		settitle(state, data) {
			state.title = data
		},
		detailNews(state, data) {
			state.detailNews = data
		},
		searchVal(state, val) {
			console.log('mutations执行')
			state.val = val
		},
		// list筛选请求函数
		automaticrequest:function(state){
			$.ajax({
				url:"http://localhost:3000/clockhotelcontent",
				data: {
					// 城市id
					cityId: state.listFilterParams.cityId,
					// 分页
					page:state.listFilterParams.page++,
					// 最低价
					sortmethod:state.listFilterParams.sortmethod,
					// 最高价
					sortdirection:state.listFilterParams.sortdirection,
					// 是否经过筛选得出数据
					datafrom:state.listFilterParams.datafrom,
					// 酒店品牌对应的sn，用逗号隔开。
					hotelbrandids:state.listFilterParams.hotelbrandids,
					// 入住时间
					indate:state.listFilterParams.indate,
					// 离开时间
					outdate:state.listFilterParams.outdate,
					// 最低价
					lowprice:state.listFilterParams.lowprice,
					// 最高价
					highprice:state.listFilterParams.highprice,
				},
				success:function(res){
					console.log(res)
					state.cityName = res.hotelListUrlParameter.city.cityEntity.cityName;
					if(state.listFilterParams.srcollResh){
						state.listFilterParams.hotellist=state.listFilterParams.hotellist.concat(res.hotelList) 	
					}else{
						state.listFilterParams.hotellist = res.hotelList
					}
					
					state.slideselector = false;
					state.advancedmasklayer = false;
				},
				dataType:"json"
			})

		},	

		getHotelMess(state,hotelId){	
			console.log(hotelId)
			$.ajax({
				url:"http://localhost:3000/getInfo",
				dataType:"json",
				data:{
					hotelId:hotelId
								
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
		getHotelMess(context,hotelId){
			context.commit('getHotelMess',hotelId)

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
	}

})