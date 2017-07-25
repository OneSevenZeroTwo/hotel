<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div @click="showPic(imgArr[0])" class="swiper-slide"><img :src="imgArr[0]" alt="" /></div>
			<div @click="showPic(imgArr[1])" class="swiper-slide"><img :src="imgArr[1]" alt="" /></div>
			<div @click="showPic(imgArr[2])" class="swiper-slide"><img :src="imgArr[2]" alt="" /></div>
			<div @click="showPic(imgArr[3])" class="swiper-slide"><img :src="imgArr[3]" alt="" /></div>
			<div @click="showPic(imgArr[4])" class="swiper-slide"><img :src="imgArr[4]" alt="" /></div>
			<div @click="showPic(imgArr[5])" class="swiper-slide"><img :src="imgArr[5]" alt="" /></div>
			<div @click="showPic(imgArr[6])" class="swiper-slide"><img :src="imgArr[6]" alt="" /></div>
			<div @click="showPic(imgArr[7])" class="swiper-slide"><img :src="imgArr[7]" alt="" /></div>
			<div @click="showPic(imgArr[8])" class="swiper-slide"><img :src="imgArr[8]" alt="" /></div>
			<div @click="showPic(imgArr[9])" class="swiper-slide"><img :src="imgArr[9]" alt="" /></div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				imgArr: ["images/4.jpg", "images/5.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"]

			}
		},
		methods: {
			showPic(imgUrl) {
				this.$store.state.imgUrl = imgUrl
				this.$store.state.galleryIsShow = true;
			}
		},
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
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
		height: 200px;
	}
	
	.weui-panel__bd {
		margin-bottom: 58px;
		background: #FFF;
	}
</style>