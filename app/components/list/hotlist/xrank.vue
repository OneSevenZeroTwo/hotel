//排序
<template>
	<div :class="['slide-selector','plugin-inited',{'selector-active':defaultbtn},{'plugin-show':defaultbtn}]">
		<header class="bar-nav" style="display: none;">
			<div class="radio-title">
				<span class="title">排序</span>
				<span class="cancel">取消</span>
			</div>
		</header>
		<ul class="page-content" style="margin-top: 1px; padding-top: 0px !important;">		
			<li v-for="(n,idx) in sortList" :class="['radio-item',{'selected':idx==index}]" :value="n.value" @click="rank(idx,n.value)">
				<label class="label-radio clearfix">
					<div class="radio-icon">
						<span class="radio selected"></span>
					</div>
					<div class="radio-text">{{n.name}}</div>
					<div class="check"></div>
				</label>
			</li>
		</ul>
		<div class="arrow up left"></div>
		<div class="describe" style="display: none;"></div>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				sortList:[{"key":1,"value":"1,1","name":"默认"},{"key":6,"value":"2,2","name":"口碑 高-低"},{"key":2,"value":"4,1","name":"价格 低-高"},{"key":3,"value":"4,2","name":"价格 高-低"},{"key":5,"value":"5,2","name":"星级 高-低"},{"key":4,"value":"5,1","name":"星级 低-高"}],
				index:0
				}
		},
		methods:{
			rank(index,value){
				this.index = index
				scope.trueListParams.sortmethod = value.split(',')[0]
				scope.trueListParams.sortdirection = value.split(',')[1]
				this.$store.dispatch("indexToList")
				//原生！！
//				document.querySelector(".mask-layer").style.display = 'none'
				//取消遮罩和本组件
				scope.masklayer =false
				scope.defaultbtn = false
				document.querySelector("#hotelBox").scrollTop=0

			}
		},
		computed:{
			defaultbtn:function(){
				return this.$store.state.defaultbtn
			}
		}
	}
</script>