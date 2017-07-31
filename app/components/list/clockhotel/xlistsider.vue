<!-- 钟点房筛选 -->
<template>
	<div class="list-sider bar">
		<ul class="filter-list">
			<li @click="titclick()" class="filter-btn">
				<p class="tit"><i class="list-filter-i1"></i>筛选</p>
				<p class="opt">条件不限</p>
			</li>
			<li class="area-btn">
				<p class="tit">
					<i class="list-filter-i2"></i>
					<span class="title-pad">区域位置</span>
					<span class="title-phone">区域位置</span>
				</p>
				<p class="opt">位置不限</p>
			</li>
			<li @click="pricelist()" class="price-star-btn">
				<p class="tit">
					<i class="list-filter-i3"></i>
					<span class="title-pad">价格</span>
					<span class="title-phone">价格</span>
				</p>
				<p class="opt">价格不限</p>
			</li>
			<li @click="defaultbtn()" class="default-btn">
				<p class="tit">
					<i class="list-filter-i4"></i>
					<span class="title-pad">排序</span>
					<span class="title-phone">排序</span>
					</p>
				<p class="opt">默认排序</p>
			</li>
		</ul>
		<a href="" class="filter-reset">重置所有选项</a>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {

			}
		},
		methods:{
			//点击footer筛选
			titclick:function(){
				this.$store.state.tit= true
				$('.page-list').addClass('page-list-content')
				$('.page-on-center').addClass('fixed')
			},
			//点击footer排序
			defaultbtn:function(){
				this.$store.state.slideselector= true;
				this.$store.state.advancedmasklayer = true;
				// $('.page-list').addClass('page-list-content')
				// $('.page-on-center').addClass('fixed')
			},
			//点击footer价格
			pricelist:function(){
				this.$store.state.filtepricestar= true;
				this.$store.state.pricemasklayer = true;
				// $('.page-list').addClass('page-list-content')
				// $('.page-on-center').addClass('fixed')
			},
		},
		computed:{

		},
		mounted:function(){

		}
	}
</script>