//优惠
<template>
	<div class="filter-sp plugin-inited ks_show sale-filter" v-show="saletitle">
		<div class="sp-content">
			<div class="price">
				<div class="sp-tit sale-tit">特价优惠(可多选)</div>
				<ul class="price-list room-list">
					<li v-for="p in kslist" class="" :data-keyword="p.keyWord_cn">{{p.keyWord_cn}}</li>
				</ul>
			</div>
		</div>
		<div class="bot-btn bar sp-title">
			<ul>
				<li class="tjclick" id="qs-reset" data-tj="{&quot;cspot&quot;:&quot;emptySpecialOffers&quot;}">重置</li>
				<li class="on tjclick" id="qs-submit" data-tj="{&quot;cspot&quot;:&quot;submitSpecialOffers&quot;}">确定</li>
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
			saletitle:function(){
				return this.$store.state.saletitle
			},
			kslist:function(){
				 if(this.$store.state.kslist[0]){
					return this.$store.state.kslist[0].subFastFilterIns
				}else{
					return ''
				}	

			}
		},
	}
</script>