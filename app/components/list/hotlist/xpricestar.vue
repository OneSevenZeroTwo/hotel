//星级价格
<template>
	<div :class="['filter-sp','plugin-inited',{'filter-sp-active':pricestarbtn},{'plugin-show':pricestarbtn}]" style="">
		<span class="arrow"></span>
		<div class="sp-content">
			<div class="star">
				<div class="sp-tit">星级（可多选）</div>
				<ul class="star-list">
					<li @click="starlevels($event)" sn="-1" class="on buxian">不限</li>
					<li @click="starlevels($event)" sn="12" class="">经济/客栈</li>
					<li @click="starlevels($event)" sn="3" class="">三星/舒适</li>
					<li @click="starlevels($event)" sn="4" class="">四星/高档</li>
					<li @click="starlevels($event)" sn="5" class="">五星/豪华</li>
				</ul>
			</div>
			<div class="price">
				<div class="sp-tit">价格</div>
				<ul class="price-list">
					<li class="buxian on" price-value="0">不限</li>
					<li @click="priceSort($event)" price-value="0-150" data-low="0" data-top="150" class="">0-150</li>
					<li @click="priceSort($event)" price-value="150-300" data-low="150" data-top="300" class="">150-300</li>
					<li @click="priceSort($event)" price-value="300-450" data-low="300" data-top="450" class="">300-450</li>
					<li @click="priceSort($event)" price-value="450-700" data-low="450" data-top="700" class="">450-700</li>
					<li @click="priceSort700($event)"  price-value="700" data-low="700"  class="">700以上</li>
				</ul>
			</div>
		</div>
		<div class="sp-title">
			<span @click="leftclick()" class="left" style="position: relative;padding:0">取消</span> 
			<span @click="rightclick()" class="right" style="position: relative;padding:0">确定</span>
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
			priceSort(e){
				$(e.target).addClass('on').siblings().removeClass("on")
				scope.trueListParams.lowprice = e.target.dataset.low
				scope.trueListParams.highprice = e.target.dataset.top
				
			},
			priceSort700(e){
				$(e.target).addClass('on').siblings().removeClass("on")
				console.log(e.target.dataset.low)
				scope.trueListParams.lowprice = e.target.dataset.low
				
			},
			starlevels(e){
				$(e.target).addClass('on').siblings().removeClass("on")
				scope.trueListParams.starlevels = e.target.getAttribute('sn')
				console.log(scope.trueListParams.starlevels)
			},
		
			//点击取消
			leftclick:function(){
				this.$store.state.masklayer = false;
				this.$store.state.pricestarbtn= false;
				
//				取消时默认选中不限
				scope.trueListParams.starlevels = "-1"
				scope.trueListParams.lowprice = "0"
				$(".buxian").addClass('on').siblings().removeClass("on")
				$('.page-list').removeClass('page-list-content')
				$('.page-on-center').removeClass('fixed')
				
			},
			//点击确定
			rightclick:function(){
				this.$store.state.masklayer = false;
				this.$store.state.pricestarbtn= false;
				$('.page-list').removeClass('page-list-content')
				$('.page-on-center').removeClass('fixed')
				this.$store.dispatch("indexToList")
				
			},
			
		},
		computed:{
			pricestarbtn:function(){
				return this.$store.state.pricestarbtn
			}
		},
		mounted:function(){

		}
	}
</script>

