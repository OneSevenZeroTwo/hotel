<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div v-for="(img,index) in getHotelMess.pics" class="swiper-slide"><img :src="img" alt="" /></div>
		</div>
	</div>

</template>

<script>
	export default {
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
		},
		computed: {
			imgArr() {
				return this.$store.state.imgArr

			},
			getHotelMess() {
				return scope.getHotelMess
			},
		},
		methods:{

		}

	}
</script>

<style scoped>
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