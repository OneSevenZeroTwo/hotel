<template>
	<div>
		<header class="bar ">
			<a class="iconfont icon-arrowleft pull-left tjclick" data-rel="back" href="http://m.elong.com/hotel/0101/nlist/" data-tj="{&quot;cspot&quot;:&quot;back&quot;}"></a>
			<a class="iconfont icon-shoucang1  pull-right tjclick" data-tj="{&quot;cspot&quot;:&quot;mycollection&quot;}"></a>
			<h1 class="title">酒店详情</h1>
		</header>
		
		<div class="hotel-info">
			<a href="javascript:void(0)"></a>
			<i class="picbg"></i>
			
			<xswiper></xswiper>
			<h1 class="name">
                <i class="grade grade1"></i>
                <b>北京阳光温特莱酒店(国展店)(原速8国展柳芳店)</b>
            </h1>
			<div class="info">

			</div>
		</div>
	</div>
</template>

<script>
	import xswiper from "../xswiper.vue"
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
			xswiper
		},
		mounted: function() {
			//后台请求数据动态生成列表
			this.getData()
		}
	}
</script>

<style scoped>
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
	.name{
		position: absolute;
		top: 75px;
		left: 0;
		padding: 0 10px 10px;
		z-index: 10;
		background-color: rgba(0, 0, 0, .5);
	}
	.name b{
		font-size: 0.7em;
		color: #fff;
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
</style>