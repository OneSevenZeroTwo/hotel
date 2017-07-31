<template>

	<div class="page-content page-search" style="">
		<div class="search-wrap">
			<div class="search-lb">
				<ul class="search-list">
					<li class="addr">
						<i class="addr"></i>
						<div v-if="not==true">
							<p class="cityname tjclick" city-id="0539" @click="changetion()">{{search}}</p>
						</div>
						<div v-else>
							<p class="cityname tjclick" city-id="0539" @click="changetion()">{{aa}}</p>
						</div>
						<i class="material-icons" id="material-icons">&#xE315;</i>

						<b class="right isnearby tjclick" data-tj="{&quot;cspot&quot;:&quot;mylocation&quot;,&quot;if&quot;:&quot;110013&quot;,&quot;ch&quot;:&quot;mylocation&quot;}" @click="baidu"><i class="icon-nearby" ></i><span>我的位置</span></b>
						<div id="allmap"></div>
					</li>
					<li class="date">
						<i class="icon-time"></i>

						<!--<div class="d1 tjclick" data-tj="{&quot;cspot&quot;:&quot;checkindate&quot;,&quot;if&quot;:&quot;110000&quot;,&quot;ch&quot;:&quot;h5hotelgeneral&quot;}">
							<p class="type">入住<span class="night" style="display: none;">深夜</span></p>
							<p><span class="indate" data-value="2017-07-27">07月27日</span><span class="startweek">明天</span></p>
						</div>
						<div class="d2"></div>
						<div class="d3 tjclick" data-tj="{&quot;cspot&quot;:&quot;checkoutdate&quot;,&quot;if&quot;:&quot;110000&quot;,&quot;ch&quot;:&quot;h5hotelgeneral&quot;}">
							<p class="type">离店</p>
							<p><span class="outdate" data-value="2017-07-30">07月30日</span><span class="endweek">周日</span></p>
						</div>
						<div class="d4 total">3晚</div>-->
						<i class="material-icons">&#xE315;</i>
					</li>
					<li class="name">
						<!--输入内容添加on-->
						<div class="sea-box" @click="changs()">
							<i class="name"></i>
							<input type="input" :value="search1" placeholder="酒店名称/位置不限" readonly="readonly">
							<i class="material-icons">&#xE315;</i>
						</div>
						<span class="close"><i class="icon-cross"></i></span>
					</li>
					<li class="pri">
						<div class="price-star-btn tjclick" @click="changstop()">
							<i class="pri"></i>
							<input class="title-phone" type="input" value="" placeholder="价格星级不限" readonly="readonly">
							<i class="material-icons">&#xE315;</i>
						</div>
						<span class="close"><i class="icon-cross"></i></span></li>
				</ul>
				<div class="search-btn tjclick" @click="cityId()"><i></i>搜索</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				bottomNav: 'recents',
				aa: '广州市',
				open: false,
				docked: true,
				not: false,
				cId: '',
				indexId: ""
				
			}
		},
		methods: {
			handleChange(val) {
				this.bottomNav = val
			},
			baidu() {
				// 百度地图API功能
				this.not = false
				var baidis = this
				var map = new BMap.Map("allmap");
				var point = new BMap.Point(116.331398, 39.897445);
				map.centerAndZoom(point, 12);

				function myFun(result) {
					var cityName = result.name;
					map.setCenter(cityName);
					console.log(baidis)
					//				 	alert("当前定位城市:" + cityName);
					baidis.aa = cityName

				}
				var myCity = new BMap.LocalCity();
				myCity.get(myFun);
			},
			changetion() {
				this.$store.state.direction = 'right'
				this.$store.state.cshow2 = true				
				this.not = true

			},
			changs() {
				this.$store.state.direction1 = 'right'
				this.$store.state.cshow1 = true				
				
				this.indexCityId()
				
			},
			changstop() {
				this.$store.state.direction2 = 'left'
				this.$store.state.cshow3 = true				
				
				this.$store.state.xian=true
				
				console.log('点击')
				
			},
			cityId() {
				this.cId = this.$store.state.cityId
				console.log(this.cId)
				location.href = "#/hotlist/" + this.cId
			},
			indexCityId() {
				this.indexId = this.$store.state.indexCityId
				console.log(this.indexId)
				
				this.$ajax({
					url: "http://localhost:3000/indexFilter",
					params:{
						cityId:this.indexId
					},
				}).then(function(res) {
//					console.log(res)
					this.$store.state.indexArr=res.data.searchList
				}.bind(this))
			}
		},
		mounted: function() {
			//					this.baidu()
		},
		computed: {
			search() {
				return this.$store.state.aaa
			},
			search1() {
				return this.$store.state.bbb
			}
		}
	}
