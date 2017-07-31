<template>
	<div class="hotel-info">
		<div class="pic-wrap tjclick swiper-container-horizontal">
			<a href="javascript:void(0)"></a>
			<i class="picbg"></i>

			<!--轮播图-->
			<xswiper></xswiper>

			<h1 class="name">
                        <i class="grade grade1"></i>
                <em>{{hotelInformation.hotelName}}</em>
            </h1>

			<span class="hotel-type">
				{{hotelInformation.hotelType}}</span>
			<div class="num"><i></i>{{getHotelMess.imagesCount}}</div>
		</div>
		<div class="info">
			<ul id = "ulmap">
				<!--地图-->
				<xmap></xmap>

				<!--住客评价-->
				<li class="choose" style="background: #fff;">
					<div class="titles">
						<ul>
							<li id='detailLi' :class="{'active':showDetail}" @click="showDetail=true">住客评价</li>
							
							<li id='detailToll' :class="['hoteldetail',{'active':!showDetail}]" @click="showDetail=false">酒店详情</li>
						</ul>
						<span :class="['line',{'left':!showDetail}]"></span>
					</div>
					<div :style="{'display':showDetail?'block':'none'}" @click="showCommom()" class="text1 tabcomment all-com tjclick text_comments">
						<div class="left_c">
							<div class="praise_nbm">
								<span class="u_nbm"><b class="s_nbm">{{hotelInformation.hotelScore}}</b>分</span>
								<span class="u_btn">挺好哒</span>
							</div>
						</div>
						<div class="right_c">
							<h1>{{getHotelMess.comments?getHotelMess.comments[0].userName:""}}<span class="ping"><span class="level3">{{getHotelMess.comments?(getHotelMess.comments[0].userRank>=3?"点评专家":"点评新人"):""}}</span></span></h1>
							<p>{{getHotelMess.comments?getHotelMess.comments[0].content:""}}</p>
						</div>
						<p class="more_p info-comments">查看{{getHotelMess.totalCount}}条住客评价<i></i></p>
					</div>

					<div @click="showFac()" class="text1 tabdetails tjclick" :style="{'display':!showDetail?'block':'none'}">
						<div class="mid2">
							<ul>
								<li>
									<span class="icon-parking"></span>
									<span>停车场</span>
								</li>
								<li>
									<span class="icon-wifi"></span>
									<span>无线wifi</span>
								</li>
								<li>
									<span class="icon-apus"></span>
									<span>接机</span>
								</li>
								<li>
									<span class="icon-luggage"></span>
									<span>行李寄存</span>
								</li>
							</ul>
						</div>
						<p class="more_p">查看全部信息<i></i></p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import xmap from "./xmap.vue"
	import xswiper from "./xswiper.vue"
	export default {
		data() {
			return {
				hotelId: "",
				showDetail:true
			}
		},
		methods: {
			//获取列表页传过来的酒店id
			getId() {
				this.hotelId = this.$route.params.id
			},
			//显示评论
			showCommom() {
				scope.showCommom = !scope.showCommom
			},
			showFac(){
				console.log(2222)
				scope.showFac = true
			}

		},
		mounted() {
			//进入页面获取id
			this.getId()
			//进入详情页根据酒店id请求轮播图、初始评论数据。
			this.$store.dispatch("getHotelMess",this.hotelId)
			
			window.navigator.geolocation.getCurrentPosition(function(res){
				console.log(res)
			})
			
		},
		components: {
			xmap,
			xswiper
		},

		computed: {
			//list传递过来的数据
			hotelInformation() {
				return scope.hotelInformation
			},
			//详情页初始化数据
			getHotelMess() {
				return scope.getHotelMess
			}
		}
	}
</script>

<style>
	#ulmap{
		padding-left: 0;
	}
	
	#detailLi,#detailToll{
		background: #fff;
	}
</style>