//房型帅选
<template>
	<div v-show="roomtitle" class="filter-sp plugin-inited ks_show room-filter">
		<div class="sp-content">
			<div class="price">
				<div class="sp-tit room-tit">早餐</div>
				<ul class="price-list room-list">
					<li class="" data-id="100000043" data-tid="1100" data-uid="100" data-keyword="不含早">不含早</li>
					<li class="" data-id="100000041" data-tid="1100" data-uid="36" data-keyword="含单早">含单早</li>
					<li class="" data-id="100000040" data-tid="1100" data-uid="35" data-keyword="含双早">含双早</li>
					<li class="" data-id="100000042" data-tid="1100" data-uid="37" data-keyword="含三早及以上">含三早及以上</li>
				</ul>
			</div>
			<div class="price">
				<div class="sp-tit room-tit">支付方式</div>
				<ul class="price-list room-list">
					<li class="" data-id="100000001" data-tid="1100" data-uid="29" data-keyword="预付">预付</li>
					<li class="" data-id="100000002" data-tid="1100" data-uid="30" data-keyword="到店付">到店付</li>
				</ul>
			</div>
			<div class="price">
				<div class="sp-tit room-tit">服务(可多选)</div>
				<ul class="price-list room-list">
					<li class="" data-id="139" data-tid="1100" data-uid="101" data-keyword="免费取消">免费取消</li>
					<li class="" data-id="138" data-tid="1100" data-uid="103" data-keyword="艺龙直销">艺龙直销</li>
					<li class="" data-id="141" data-tid="1100" data-uid="102" data-keyword="立即确认">立即确认</li>
					<li class="" data-id="140" data-tid="1100" data-uid="104" data-keyword="含礼包">含礼包</li>
				</ul>
			</div>
		</div>
		<div class="bot-btn bar sp-title">
			<ul>
				<li class="tjclick" id="qs-reset" data-tj="{&quot;cspot&quot;:&quot;emptyRoomtypeFilter&quot;}">重置</li>
				<li class="on tjclick" id="qs-submit" data-tj="{&quot;cspot&quot;:&quot;submitRoomtypeFilter&quot;}">确定</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data:function(){
		return {
			
		}
	},
	methods:{
		
		
		
	},
	computed:{
		roomtitle:function(){
			return this.$store.state.roomtitle
		}
	},
	mounted:function(){

	}
}
	
</script>