<template>
	<div @click="masklayerclick()" class="mask-layer" v-show="masklayer"></div>
</template>

<script>
	export default {
		data:function(){
			return {

			}
		},
		methods:{
			masklayerclick:function(){
				this.$store.state.pricestarbtn = false;
				this.$store.state.masklayer = false;
				this.$store.state.defaultbtn= false;
				$('.page-list').removeClass('.page-list-content')
				$('.page-on-center').removeClass('fixed')
			}
		},
		computed:{
			masklayer:function(){
				return this.$store.state.masklayer
			}
		}
	}
</script>
