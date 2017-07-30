<template>
	<div class="pages">
		<div class="page page-on-center" data-blend="layer" data-blend-id="h5_list" data-url="/hotel/beijing/" id="uniq22" data-title="【北京酒店】北京酒店宾馆预订_旅店住宿价格查询_艺龙网移动版" data-title-id="h5_list">
		<xheader></xheader>
		<xsearch></xsearch>
		<xpagecontent></xpagecontent>
		<xfooter></xfooter>
		<!-- // 优惠组件 -->
		<xdiscount></xdiscount>
		<!-- //房型筛选组件 -->
		<xhousetype></xhousetype>
		<!-- // 筛选侧边栏组件 -->
		<xfiltrate></xfiltrate>
		<!-- // 区域位置组件 -->
		<xposition></xposition>
		<!-- // 星级价格组件 -->
		<xpricestar></xpricestar>
		<!-- // 排序组件 -->
		<xrank></xrank>
		<!-- 遮罩层 -->
		<xweixinmask></xweixinmask>
		<!-- //价格星级遮罩层 -->
		<xmasklayer></xmasklayer>

	</div>
</div>
</template>

<script>
	import xheader from "../xheader.vue";
	import xsearch from "../xsearch.vue";
	import xpagecontent from "../xpagecontent.vue";
	import xfooter from "../xfooter.vue";
	// 优惠组件
	import xdiscount from "../xdiscount.vue";
	//房型筛选组件
	import xhousetype from "../xhousetype.vue";
	// 筛选侧边栏组件
	import xfiltrate from "../xfiltrate.vue";
	// 区域位置组件
	import xposition from "../xposition.vue";
	// 星级价格组件
	import xpricestar from "../xpricestar.vue";
	// 排序组件
	import xrank from "../xrank.vue";
	//遮罩层
	import xweixinmask from "../xweixinmask.vue";
	//价格遮罩层
	import xmasklayer from "../xmasklayer.vue";
	export default {
		data: function() {
			return {

			}
		},
		components: {
			xheader,
			xsearch,
			xpagecontent,
			xfooter,
			xdiscount,
			xhousetype,
			xfiltrate,
			xposition,
			xpricestar,
			xrank,
			xweixinmask,
			xmasklayer
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>

