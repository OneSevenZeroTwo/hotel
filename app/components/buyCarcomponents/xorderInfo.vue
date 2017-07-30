<template>
	<section class="order-info">
		<h1>酒店详情
				    <span>
				  	<div class="preferential-price">恭喜，您找到的是该房型最优惠的价格。</div>
				    </span>
				    </h1>
		
		<div class="p-info   p-info-top  ">
			<p class="name" style="margin-top: 50px;">{{roomInfoName}}</p>
			<p class="type">普通间（大床/双床）地下室
			</p>
			<p class="type">不含早</p>
			<p>
			</p>
			<p class="date">7月31日(周一)— 8月1日(周二) 共1晚</p>
			<div class="preferential-price">恭喜，您找到的是该房型最优惠的价格。</div>
			<div class="immediatelyConfirm-enough">订单提交后，酒店将第一时间确认您的订单。</div>
		</div>
	</section>
</template>

<script>
export default{
	computed:{
		roomInfoName(){
			return scope.roomInfoName
		}
	}
}
</script>

<style scoped>
	

</style>