<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div  class="swiper-slide"><img :src="'http:'+imgArr[0]" alt="" /></div>
			<div  class="swiper-slide"><img :src="'http:'+imgArr[1]" alt="" /></div>
			<div  class="swiper-slide"><img :src="'http:'+imgArr[2]" alt="" /></div>
			<div  class="swiper-slide"><img :src="'http:'+imgArr[3]" alt="" /></div>
			<div  class="swiper-slide"><img :src="'http:'+imgArr[4]" alt="" /></div>
		</div>
		<!-- Add Pagination -->
		<!--<div class="swiper-pagination"></div>-->
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
////				this.$store.state.detailNews.pics
//				imgArr: [/*"http://pavo.elongstatic.com/i/hotel750_360/00050lJq.jpg", "http://pavo.elongstatic.com/i/hotel750_360/0000aDnN.jpg", "http://pavo.elongstatic.com/i/hotel750_360/0000aDnM.jpg", "http://pavo.elongstatic.com/i/hotel750_360/0000aDhO.jpg", "http://pavo.elongstatic.com/i/hotel750_360/0000aDhA.jpg"*/]

			}
		},
		methods: {
//			showPic(imgUrl) {
//				this.$store.state.imgUrl = this.$store.state.detailNews.pics
////				this.$store.state.galleryIsShow = true;
//			}
		},
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
			console.log(this.imgArr)
		},
		computed:{
			imgArr(){
				console.log(this.$store.state.imgArr)
				return this.$store.state.imgArr
			}
		}
	}
</script>

<style>
	.swiper-container {
		width: 100%;
		height: 100%;
		background: #FFF;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
	
	.swiper-slide img {
		width: 100%;
		height: 180px;
	}
	
	.weui-panel__bd {
		margin-bottom: 58px;
		background: #FFF;
	}
</style>