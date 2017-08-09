<template>
	<div class="list-pop-fliter list-pop-area plugin-inited page-plugin page-on-center">
		<header class="bar bar-nav flight-order-head">
			<a @click="hideSideBar()" class="icon icon-left-nav pull-left "></a>
			<div class="title">区域位置</div>
		</header>
		<div class="page-cont">
			<section class="list-fliter-box">
				<div class="filter-wrap">
					<div class="filter-tit page-content" style="">
						<ul>
							<li @click="chooseNav(leftIdx)" v-if="n" v-for="(n,leftIdx) in areaList" :data-id="n.sn" class="on">{{n.nameCn}}</li>
						</ul>
					</div>
					<div class="filter-con">
						<!--商圈-->
						<ul v-for="(n,RightIdx) in areaList" v-if="RightIdx == index&&n" :class="['rightNav',{'filter-list-radio':n.sn!='n137425165725594602'&&n.sn!='n8589076672078144546'},{'filter-list-subway-l':n.sn=='n137425165725594602'||n.sn=='n8589076672078144546'},'page-content']">
							<li v-for="r in n.subFilterInfoEntities" :data-id="r.sn" :data-type="r.typeId">{{r.nameCn}}</li>
						</ul>
						<!--第三层ul-->
						<ul v-for="(n,RightIdx) in areaList" v-if="(n?n.sn:'')=='n137425165725594602'||(n?n.sn:'')=='n8589076672078144546'" class="bbb filter-list-subway-r page-content ">
							<li data-id="n137425165725594602_796787658795143_60001326" data-typeid="6" class="">车站<i class="checkbox"></i></li>
						</ul>
						<!--<ul class="bbb filter-list-subway-r page-content ">
							<li data-id="n137425165725594602_796787658795143_60001326" data-typeid="6" class="">机场<i class="checkbox"></i></li>
						</ul>-->

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
				index: 0,
				areaThreeSubway:"",
				areaThreeFly:"",
			}
		},
		methods: {
			chooseNav(leftIndex) {
				this.index = leftIndex
			},
			//点击header返回
			hideSideBar() {
				$(".list-pop-area").css("display", "none")
			},
			//点击确定返回
			filtersubmitclick: function() {
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
				var self = this
				var aaa = scope.areaList
				aaa.forEach(function(items,i){
					if(items.sn=='n137425165725594602'){
						self.areaThreeSubway = items
					}else if(items.sn=='n8589076672078144546'){
						self.areaThreeFly = items
					}
				})
				return scope.areaList
			}
		},
		mounted() {
			//			this.request()

		}
	}
</script>