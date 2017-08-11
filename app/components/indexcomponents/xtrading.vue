<template>
	<div>

		<div v-show="cshow1" :class="{'silde-right':direction1=='right','silde-left':direction1=='left'}">
			<div ng-transclude class="nav-content" :class="{'sidebar-move-left':direction1=='left','sidebar-move-right':direction1=='right'}">
				<!--<p @click='changs()'>123123</p>-->
				<!--<a href="">{{indexArr[0]?indexArr[0].nameCn:""}}</a>-->
				<div class="list-pop-city list-pop-search plugin-inited page-plugin plugin-show page-on-center">
					<header class="bar bar-nav flight-order-head">
						<i @click='changs()' class="material-icons" style="font-size: 32px; position: absolute;top: 7px;">&#xE314;</i>
						<div class="search-input"><i></i><input type="input" value="" placeholder="输入酒店名、地址等"></div>
						<div class="search-btn" style="right: 0; color:#49f;">搜索</div>
					</header>
					<div class="page-select page-content" style="">
						<div class="keyword-group">
							<div class="page-title">{{indexArr[0]?indexArr[0].nameCn:""}}</div>
							<div class="keyword-list">
								<ul>
									<li keyword-id="n668512291742670_100756272" v-for="n in indexArr[0]?indexArr[0].subFilterInfoEntities:''" city-id="2001" iskeyword="" name-cn="长隆旅游景区" lat="" lng="" hotelname="" placename="n.nameCn" type-id="n.typeId" hotel-brand-id="" brandname="" class=""><span @click="test($event,n.sn,n.typeId)">{{n.nameCn}}</span></li>
								</ul>
							</div>
						</div>
						<div class="keyword-group">
							<div class="page-title">{{indexArr[1]?indexArr[1].nameCn:""}}</div>
							<div class="keyword-list">
								<ul>
									<li v-for="n in indexArr[1]?indexArr[1].subFilterInfoEntities:''" keyword-id="" city-id="2001" iskeyword="" name-cn="7天" lat="" lng="" hotelname="" placename="" type-id="n.typeId" hotel-brand-id="n167033088745261_7468709921099261_53" brandname="n.nameCn" class=""><span @click="test2($event,n.sn)">{{n.nameCn}}</span></li>
								</ul>
							</div>
						</div>
						<div class="keyword-group">
							<div class="page-title">{{indexArr[2]?indexArr[2].nameCn:""}}</div>
							<div class="keyword-list">
								<ul>
									<li v-for="n in indexArr[2]?indexArr[2].subFilterInfoEntities:''" keyword-id="" city-id="2001" iskeyword="" name-cn="7天" lat="" lng="" hotelname="" placename="" type-id="n.typeId" hotel-brand-id="n167033088745261_7468709921099261_53" brandname="n.nameCn" class=""><span @click="test($event,n.sn,n.typeId)">{{n.nameCn}}</span></li>
								</ul>
							</div>
						</div>
						<div class="keyword-group">
							<div class="page-title">{{indexArr[3]?indexArr[3].nameCn:""}}</div>
							<div class="keyword-list">
								<ul>
									<li v-for="n in indexArr[3]?indexArr[3].subFilterInfoEntities:''" keyword-id="" city-id="2001" iskeyword="" name-cn="7天" lat="" lng="" hotelname="" placename="" type-id="n.typeId" hotel-brand-id="n167033088745261_7468709921099261_53" brandname="n.nameCn" class=""><span @click="test($event,n.sn,n.typeId)">{{n.nameCn}}</span></li>
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
		data() {
			return {

			}
		},
		methods: {

			changs() {
				this.$store.state.direction1 = 'left'
			},
			//			商圈sn id等
			test(e, serialNo, typeId) {
				console.log(11111)
				console.log(serialNo)
				this.$store.state.bbb = e.target.innerHTML
				scope.hotelInformation.serialNo = serialNo
				scope.listFilterParams.areaid = serialNo
				scope.listFilterParams.areatype = typeId

				scope.trueListParams.areaid = serialNo
				scope.trueListParams.areatype = typeId

				this.changs()
			},
			//			品牌sn
			test2(e, serialNo) {
				console.log(11111)
				console.log(serialNo)

				this.$store.state.bbb = e.target.innerHTML
				scope.trueListParams.hotelbrandids = serialNo

				this.changs()
			}

		},
		mounted: function() {
			scope.cshow1 = false

		},
		computed: {
			cshow1() {
				return this.$store.state.cshow1;

			},
			direction1() {
				return this.$store.state.direction1;
			},
			indexArr() {
				//				console.log(this.$store.state.indexArr)
				return this.$store.state.indexArr;

			}

		}

	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	.left-button {
		float: left;
	}
	/*组件的样式*/
	/*向左滑动的动画*/
	
	@keyframes moveLeft {
		from {
			transform: translateX(-100%);
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
			transform: translateX(-100%);
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
		left: 100%;
		background-color: #C0C0C0;
		/*调试代码时经常使用border，帮我们定位到div的一个区域*/
		/*border: 1px solid black;*/
		z-index: 10000;
		/*使用透明度为0来隐藏元素*/
		opacity: 1;
	}
</style>