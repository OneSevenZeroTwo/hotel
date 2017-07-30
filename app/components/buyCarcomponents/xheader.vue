<template>
	<div>
		 <!--createorder-header-->
		<header class="bar bar-nav">
			<xback></xback>
			<h1 class="title">订单填写</h1>
			<toHome></toHome>
		</header>
	</div>
</template>

<script>
import xback from "../xback.vue"
import toHome from "../toHome.vue"
	export default {
		components: {
			xback,
			toHome,
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

</style>