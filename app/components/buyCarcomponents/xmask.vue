<template>
	<div class="advanced-mask-layer" @click="closeMask(false)"></div>
</template>

<script>
export default{
	methods:{
		closeMask(bool){
			this.$store.state.isShowMask = bool;
			$('.advanced-mask-layer').css('display','none');
			$('.plugin-inited').removeClass('plugin-show');
			$('.plugin-inited').removeClass('selector-active');
		}
	}
}
</script>

<style>
	.advanced-mask-layer{
		display: none;
	}
</style>