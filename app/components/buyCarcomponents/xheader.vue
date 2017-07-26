<template>
	<div>
		<header>
			<xback></xback>
			<xtohome></xtohome>
			<h1>订单详情</h1>

		</header>
	</div>
</template>

<script>
	import xback from '../xback.vue';
	import xtohome from '../toHome.vue';
	export default {
		components: {
			xback,
			xtohome
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	header {
		height: 55px;
		line-height: 55px;
		background-color: #f4f4f4;
		color: #555;
		box-shadow: 0px 1px 2px #ddd;
		text-align: center;
		font-size: 14px;
	}
	h1{
		font-size: 20px;
	}
</style>