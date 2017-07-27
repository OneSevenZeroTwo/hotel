<template>
	<div>
		<xheader></xheader>
		<xsearch></xsearch>
		<xoption></xoption>
		<xsidebar></xsidebar>
		<xtool></xtool>
		<ximages></ximages>
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
	
	
	
	
//	import baidu from "../baidu.vue";
	
	
	export default{
		components:{
			xheader,
			xsearch,
			xoption,
			xsidebar,
			xtool,
			ximages
//			baidu
		}
		
	}

</script>

