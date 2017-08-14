<template>

	<li class="info_mn">
		<div class="col_tb">
			<div class="posi">
				<div class="addr">{{trafficInfo}}</div>
			</div>
		</div>
		<div class="map_bg"></div>
		<div id ="right" class="right">
			<div id="littlemap" class="map_c">
				<div width="180" height="180"></div>
				<i class="map_icons"></i>
			</div>
		</div>
	</li>
</template>
<script>
	// 百度地图
	export default {
		methods:{
			mapState(){
				document.querySelector(".daidumap").classList.remove("scrollin")
				document.querySelector(".daidumap").classList.add("scrollout")
			}
		},
		mounted() {
			var hotelLatitude = Number(scope.hotelInformation.baiduLatitude)
			var hotelLongitude = Number(scope.hotelInformation.baiduLongitude)
			var hotelName = scope.hotelInformation.hotelName
			var map = new BMap.Map("littlemap");            // 创建Map实例
			var point = new BMap.Point(hotelLongitude, hotelLatitude); // 创建点坐标
			map.centerAndZoom(point,15);
			map.addEventListener("click", this.mapState);

		},
		computed: {
			getHotelMess() {
				return scope.getHotelMess
			},
			trafficInfo(){
				return scope.hotelInformation.trafficInfo
			}
			
		}
	}
</script>
<style scoped>

</style>