</script>

<style scoped>
	.material-icons {
		position: absolute;
		left: 300px;
		font-size: 30px;
	}
	
	#material-icons {
		position: absolute;
		left: 200px;
		font-size: 30px;
	}
	
	.page-search .search-wrap .search-list li i {}
	/*@import "css/header.css";
	@import "css/header2.css";*/
	/** {
		padding: 0;
		margin: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	.validate-code-by-intercept {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -120px;
		margin-left: -153px;
		padding-top: 10px;
		height: 220px;
		width: 306px;
		z-index: 15000;
		background-color: #fff;
		text-align: center;
		font-size: 16px;
		font-weight: 700;
		color: #353535
	}
	
	.validate-code-by-intercept .form-li {
		clear: both;
		height: 44px;
		line-height: 44px;
		margin: 3px 12px
	}
	
	.validate-code-by-intercept .form-li2 {
		overflow: hidden;
		border-radius: 5px;
		border: 1px solid #ddd;
		background-clip: padding-box;
		margin-bottom: 10px
	}
	
	.validate-code-by-intercept input.txt {
		width: 100%;
		padding: 11px 10px 11px 13px;
		display: block;
		margin: 0;
		border: 0;
		background: 0;
		font: 16px/1.4 Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif
	}
	
	.validate-code-by-intercept .submit {
		font-size: 1.1rem;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #fff;
		border-radius: 5px;
		border-width: 0;
		background-color: #e65749;
		margin: 0 0 10px
	}
	
	.search-wrap {
		margin-bottom: 12px;
		border: 1px solid #DDD;
		background: #FFF;
	}
	
	.search-wrap .search-list {
		padding: 0 12px;
		overflow: hidden;
	}
	
	.search-wrap .search-list li {
		padding: 6px 0;
		border-bottom: 1px solid #DDD;
		position: relative;
		min-height: 26px;
	}
	
	.search-wrap .search-list li.addr {
		margin-top: 12px;
	}
	
	.search-wrap .search-list li.date {
		font-size: .688rem;
		line-height: 16px;
		overflow: hidden;
	}
	
	.search-wrap .search-btn {
		width: 100%;
		margin: 0 auto;
		background: #49f;
		height: 36px;
		line-height: 36px;
		font-size: 10px;
		color: #FFF;
		text-align: center;
		border-radius: 4px;
	}
	
	.search-wrap .search-btn i {
		position: relative;
		top: 7px;
		left: -6px;
	}
	
	.search-wrap .search-list li i:first-child {
		width: 16px;
		height: 16px;
		display: block;
		position: absolute;
		top: 50%;
		margin-top: -10px;
		font-size: .9rem;
		margin-left: 8px;
		line-height: 21px;
		color: #999;
	}
	
	.search-wrap .search-list li.addr p {
		line-height: 21px;
		overflow: hidden;
		padding-right: 20px;
		margin-left: 30px;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: -0.937rem;
	}
	
	.search-wrap .search-list li.addr .right {
		position: absolute;
		right: 10px;
		text-align: center;
		color: #49f;
		top: 50%;
		font-size: .7rem;
		font-weight: normal;
		line-height: 1;
		margin-top: -8px;
	}
	
	.search-wrap .search-list li.addr .right i {
		width: 14px;
		height: 16px;
		display: inline-block;
		position: relative;
		margin: 0;
		vertical-align: -3px;
	}*/
	
	body,
	html,
	#allmap {
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin: 0;
		background-color: #F2F2F2;
		font-family: "微软雅黑";
	}
</style>