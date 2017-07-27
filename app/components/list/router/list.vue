<template>
	<!-- <div>	
		<div class="pages">
		<div class="page page-on-center" data-blend="layer" data-blend-id="h5_list" data-url="/hotel/beijing/" id="uniq22" data-title="【北京酒店】北京酒店宾馆预订_旅店住宿价格查询_艺龙网移动版" data-title-id="h5_list">
			<xheader></xheader>
			<xsearch></xsearch>
			<xlist></xlist>
			<xfooter></xfooter>
		</div>
		</div>
	</div>  -->

	<div class="pages">
		<div class="page page-on-center" data-blend="layer" data-blend-id="h5_list" data-url="/hotel/beijing/" id="uniq22" data-title="【北京酒店】北京酒店宾馆预订_旅店住宿价格查询_艺龙网移动版" data-title-id="h5_list">
		<xheader></xheader>
		<xsearch></xsearch>
		<xpagecontent></xpagecontent>
		<xfooter></xfooter>
	</div>
</div>
</template>

<script>
	import xheader from "../xheader.vue";
	import xsearch from "../xsearch.vue";
	import xpagecontent from "../xpagecontent.vue";
	import xfooter from "../xfooter.vue";
	export default {
		data: function() {
			return {

			}
		},
		components: {
			xheader,
			xsearch,
			xpagecontent,
			xfooter
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>

