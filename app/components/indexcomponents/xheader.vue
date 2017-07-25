<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<!--<div @click="showPic(imgArr[0])" class="swiper-slide"><img :src="imgArr[0]" alt="" /></div>
			<div @click="showPic(imgArr[1])" class="swiper-slide"><img :src="imgArr[1]" alt="" /></div>
			<div @click="showPic(imgArr[2])" class="swiper-slide"><img :src="imgArr[2]" alt="" /></div>
			<div @click="showPic(imgArr[3])" class="swiper-slide"><img :src="imgArr[3]" alt="" /></div>
			<div @click="showPic(imgArr[4])" class="swiper-slide"><img :src="imgArr[4]" alt="" /></div>-->
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	export default {
		methods: {
			loadMore: function() {
				console.log("aaa")
				this.$ajax({
					url: "http://localhost:3000/slideshow",
				}).then(function(res) {
					console.log(res)
//					this.arr = this.arr.concat(res.data.data)
				}.bind(this))

			}
		},
		mounted: function() {
			console.log("mounted")
			//后台请求数据动态生成列表
			this.loadMore()

		}

	}
</script>

<style>

</style>