<template>
	<div>
		<xmap></xmap>
		<header class="bar ">
			<a class="iconfont icon-arrowleft pull-left tjclick" data-rel="back" href="http://m.elong.com/hotel/0101/nlist/" data-tj="{&quot;cspot&quot;:&quot;back&quot;}"></a>
			<a class="iconfont icon-shoucang1  pull-right tjclick" data-tj="{&quot;cspot&quot;:&quot;mycollection&quot;}"></a>
			<h1 class="title">酒店详情</h1>
		</header>

		<div class="hotel-info">
			<a href="javascript:void(0)"></a>
			<i class="picbg"></i>
			<!--轮播图-->
			<xswiper></xswiper>
			<h1 class="name">
                <i class="grade grade1"></i>
                <em>北京阳光温特莱酒店(国展店)(原速8国展柳芳店)</em>
            </h1>
			<i class="type-num"></i>
			<span class="hotel-type">经济型</span>
			<div class="num">
				<i class="iconfont icon-biaoqian"></i> 88
			</div>

			<div class="info">

			</div>
		</div>
	</div>
</template>

<script>
	import xswiper from "../xswiper.vue"
	import xmap from "../detail/xmap.vue"
	export default {
		methods: {
			getData() {
				//this.$store.dispatch("setNews");
				//this.$store.state.news = ;
				this.$ajax({
					url: "http://localhost:3000/detail",
				}).then(function(res) {
					console.log(res)
					this.$store.state.imgArr = res.data.pics;

				}.bind(this))
			}
		},
		components: {
			xswiper,
			xmap
		},
		mounted: function() {
			//后台请求数据动态生成列表
			this.getData()
		}
	}
</script>

<style scoped>
	
	* {
		padding: 0;
		margin: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	.bar {
		position: absolute;
		z-index: 10000;
		height: 44px;
		padding-right: 10px;
		padding-left: 10px;
		background: 0 0;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		left: 0;
		right: 0;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	
	.tjclick {
		border-radius: 50%;
		background-color: rgba(0, 0, 0, .5);
	}
	
	.bar .iconfont {
		position: relative;
		z-index: 20;
		width: 34px;
		height: 37px;
		display: inline-block;
		line-height: 37px;
		font-size: 24px;
		color: #fff;
		padding-left: 5px;
		margin: 3px 5px;
	}
	
	.pull-left {
		float: left;
	}
	
	.pull-right {
		float: right;
	}
	
	.name {
		font-size: 20px;
		position: absolute;
		top: 90px;
		left: 0;
		padding: 0 10px;
		padding-bottom: 10px;
		z-index: 3;
		background-color: rgba(0, 0, 0, .5);
	}
	
	.detail-main .hotel-info .pic-wrap .name .grade {
		margin-left: 0;
		margin-right: 3px;
	}
	
	.grade1 {
		background-position: -17px -18px;
	}
	
	.grade {
		display: inline-block;
		width: 16px;
		height: 14px;
		background-image: url(https://m.elongstatic.com/static/webapp/hotel/2017/07/v18/img/icon-list.png);
		background-position: 0 -18px;
		background-repeat: no-repeat;
		background-size: 96px 32px;
		margin-left: 3px;
		margin-bottom: 1px;
	}
	
	.name em {
		color: #fff;
		font-style: normal;
	}
	
	.title {
		position: absolute;
		display: none;
		width: 100%;
		padding: 0;
		margin: 0 -10px;
		font-size: 1.2rem;
		font-weight: 700;
		line-height: 44px;
		text-align: center;
		white-space: nowrap;
	}
	
	.type-num {
		background-color: rgba(211, 225, 226, .6);
		position: absolute;
		top: 160px;
		height: 20px;
		z-index: 4;
		width: 100%;
	}
	
	.hotel-type,
	.num {
		position: absolute;
		z-index: 4;
		top: 150px;
		color: #fff;
	}
	
	.hotel-type {
		left: 10px;
	}
	
	.num {
		right: 10px;
	}
	
	.info {
		margin-top: 20px;
	}
</style>