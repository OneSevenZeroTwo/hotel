<template>
	<div class="pages">
		<div data-blend="layer" :class="['page',{'page-on-center':!showCommom},{'page-on-left':showCommom}]" style="top: 0px; left: 0px; right: 0px; bottom: 0px;">
			<xheader></xheader>

			<div :class="['page-content','new_detailst','mvt_161125',{'fixed':showFac}]" :style="{'overflow':!showFac?'visible':'hidden'}">
				<section class="detail-main detail-mainNew">
					<!--轮播，地图，评论-->
					<xinfo></xinfo>
					<!--日期-->
					<xdate></xdate>
					<!--房间类型-->
					<xroomtype></xroomtype>
					<!--酒店设施，隐藏的-->
					<xfacilities></xfacilities>

				</section>

				<!--历史浏览记录-->
				<xhistory></xhistory>

				<!--footer-->
				<xfooter></xfooter>
			</div>

			<xbuy></xbuy>
			<xmask></xmask>
			<xbaidumap></xbaidumap>
		</div>
		<xcommom></xcommom>
	</div>
</template>

<script>
	import xheader from "../detailcomponents/xheader.vue"
	import xinfo from "../detailcomponents/xinfo.vue"
	import xdate from "../detailcomponents/xdate.vue"
	import xroomtype from "../detailcomponents/xroomtype.vue"
	import xfacilities from "../detailcomponents/xfacilities.vue"
	import xhistory from "../detailcomponents/xhistory.vue"
	import xfooter from "../detailcomponents/xfooter.vue"
	import xbuy from "../detailcomponents/xbuy.vue"
	import xmask from "../detailcomponents/xmask.vue"
	import xcommom from "../detailcomponents/xcommom.vue";
	import xbaidumap from "../detailcomponents/xbaidumap.vue";

	export default {
		components: {
			xheader,
			xinfo,
			xdate,
			xroomtype,
			xfacilities,
			xhistory,
			xfooter,
			xbuy,
			xmask,
			xcommom,
			xbaidumap,

		},
		computed: {
			showCommom() {
				return scope.showCommom
			},
			showFac() {
				console.log(scope.showFac)
				return scope.showFac
			}
		},
		mounted() {

			
		}
	}
</script>

<style scoped>
	.pages .page .page-content {
		background: #fff;
	}
	
	.newdetailhsize .toptitle {
		border-bottom: none;
	}
</style>