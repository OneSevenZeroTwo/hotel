<template>
	<header :class="['bar','bar-nav','flight-order-head',{'none_backg':showHeader}]">

		<a @click="xback" class=" icon icon-left-nav pull-left tjclick" data-rel="back"></a>
		<a class="icon    icon-collect  collect  pull-right tjclick"></a>

		<h1 class="title">酒店详情</h1>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				showHeader: true
			}
		},
		components: {

		},
		methods: {
			xback() {
				location.href = history.back()
			}
		},
		mounted() {
			var self = this
			$(".page-content").scroll(function() {
				console.log(111)
				if(this.scrollTop > 120) {
					self.showHeader = false
				} else {
					self.showHeader = true
				}
			})
		}
	}
</script>

<style>

</style>