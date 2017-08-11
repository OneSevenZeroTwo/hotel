<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src="//pavo.elongstatic.com/trip_original/0009HaWJ.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="//pavo.elongstatic.com/trip_original/0009FpHx.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="//pavo.elongstatic.com/trip_original/0009Eg21.jpg" alt="" /></div>
			<div class="swiper-slide"><img src="//pavo.elongstatic.com/trip_original/0009DuVa.jpg" alt="" /></div>
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
	.swiper-slide img{
		width: 100%;
		display: block;
	}
</style>
