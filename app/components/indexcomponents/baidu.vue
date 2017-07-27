<template>
	<div>
		<div id="allmap"></div>
	<p>返回北京市“景点”关键字的检索结果，并展示在地图上</p>
	</div>
	
</template>

<script>
	export default {
		mounted: function() {
			//后台请求数据动态生成列表
			var map = new BMap.Map("allmap");
			map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
			var local = new BMap.LocalSearch(map, {
				renderOptions: { map: map }
			});
			local.search("北京");

		}
	}
</script>

<style>
	body,
	html {
		width: 100%;
		height: 100%;
		margin: 0;
		font-family: "微软雅黑";
	}
	
	#allmap {
		width: 100%;
		height: 500px;
	}
	
	p {
		margin-left: 5px;
		font-size: 14px;
	}
</style>