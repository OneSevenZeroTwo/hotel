<template>
	<header :class="['bar','bar-nav','flight-order-head',{'none_backg':showHeader}]">

		<a @click="xback" class="sss a icon icon-left-nav pull-left tjclick" data-rel="back"></a>
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
				scope.listFilterParams.srcollResh = true
//				this.$store.state.cshow1 = false				
//				this.$store.state.cshow2 = false				
//				this.$store.state.cshow3 = false				
				
			}
		},
		mounted() {

			
			var self = this
			$(".page-content").scroll(function() {

				if(this.scrollTop > 120) {
					self.showHeader = false
					$(".sss").css('color','#858585')
				} else {
					$(".sss").css('color','#fff')
					self.showHeader = true
				}
			})
		}
	}
</script>

<style>

</style>