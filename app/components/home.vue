<template>
	<div style="position: relative;">
		<xgallery></xgallery>
		<xtrading></xtrading>
		<xheader></xheader>
		<xdate></xdate>
		<xsearch></xsearch>
		<xoption></xoption>
		<xsidebar></xsidebar>
		<xtool></xtool>
		<ximages></ximages>
		<xlists></xlists>
		<xstars></xstars>

		<!--<baidu></baidu>-->
	</div>
</template>

<script>
	import xheader from "./indexcomponents/xheader.vue";
	import xsearch from "./indexcomponents/xsearch.vue";
	import xoption from "./indexcomponents/xoption.vue";
	import xsidebar from "./indexcomponents/xsidebar.vue";
	import xtool from "./indexcomponents/xtool.vue";
	import ximages from "./indexcomponents/ximages.vue";
	import xlists from "./indexcomponents/xlists.vue";
	import xstars from "./indexcomponents/xstars.vue";
	import xdate from "./indexcomponents/xdate.vue";
	import xtrading from "./indexcomponents/xtrading.vue";
	import xgallery from "./xgallery.vue";
	

	
	
	
	
	
	
	
	
	
	
//	import baidu from "../baidu.vue";
	
	
	export default{
		components:{
			xheader,
			xsearch,
			xoption,
			xsidebar,
			xtool,
			ximages,
			xlists,
			xstars,
			xdate,
			xtrading,
			xgallery
//			baidu
		}
		
	}

</script>

<style>
	
</style>