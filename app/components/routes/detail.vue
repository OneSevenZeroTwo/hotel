<template>
	<div class="pages">
		<div data-blend="layer" data-blend-id="h5_detail" data-url="https://m.elong.com/hotel/90889993/#indate=2017-07-27&amp;outdate=2017-07-28" id="uniq23" class="page page-on-center" data-title="【空客酒店AIRBUSHOTEL(广州白云机场人和店)】地址:机场大道东自编138号(距新白云机场5分钟车程,24小时免费机场接送)_艺龙网移动版" style="top: 0px; left: 0px; right: 0px; bottom: 0px;">
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
	export default {
		components: {
			xheader,
			xinfo,
			xdate,
			xroomtype,
			xfacilities,
			xhistory,	
			xfooter,
			
		}
	}
</script>

<style>

</style>