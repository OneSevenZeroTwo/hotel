<template>
	<div class="list-pop-fliter list-pop-area plugin-inited page-plugin page-on-center">
		<header class="bar bar-nav flight-order-head">
			<a @click="hideSideBar()" class="bbbb icon icon-left-nav pull-left "></a>
			<div class="title">区域位置</div>
		</header>
		<div class="page-cont">
			<section class="list-fliter-box">
				<div class="filter-wrap">
					<div class="filter-tit page-content" style="">
						<!--第1个ul-->
						<ul>
							<li @click="chooseNav(leftIdx,n.sn)" v-if="n" v-for="(n,leftIdx) in areaList" :data-id="n.sn" :class="{'on':leftIndex==leftIdx}">{{n.nameCn}}</li>
						</ul>
					</div>
					<div class="filter-con">
						<!--第2个ul-->
						<ul v-for="(n,RightIdx) in areaList" v-if="RightIdx == leftIndex&&n" :class="[{'filter-list-radio':n.sn!='n137425165725594602'&&n.sn!='n8589076672078144546'},{'filter-list-subway-l':n.sn=='n137425165725594602'||n.sn=='n8589076672078144546'},'page-content']">
							<li @click="chooseNavTwo(centerInx,r.sn)" v-for="(r,centerInx) in n.subFilterInfoEntities" :data-id="r.sn" :data-type="r.typeId" :class="{'on':centerInx==centerIndex}">{{r.nameCn}}</li>
						</ul>
						<!--第3个ul-->
						<ul v-for="(n,RightIdx) in subORfly" v-if="RightIdx == centerIndex" class="bbb filter-list-subway-r page-content ">
							<li @click="rightInxFn(rightInx,r.sn)" v-for="(r,rightInx) in n.subFilterInfoEntities" :data-id="r.sn" :data-typeid="r.typeId" :class="{'on':rightIndex==rightInx}">{{r.nameCn}}<i class="checkbox"></i></li>
						</ul>

					</div>
					<div class="bot-btn bar">
						<ul>
							<li id="filter-reset">重置</li>
							<li class="on" id="filter-submit" @click="filtersubmitclick()">确定</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				leftIndex: 0,
				centerIndex: 0,
				rightIndex: 0,
				subORfly: [],
				areaid:"",
			}
		},
		methods: {
			//点击第一层ul,控制areaFliter第2层联动
			chooseNav(leftIndex, sn) {
				this.leftIndex = leftIndex
				//点击第一个ul的li,第二、三个ul的li重置，默认选中第一个
				this.centerIndex = 0
				this.rightIndex = 0
				console.log(sn)
				//根据第一个ul中的li的sn,选择第三层ul中的li v-for的对象
				if(sn == 'n8589076672078144546') {
//					console.log(this.subORfly)
					this.subORfly = this.areaThreeFly
				} else if(sn == 'n137425165725594602') {
//					console.log(this.subORfly)
					this.subORfly = this.areaThreeSubway
				}
			},
			//点击第2层ul,控制areaFliter第3层联动
			chooseNavTwo(centerInx,sn) {
				this.centerIndex = centerInx
				//点击第二个ul的li,第三个ul的li重置，默认选中第一个
				this.rightIndex = 0
//				单选
				scope.trueListParams.areaid=sn
//				console.log(scope.trueListParams.areaid)
				
			},
			//点击第3层ul,控制areaFliter第3层联动
			rightInxFn(rightInx,sn) {
				this.rightIndex = rightInx
				scope.trueListParams.areaid=sn
//				console.log(scope.trueListParams.areaid)

			},
			//点击header返回
			hideSideBar() {
				$(".list-pop-area").css("display", "none")
			},
			//点击确定返回,并且搜索
			filtersubmitclick() {
				$(".list-pop-area").css("display", "none")

				//触发list筛选函数indexToList()
				//				记得清0
				scope.trueListParams.pageindex = 0
				scope.scroll = false
				this.$store.dispatch("indexToList")
			},

		},
		computed: {
			areaList() {
				return scope.areaList
			},
			areaThreeSubway() {
				return scope.areaThreeSubway
			},
			areaThreeFly() {
				return scope.areaThreeFly
			},
		},

		mounted() {
			//			this.request()

		}
	}
</script>

<style scoped>
.bbbb{
   	color: #444;
 }
</style>