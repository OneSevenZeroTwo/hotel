<!-- //遮罩层 -->
<template>
	<div class="mask-layer" v-show="pricemasklayer"></div>
</template>

<script>
	export default {
		data:function(){
			return {

			}
		},
		methods:{
			masklayerclick:function(){

			}
		},
		computed:{
			pricemasklayer:function(){
				return this.$store.state.pricemasklayer
			}
		},
	}
</script>