<template>
	<div class="daidumap">
		<a @click="mapState()" class="ssss icon icon-left-nav pull-left "></a>

		<div class="littleMap" id="l-map"><br />

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},

		mounted() {

			console.log("百度地图")

			//			获取酒店的经纬度
			var hotelLatitude = Number(scope.hotelInformation.baiduLatitude)
			var hotelLongitude = Number(scope.hotelInformation.baiduLongitude)
			var hotelName = scope.hotelInformation.hotelName
			// 新建百度地图...........................点点之间为一个功能
			var map = new BMap.Map('l-map');
			//中心点
			var poi = new BMap.Point(hotelLongitude, hotelLatitude);
			map.centerAndZoom(poi, 17);
			map.enableScrollWheelZoom();

			//进入页面获取经纬度
			var mylatitude
			var mylongitude

			window.navigator.geolocation.getCurrentPosition(function(data) {
				mylatitude = data.coords.latitude
				mylongitude = data.coords.longitude
				//				注意函数执行顺序，在外面获取不到当前的经纬度
				console.log(mylatitude)
				console.log(mylongitude)
				console.log(hotelLatitude)
				console.log(hotelLongitude)
				//根据起点终点规划驾车路线,.....................
//				var p1 = new BMap.Point(mylongitude, mylatitude);
//				var p2 = new BMap.Point(hotelLongitude, hotelLatitude);
//
//				var transit = new BMap.DrivingRoute(map, {
//					renderOptions: {
//						map: map
//					},
//				});
//				transit.search(p1, p2);

			})
			//带检索功能的信息提示框.........................
			//创建检索信息窗口对象
			var searchInfoWindow = null;
			var searchInfoWindow = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
				title: hotelName, //标题
				panel: "panel", //检索结果面板
				enableAutoPan: true, //自动平移
				searchTypes: [
					BMAPLIB_TAB_TO_HERE, //到这里去
					BMAPLIB_TAB_SEARCH //周边检索
				]
			});
			var marker = new BMap.Marker(poi); //创建marker对象
			marker.enableDragging(); //marker可拖拽
			marker.addEventListener("click", function(e) {
				searchInfoWindow.open(marker);
			})
			map.addOverlay(marker); //在地图中添加marker
	

			//添加控件
			//左上角，添加比例尺..........................
			var top_left_control = new BMap.ScaleControl({
				anchor: BMAP_ANCHOR_TOP_LEFT
			})
			map.addControl(top_left_control);
			//右下角，添加默认缩放平移控件....................
			var top_left_navigation = new BMap.NavigationControl();
			map.addControl(top_left_navigation);

			//定位到当前位置控件,自带缩放控件，所以上面注释了比例尺控件..........................
			var navigationControl = new BMap.NavigationControl({
				// 靠右下角位置，可以用大写字母修改控件的位置
				anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
				// LARGE类型
				type: BMAP_NAVIGATION_CONTROL_LARGE,
				// 启用显示定位
				enableGeolocation: true
			});
			// 添加定位控件
			map.addControl(navigationControl);

			var geolocationControl = new BMap.GeolocationControl();
			geolocationControl.addEventListener("locationSuccess", function(e) {
				// 定位成功事件
				var address = '';
				address += e.addressComponent.province;
				address += e.addressComponent.city;
				address += e.addressComponent.district;
				address += e.addressComponent.street;
				address += e.addressComponent.streetNumber;
				alert("当前定位地址为：" + address);
			});
			geolocationControl.addEventListener("locationError", function(e) {
				// 定位失败事件
				alert(e.message);
			});
			map.addControl(geolocationControl);

			//实时路况........................................
			var ctrl = new BMapLib.TrafficControl({
				showPanel: false //是否显示路况提示面板
			});
			map.addControl(ctrl);
			ctrl.setAnchor(BMAP_ANCHOR_TOP_RIGHT);

		},

		methods: {
			mapState() {
				document.querySelector(".daidumap").classList.remove("scrollout")
				document.querySelector(".daidumap").classList.add("scrollin")
			}
		}
	}
</script>

<style scoped>
	.ssss {
		position: absolute;
		left: 5px;
		top: 16px;
		width: 50px;
		height: 50px;
		z-index: 9999999;
	}
	
</style>