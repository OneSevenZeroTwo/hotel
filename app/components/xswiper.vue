<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(img,index) in imgArr" class="swiper-slide"><img :src="'http:'+img" alt="" /></div>
				<!--<div  class="swiper-slide"><img :src="'http:'+imgArr[1]" alt="" /></div>-->
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
//			console.log(this.imgArr)
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