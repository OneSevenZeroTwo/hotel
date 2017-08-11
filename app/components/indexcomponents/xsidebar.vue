<template>
	<div>
		<div v-show="cshow2" :class="{'silde-right':direction=='right','silde-left':direction=='left'}">
			<div ng-transclude class="nav-content" :class="{'sidebar-move-left':direction=='left','sidebar-move-right':direction=='right'}">
				<!--<button class="left-button" ng-click="directionTo('left')">left</button>-->
				<div class="advance-city plugin-inited page-plugin plugin-show page-on-center">
					<header class="bar bar-nav flight-order-head">

						<a @click="changetion()" class=" pull-left" style="margin-top: 7px"><i class="material-icons" style="font-size: 32px;">&#xE314;</i></a>

						<div class="search-input" style="margin-right:4px ;"><i class="icon-search"></i><input type="input" value="" placeholder="请输入城市名、行政区或景区"></div>
					</header>
					<div class="page-content page-select" style="">
						<div class="hot-city">
							<div class="page-title">热门城市</div>
							<div class="city-list">
								<ul>
									<!--class加个on高亮-->
									<li @click="changetion()" v-for="(item,index) in newArr" city-id="0101" area-type="" area-id="" sug-origin="" v-on:click="addClassFun(index)" v-bind:class='{on:index==idx}'>
										<span @click="test($event,item.cityId)">{{item.cityName}}</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="all-city">
							<div class="page-title">全部城市</div>
							<div class="letter-list">
								<ul>
									<li v-for="(a,index) in letter" v-on:click="addClassletter(a,index)" v-bind:class='{on:index==idxs}'>{{a}}</li>
								</ul>
							</div>
							<div class="city-list">
								<ul class="city-list-ul">
									<li city-id="1988" area-type="" area-id="" sug-origin="" v-for="(a,index) in Arrs"><span @click="test($event,a.cityId)">{{a.cityName}}</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				newArr: [],
				idx: 0,
				idxs:0,
				Arrs:[],
				letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
			}
		},
		computed: {
			cshow2(){
				return this.$store.state.cshow2;
				
			},
			direction() {
				return this.$store.state.direction;
			}
		},
		methods: {
			test(e,cityId){
				console.log(11111)
				console.log(e.target.innerHTML,cityId)
				this.$store.state.aaa=e.target.innerHTML
				this.$store.state.bbb=""
				scope.hotelInformation.cityId=cityId
				scope.listFilterParams.cityId=cityId
				scope.trueListParams.city=cityId				
				this.$store.state.not = true				
				scope.indexCityId=cityId
				scope.cityId=cityId
				this.indexCityId()
				
				
				this.changetion()
			},
			changetion() {
				this.$store.state.direction = 'left'
				
			},
			leftfence: function() {
//				console.log("aaa")
				this.$ajax({
					url: this.$store.state.base+"/hotel/api/gethomehotcitys/",
				}).then(function(res) {
					//					console.log(JSON.parse(res))
					this.newArr = JSON.parse(res.data.hotCitys)
//					console.log(this.newArr)
				}.bind(this))

			},
			letterfence: function(letter) {
				console.log("bbb")
				
				this.$ajax({
					url: this.$store.state.base+"/hotel/api/gethotelcitysbyletter/?letter="+letter,
				}).then(function(res) {
					console.log(res)
					this.Arrs = res.data
					console.log(this.Arrs)

				}.bind(this))

			},

			addClassFun: function(index) {
				this.idx = index;
			},
			addClassletter: function(letter,index) {
				this.idxs = index;
   				this.letterfence(letter)

			},
			//点击热门城市时触发，酒店地点等
			indexCityId() {
				this.indexId = this.$store.state.indexCityId
				console.log('aaaaaaaaaa')

				this.$ajax({
					url: this.$store.state.base+"/hotel/api/gethotelsearchrecommendplace/?_rt=1502114763450&city="+this.indexId,
				}).then(function(res) {
									console.log(JSON.parse(res.data.simpleFilterInfos))
					this.$store.state.indexArr =JSON.parse(res.data.simpleFilterInfos) 
				}.bind(this))
			}
			
		},
		mounted: function() {
			
			//后台请求数据动态生成列表
			this.leftfence()
			scope.cshow2=false
			

		}
	}
</script>

<style scoped>
	/*全局样式*/
	
	* {
		margin: 0;
		padding: 0;
	}
	
	.left-button {
		float: right;
	}
	/*组件的样式*/
	/*向左滑动的动画*/
	
	@keyframes moveLeft {
		from {
			transform: translateX(100%);
		}
		to {}
	}
	
	.sidebar-move-left {
		animation: moveLeft;
		/*持续时间*/
		animation-duration: 0.5s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	/*向右边滑动的动画*/
	
	@keyframes moveRight {
		from {}
		to {
			transform: translateX(100%);
		}
	}
	
	.sidebar-move-right {
		animation: moveRight;
		/*持续时间*/
		animation-duration: 0.5s;
		/*动画播放次数*/
		animation-iteration-count: 1;
		/*执行方向，动画执行结束时保持在它结束时的状态*/
		animation-fill-mode: forwards;
	}
	
	.nav-content {
		width: 100%;
		position: fixed;
		min-height: 100%;
		top: 0;
		left: -100%;
		background-color: #e1e1e1;
		/*调试代码时经常使用border，帮我们定位到div的一个区域*/
		/*border: 1px solid black;*/
		z-index: 1000;
		/*使用透明度为0来隐藏元素*/
		opacity: 1;
	}
</style>