<template>
	<div style="position: relative;">
		<xheader></xheader>
		<shijian></shijian>
		<xsearch></xsearch>
		<xoption></xoption>
		<xsidebar></xsidebar>
		<xtool></xtool>
		<ximages></ximages>
		<xlists></xlists>
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
	import shijian from "./indexcomponents/shijian.vue";
	
	
	
	
	
	
	
	
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
			shijian
//			baidu
		}
		
	}

</script>

