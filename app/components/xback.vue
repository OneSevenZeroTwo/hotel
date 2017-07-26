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
	mu-icon-button {
		font-size: 20px;
	}
	
	.back {
		position: fixed;
		top: 5px;
		left: 5px;
	}
</style>