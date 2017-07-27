<template>
	<div class="back">
		<mu-icon-button @click="back()" icon="keyboard_arrow_left" />
	</div>
</template>

<script>
	export default {
		methods: {
			back() {
				setTimeout(()=>{
					console.log('返回')
					window.history.back()
					
				},300)
			}
		}
	}
</script>

<style>

	.back {
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 99999;
	}
</style>