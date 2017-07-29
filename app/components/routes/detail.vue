<template>
	<div class="pages">
		<div data-blend="layer" class="page page-on-center"  style="top: 0px; left: 0px; right: 0px; bottom: 0px;">
			<xheader></xheader>

			<div class="page-content new_detailst mvt_161125">
				<section class="detail-main detail-mainNew" style="overflow: visible;">
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
		</div>
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
			xmask
			
		}
	}
</script>

<style>
	.pages .page .page-content{
		background: #fff;
	}
	..newdetailhsize .toptitle{
		border-bottom: none;
	}
	
</style>