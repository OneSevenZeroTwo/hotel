//等于定义了一个组件
<template>
	<header ng-controller='allCtrl'>
		<div class="navbar">
			<a class="brand" href="">
				<img :src="headerImg">
			</a>
		</div>
		<div ng-click="back()" class="historyBack">
			<i class="iconfont icon-arrowleft aaaa"></i>
		</div>
		<div ng-click="sideIn()" class="mine">
			<span class="iconfont icon-account"></span>
		</div>
	</header>
</template>

<script>
	export default {
		data: function() {
			return {
				headerImg: "//o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
			}
		}
	}
</script>

<style scoped="">
	header {
		position: fixed;
		left: 0;
		top: 0;
		height: 50px;
		width: 100%;
		background: #444;
		text-align: center;
		line-height: 50px;
		font-size: 20px;
		z-index: 10;
	}
</style>