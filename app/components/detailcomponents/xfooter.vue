<template>
	<section class="tool">
		<div class="ver">
			<a href="javascript:void(0);" class="xq"><i class=" icon-collect  "></i>我感兴趣</a><span>｜</span>
			<a href="javascript:void(0);" class="ht"><i class="icon-phone"></i>联系电话</a>
		</div>
		<div class="copy">©2009-2017 艺龙无线</div>
	</section>
</template>

<script>
	export default {
		mounted() {
			
		
		this.$ajax({
			url: "http://localhost:3000/listFilter",
			params:{
				cityId:"2001"
			}
		}).then(function(res) {
			console.log(res)
			
			console.log(JSON.parse(res.data.city))
			console.log(JSON.parse(res.data.FilterList))
			console.log(JSON.parse(res.data.searchList))
			console.log(JSON.parse(res.data.areaList))
			console.log(JSON.parse(res.data.hotCityList))
		})
	}
	}
</script>

<style>

</style>