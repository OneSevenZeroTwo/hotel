<template>
	<div>
		<div class="swiper-container swiper-container-horizontal">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-active" ><img src="img/1.jpeg" alt="" /></div>
            <div class="swiper-slide swiper-slide-next" ><img src="img/2.jpeg" alt="" /></div>
            <div class="swiper-slide" ><img src="img/3.jpeg" alt="" /></div>
            <div class="swiper-slide" ><img src="img/4.jpeg" alt="" /></div>
            <div class="swiper-slide" ><img src="img/5.jpeg" alt="" /></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
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

				this.$ajax({
					url: this.$store.state.base+"/hotel/api/gethotelbanners/?_rt=1500963243924",
				}).then(function(res) {
//					console.log(res)
					this.arr = res.data.advList
//					console.log(this.arr)
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