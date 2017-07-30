<template>
	<div @click="close()" class="mask-layer" v-show="Mask"></div>
</template>

<script>
	export default {
		computed:{
			Mask(){
//				console.log(scope.Mask)
				return scope.Mask
			}
		},
		methods:{
			close(){
//				console.log(1111)
				scope.Mask = false
				scope.showBuy = false
			}
		}
		
	}
</script>

<style>

</style>