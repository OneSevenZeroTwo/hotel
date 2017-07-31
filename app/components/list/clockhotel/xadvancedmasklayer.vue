<template>
	<div @click="slideselector()" class="advanced-mask-layer" v-show="advancedmasklayer"></div>
</template>

<script>
	export default {
		data:function(){
			return {
				//sadwqeq
				// advancedmasklayer:false,
			}
		},
		methods:{
			slideselector:function(){
				this.$store.state.slideselector = false;
				this.$store.state.advancedmasklayer = false;
			}
		},
		computed:{

			advancedmasklayer:function(){
				return this.$store.state.advancedmasklayer
			}
		}
	}
</script>