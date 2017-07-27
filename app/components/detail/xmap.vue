<template>
	<div class="qqqqqq">
		
		<!--酒店地址-->
		<li class="info_mn">
			<div class="col_tb">
				<div class="posi">
					<div class="addr">朝阳区柳芳北街6号(煤炭总医院正对面)</div>
					<div class="dis">
						<span class="disc">距离柳芳地铁站0.4公里,步行至此0.8公里,约13分钟</span>
					</div>
				</div>
			</div>
			<div class="map_bg"></div>
			<div class="right">
				<div class="map_c">
					<div id="l-map"></div>
					<i class="map_icons"></i>
				</div>
			</div>
		</li>
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