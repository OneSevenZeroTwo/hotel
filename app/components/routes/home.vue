<template>
	<div>
		<xheader></xheader>
		<xsearch></xsearch>
		<xswiper></xswiper>
		<router-view></router-view>
		<xfooter></xfooter>
	</div>
</template>

<script>
	import xheader from "../xheader.vue";
	import xsearch from "../xsearch.vue";
	import xswiper from "../xswiper.vue";
	import xfooter from "../xfooter.vue";
	export default{
		components:{
			xheader,
			xsearch,
			xswiper,
			xfooter,			
		}
		
	}

</script>

