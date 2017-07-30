//房型帅选
<template>
	<div v-show="roomtitle" class="filter-sp plugin-inited ks_show room-filter">
		<div class="sp-content">
			<div v-for="p in kslist" class="price">
				<div class="sp-tit room-tit">{{p.keyWord_cn}}</div>
				<ul class="price-list room-list">
					<li v-for="pr in p.subFastFilterIns" class="" :data-id="pr.id" :data-tid="pr.typeId" :data-uid="pr.uniqueID" data-keyword="不含早">{{pr.keyWord_cn}}</li>
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
		},
		kslist:function(){
			return this.$store.state.kslist
		},
		kslist:function(){
			 if(this.$store.state.kslist[0]){
				return this.$store.state.kslist[0].subFastFilterIns
			}else{
				return ''
			}	

		}
	},
	mounted:function(){

	},

}
	
</script>