<template>
	<div class="toHome">
		<mu-icon-button @click="toHome()" icon="home" />
	</div>
</template>

<script>
	export default {
		methods: {
			toHome() {
				setTimeout(()=>{
					console.log('toHome')
					window.location.href="#/index"
					
				},300)
			}
		}
	}
</script>

<style scoped>	
	.toHome {
		position: fixed;
		top: 5px;
		right: 5px;
	}
</style>