<template>
	<section class="order-info">
		<h1>酒店详情
				    <span>
				  	<div class="preferential-price">恭喜，您找到的是该房型最优惠的价格。</div>
				    </span>
				    </h1>
		
		<div class="p-info   p-info-top  ">
			<!--酒店名-->
			<p class="name" style="margin-top: 50px;">{{roomInfoName}}</p>
			<!--酒店房型-->
			<p class="type">{{roomInfoName}}
			</p>
			<!--提供服务-->
			<p class="type">{{productName}}</p>
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
		},
		productName(){
			return scope.orderList.productName
		}
	}
}
</script>

<style scoped>
	

</style>