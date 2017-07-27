<template>
	<div>
		<xheader></xheader>
		<xsearch></xsearch>
		<xoption></xoption>
		<!--<xsidebar></xsidebar>-->
		<!--<baidu></baidu>-->
	</div>
</template>

<script>
	import xheader from "../xheader.vue";
	import xsearch from "../xsearch.vue";
	import xoption from "../xoption.vue";
//	import xsidebar from "../xsidebar.vue";
	
	
//	import baidu from "../baidu.vue";
	
	
	export default{
		components:{
			xheader,
			xsearch,
			xoption,
//			xsidebar
//			baidu
		}
		
	}

</script>

