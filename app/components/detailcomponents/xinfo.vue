<template>
	<div class="hotel-info">
		<div class="pic-wrap tjclick swiper-container-horizontal" data-tj="{&quot;cspot&quot;:&quot;image&quot;}">
			<a href="javascript:void(0)"></a>
			<i class="picbg"></i>
			<div class="swiper-wrapper focuspic" style="background: url(&quot;//m.elongstatic.com/static/webapp/hotel/2015/06/v2/img/defuat_room_pic.png&quot;) 0% 0% / cover no-repeat; transition-duration: 0ms; transform: translate3d(-1125px, 0px, 0px);">
				<div class="swiper-slide" style="width: 375px;"><img src="//pavo.elongstatic.com/i/hotel750_360/0005PpTb.jpg"></div>
				<div class="swiper-slide" style="width: 375px;"><img src="//pavo.elongstatic.com/i/hotel750_360/0005OGBA.jpg"></div>
				<div class="swiper-slide swiper-slide-prev" style="width: 375px;"><img src="//pavo.elongstatic.com/i/hotel750_360/0005OIf4.jpg"></div>
				<div class="swiper-slide swiper-slide-active" style="width: 375px;"><img src="//pavo.elongstatic.com/i/hotel750_360/0005OGBe.jpg"></div>
				<div class="swiper-slide swiper-slide-next" style="width: 375px;"><img src="//pavo.elongstatic.com/i/hotel750_360/0005OIgD.jpg"></div>
			</div>
			<h1 class="name">
                        <i class="grade grade1"></i>
                <em>空客酒店AIRBUSHOTEL(广州白云机场人和店)</em>
            </h1>

			<span class="hotel-type">
				经济型
                
                
                

                
                
                
								</span>
			<div class="num"><i></i>102</div>
		</div>
		<div class="info">
			<ul>
				<!--地图-->
				<xmap></xmap>

				<!--住客评价-->
				<li class="choose">
					<div class="titles">
						<ul>
							<li class=" active ">住客评价</li>
							<li class="hoteldetail   tjclick" data-tj="{&quot;cspot&quot;:&quot;hoteldetailchange&quot;}">酒店详情</li>
						</ul>
						<span class="line "></span>
					</div>
					<div @click="showCommom()" class="text1 tabcomment all-com tjclick text_comments" data-tj="{&quot;cspot&quot;:&quot;comment&quot;}">
						<div class="left_c">
							<div class="praise_nbm">
								<span class="u_nbm"><b class="s_nbm">4.2</b>分</span>
								<span class="u_btn">挺好哒</span>
							</div>
						</div>
						<div class="right_c">
							<h1>云彩<span class="ping"><span class="level3">点评新人</span></span></h1>
							<p>干净、卫生、整洁，服务超级好。还到地铁囗来接，大清早送到机场，全是免费。太让我们省心了。</p>
						</div>
						<p class="more_p info-comments">查看2154条住客评价<i></i></p>
					</div>

					<div class="text1 tabdetails tjclick" style="display:none;" data-tj="{&quot;cspot&quot;:&quot;hoteldetail&quot;}">
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
	export default {
		data() {
			return {
				hotelId: ""
			}
		},
		methods: {
			//获取列表页传过来的酒店id
			getId() {
				this.hotelId = this.$route.params.id
				//				console.log(this.hotelId)
			},
			//加载轮播图图片
			swiper() {
				this.$ajax({
					url: "http://localhost:3000/getInfo",
					params: {
						hotelId: this.hotelId
					}
				}).then(function(res) {
					//					console.log(res)
				})
			},
			//			common(){
			//				this.$ajax({
			//					url:"http://localhost:3000/commom",
			//					
			//				}).then(function(res){
			//					console.log(res)
			//				})
			//			},
			showCommom() {
				scope.showCommom = !scope.showCommom
			}

		},
		mounted() {
			this.getId()
			this.swiper()
			//			this.common()
			window.navigator.geolocation.getCurrentPosition(function(data) {
				console.log(data)
				
			}, function(err) {

			})

		},
		components:{
			xmap,
		}
	}
</script>

<style>

</style>