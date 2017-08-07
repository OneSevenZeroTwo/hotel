<template>
	<!--<div class="swiper-container swiper-container-horizontal">
		<div class="swiper-wrapper" style="transform: translate3d(-1050px, 0px, 0px); transition-duration: 0ms;">
			<div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="9" style="width: 320px; margin-right: 30px;"><img :src="newArr[4]" alt="" /></div>
			<div class="swiper-slide" data-swiper-slide-index="0" style="width: 320px; margin-right: 30px;"><img :src="newArr[0]" alt="" /></div>
			<div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style="width: 320px; margin-right: 30px;"><img :src="newArr[1]" alt="" /></div>
			<div class="swiper-slide swiper-slide-active" data-swiper-slide-index="2" style="width: 320px; margin-right: 30px;"><img :src="newArr[2]" alt="" /></div>
			<div class="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style="width: 320px; margin-right: 30px;"><img :src="newArr[3]" alt="" /></div>
			<div class="swiper-slide" data-swiper-slide-index="4" style="width: 320px; margin-right: 30px;"><img :src="newArr[4]" alt="" /></div>
			<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 320px; margin-right: 30px;"><img :src="newArr[0]" alt="" /></div>
		</div>

		<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>

		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>-->
	<div>
		<div class="swiper-container swiper-container-horizontal">
			<div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
				<div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="9" style="background-repeat:repeat-x; width: 320px; margin-right: 30px;"></div>
		
				<div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style=" background-repeat:repeat-x ;width:100%;background-image: url('img/1.jpg'); margin-right: 30px;height: 119px;"></div>
				<!--<div class="swiper-slide" data-swiper-slide-index="1" style="width: 320px; margin-right: 30px;"><img :src="newArr[0]" alt="" /></div>-->
				<div class="swiper-slide" data-swiper-slide-index="2" style="width: 320px; margin-right: 30px;"><img :src="newArr[1]" alt="" /></div>
				<div class="swiper-slide" data-swiper-slide-index="3" style="width: 320px; margin-right: 30px;"><img :src="newArr[2]" alt="" /></div>
				<!--<div class="swiper-slide" data-swiper-slide-index="4" style="width: 320px; margin-right: 30px;"><img :src="newArr[3]" alt="" /></div>-->
				<!--<div class="swiper-slide" data-swiper-slide-index="5" style="width: 320px; margin-right: 30px;"><img :src="newArr[4]" alt="" /></div>-->
				<div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="9" style="width:100%;background-repeat:repeat-x; background-image: url('img/2.jpg'); margin-right: 30px;height: 119px;"></div>
				<div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 320px;background-repeat:repeat-x; margin-right: 30px;"></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
			<!-- Add Arrows -->
			<!--<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				arr: [],
				newArr: []
			}
		},
		methods: {
			loadMore: function() {

				console.log("aaa")
				this.$ajax({
					url: this.$store.state.base+"/hotel/api/gethotelbanners/?_rt=1500963243924",
				}).then(function(res) {
					console.log(res)
					this.arr = res.data.advList
					console.log(this.arr)
					this.newArr = [this.arr[0].picUrl, this.arr[1].picUrl, this.arr[2].picUrl]
				}.bind(this))

			}
		},
		mounted: function() {
			//后台请求数据动态生成列表
			this.loadMore()

			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
//				nextButton: '.swiper-button-next',
//				prevButton: '.swiper-button-prev',
				slidesPerView: 1,
				autoplay: 1000,
				paginationClickable: true,
				spaceBetween: 30,
				loop: true
			});

		}

	}
</script>

<style scoped>
	.swiper-slide img {
		width: 100%;
		height: 119px;
	}
</style>