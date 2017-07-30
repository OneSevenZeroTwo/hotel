<template>

	<li class="info_mn">
		<div class="col_tb">
			<div class="posi">
				<div class="addr">机场大道东自编138号(距新白云机场5分钟车程,24小时免费机场接送)</div>
				<div class="dis">
					<span class="disc">距离机场南地铁站0.2公里,步行至此0.7公里,约12分钟</span>
				</div>
			</div>
		</div>
		<div class="map_bg"></div>
		<div class="right">
			<div class="map_c">
				<img width="180" height="180" src="//apis.map.qq.com/ws/staticmap/v2/?center=23.385337,113.303861&amp;zoom=14&amp;key=4BCBZ-OGQWX-3PE4P-ZNP3C-EU77E-QGF3Z&amp;size=500*250&amp;scale=2">
				<i class="map_icons"></i>
			</div>
		</div>
	</li>
</template>
<script>
	// 腾讯地图
	export default {
		mounted(){
			window.navigator.geolocation.getCurrentPosition(function(data) {
				console.log(data)

			}, function(err) {

			})
			
		}
	}
</script>
<style scoped>

</style>