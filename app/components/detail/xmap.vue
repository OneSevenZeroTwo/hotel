<template>
	<div  class="qqqqqq">
		<div @click="test()" id="l-map"></div>

	</div>

</template>
<script>
	// 百度地图API功能
	export default {
		methods: {
			test() {
				console.log(111111)
				$("#l-map").css('height', "100%")
				$("#l-map").css('top', "0")
			}
		},
		mounted() {
			// 百度地图API功能
			var map = new BMap.Map("l-map");
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 30);

			var start = "百度大厦";
			var end = "北京邮电大学西门";
			var routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
			var transit = new BMap.TransitRoute(map, {
				renderOptions: {
					map: map
				},
				policy: 0
			});
			(function() {
				map.clearOverlays();
				//				var i = $("#driving_way select").val();
				var i = "最少时间"
				search(start, end, routePolicy[i]);

				function search(start, end, route) {
					transit.setPolicy(route);
					transit.search(start, end);
				}
			})();
		}
	}
</script>
<style scoped>
	#l-map {
		position: absolute;
		width: 100%;
		height: 15%;
		top: 195px;
		border: 1px solid #999;
	}
</style>