import "../public/css/font_mdye6150zyyzaor/iconfont.css"


//引入js文件，jquery,Vue全家桶...............................................
import Vue from "vue"
//引入路由
import VueRouter from 'vue-router';
//引入vuex状态管理
import Vuex from 'vuex';
//axios的ajax封装库
import axios from "axios";
//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
//可以引入jquery，但是要把它设置为全局变量。
import $ from "jquery";
window.$ = window.jQuery = $
import com from "./js/common.js"
window.com = com
console.log(com.randomNum(1, 10))

//使用..................................................................
//通过 Vue.use()明确地安装路由功能

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
//import home from "./components/routes/home.vue"
import share from "./components/routes/share.vue"
import ask from "./components/routes/ask.vue"
import job from "./components/routes/job.vue"
import topics from "./components/routes/topics.vue"
import good from "./components/routes/good.vue"
import detail from "./components/routes/detail.vue"
import muse from "./components/muse/test.vue"
import xregister from "./components/routes/register.vue"
import xlogin from "./components/routes/login.vue"
import xbuyCar from "./components/routes/buyCar.vue"
import xmySelf from "./components/routes/mySelf.vue"
//首页路由 chuanye
import home from "./components/indexcomponents/router/home.vue"
//详情页路由
import list from "./components/list/router/list.vue"

//把定义好的路由组件引进来放到component中，path为进入路由的名字，然后等待路由实例化(new VueRouter)。
//children属性接受一个数组，里面为2级路由。注意父组件中要有<router-view></router-view>
var routes = [{
		//路由名
		path: '/index',
		//上面定义好的路由扔进来
		component: home,
		children: [{
				path: 'share',
				component: share,
			}, {
				path: 'job',
				component: job,
			}, {
				path: 'ask',
				component: ask,
			}, {
				path: 'good',
				component: good,
			}, {
				path: 'topics',
				component: topics,
			},

		]
	}, {
		//路由名
		path: '/detail',
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
	}, {
		//路由名
		path: '/mySelf',
		//上面定义好的路由扔进来
		component: xmySelf
	}, {
		//路由名
		path: '/muse',
		//上面定义好的路由扔进来
		component: muse
	},
	//列表页开始
	{
		path: '/list',
		component: list
	},
	//列表页结束
	{
		//重定向，没有路由时页面默认加载/detail路由
		path: '/',
		redirect: '/detail/'
	}
]

//实例化路由，然后扔进主模块中。
var router = new VueRouter({
	routes // （缩写）相当于 routes: routes
})

//新建一个状态管理......................................................
var store = new Vuex.Store({
	state: {
		imgUrl: null,
		galleryIsShow: false,
		activingNav: 0,
		val: "",
		isLogin:false,
		direction: 'left',
		news: "",
		detailNews: null,
		imgArr: ["//pavo.elongstatic.com/i/mobile220_220/00050lJq.jpg",
			"//pavo.elongstatic.com/i/mobile220_220/0000aDnN.jpg",
			"//pavo.elongstatic.com/i/mobile220_220/0000aDnM.jpg",
			"//pavo.elongstatic.com/i/mobile220_220/0000aDhO.jpg",
			"//pavo.elongstatic.com/i/mobile220_220/0000aDhA.jpg"
		],
		isShowMask:false,
		roomsNum:null,
		timesNum:null,

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

	}
})

//新建一个实例，把定义好的router和store放进来注册...................................
new Vue({
	el: "#demo",
	template: `
		<div style="height:100%">
			<router-view></router-view>
		</div>
	`,
	router,
	store,
})