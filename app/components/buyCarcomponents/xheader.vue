<template>
	<div>
		<header class="bar bar-nav flight-order-head none_backg">
			<a class="icon icon-left-nav pull-left icon-back tjclick" data-rel="back" href="/hotel/0101/nlist/" data-tj="{&quot;cspot&quot;:&quot;back&quot;}"></a>
			<a class="icon    icon-collect  collect  pull-right tjclick" data-tj="{&quot;cspot&quot;:&quot;mycollection&quot;}"></a>
			<h1 class="title">酒店详情</h1>
		</header>
	</div>
</template>

<script>

	export default {
		components: {

		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	header {
		position: fixed;
		height: 48px;
		line-height: 48px;
		background-color: #f4f4f4;
		color: #555;
		box-shadow: 0px 1px 2px #ddd;
		text-align: center;
		font-size: 14px;
	}
	
	h1 {
		font-size: 20px;
		line-height: 48px;
	}
	.bar{
		height: 48px;
	}
</style>