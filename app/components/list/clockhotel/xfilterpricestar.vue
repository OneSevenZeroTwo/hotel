<template>
	<div style="" :class="['filter-sp','filter-price-star','list-weixin-component','weixin-hide','plugin-inited',{'filter-sp-active':filtepricestar},{'plugin-show':filtepricestar}]">
		<span class="arrow"></span>
		<div class="sp-title">
			<span @click="left()" class="left">取消</span> 
			<span class="title">价格</span> 
			<span class="right">确定</span>
		</div>
		<div class="sp-content">
			<div class="price">
				<ul class="price-list">
					<li class="on" price-value="0">不限</li>
					<li price-value="0-50" class="">0-50</li>
					<li price-value="50-80" class="">50-80</li>
					<li price-value="80-100" class="">80-100</li>
					<li price-value="100-120" class="">100-120</li>
					<li price-value="120" class="">120以上</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {

			}
		},
		methods:{
			left:function(){
				this.$store.state.filtepricestar =false;
			}

		},
		computed:{
			filtepricestar:function(){
				return this.$store.state.filtepricestar;
			}
		}
	}
</script>