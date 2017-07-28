<template>
	<div class="advanced-mask-layer" @click="closeMask()"></div>
</template>

<script>
export default{
	methods:{
		closeMask(){
			this.$store.state.isShowMask = false;
				
				$('.advanced-mask-layer').css('display','none');
				$('.slide-selector').removeClass('plugin-show');
				$('.slide-selector').removeClass('selector-active');
				$('.sure').removeClass('plugin-show');
//			}
		},
		
	}
}
</script>
 
<style>
	.advanced-mask-layer{
		display: none;
	}
</style>